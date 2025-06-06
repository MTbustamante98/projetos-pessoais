const modal = document.querySelector(".modal");
const configs = document.querySelector(".configs");
const containerTasks = document.querySelector(".add-list-tasks");
const menu = document.querySelector(".menu");
const arrowClose = document.querySelector("[data-img-close='tasks']");
const modalLinks = document.querySelectorAll(
  "[data-modal], [data-config], [data-menu='button']"
);
const divAddTasks = document.querySelector(".tasks");
const imgClose = document.querySelectorAll("[data-img-close]");
const closeModals = [modal, configs, menu];
const active = "active";

function initModals() {
  function openModal(e) {
    if (e) e.preventDefault();
    e.stopPropagation();

    const target = e.target;

    if (target.hasAttribute("data-modal")) {
      modal.classList.add(active);
    }

    if (target.hasAttribute("data-config")) {
      configs.classList.add(active);
    }

    if (target.closest("[data-menu]")) {
      menu.classList.toggle(active);
      modalLinks[2].classList.toggle("scale-effect");
    }
  }

  function closeModal(e) {
    const target = e.target;
    closeModals.forEach((modal, index) => {
      if (target === modal && index < 2) modal.classList.remove(active);

      if (index === 2 && !modal.contains(target)) {
        modal.classList.remove(active);
        modalLinks[2].classList.remove("scale-effect");
      }
    });
  }

  function imgCloseModalAndConfigs(event) {
    const type = event.target.dataset.imgClose;
    if (type === "modal") {
      modal.classList.remove(active);
    } else if (type === "configs") {
      configs.classList.remove(active);
    } else {
      containerTasks.classList.remove(active);
      arrowClose.classList.toggle(active);
    }
  }

  modalLinks.forEach((el) => el.addEventListener("click", openModal));
  document.addEventListener("click", closeModal);
  imgClose.forEach((el) =>
    el.addEventListener("click", imgCloseModalAndConfigs)
  );
}
initModals();

// function starTyping() {
//   const paragraphMessage = document.querySelector(".message");
//   const frases = [
//     "Bem-vindo(a) ao PomoClock.",
//     "Configure o timer, dê start, concentre-se e trabalhe.",
//     "Foco e atenção.",
//   ];
//   let index = 0;

//   function initPhrase(frases, callback) {
//     let acumulada = "";
//     for (let i = 0; i < frases.length; i++) {
//       setTimeout(() => {
//         acumulada += frases[i];
//         paragraphMessage.textContent = acumulada;

//         if (i === frases.length - 1 && callback) {
//           setTimeout(callback, 500);
//         }
//       }, i * 50);
//     }
//   }

//   function executarFrases(index) {
//     if (index >= frases.length) return;

//     initPhrase(frases[index], () => {
//       setTimeout(() => {
//         paragraphMessage.textContent = "";
//         if (index === frases.length - 1) {
//           tasks.classList.add("active");
//         } else {
//           executarFrases(index + 1);
//         }
//       }, 1000);
//     });
//   }
//   executarFrases(0)
// }
// starTyping();

function initAddTasks() {
  const arrowClose = document.querySelector("[data-img-close='tasks']");

  function addTasks() {
    containerTasks.classList.toggle("active");
    arrowClose.classList.toggle("active");
  }

  divAddTasks.addEventListener("click", addTasks);
}
initAddTasks();

function initPomodoros() {
  const pomodoros = document.querySelectorAll(
    ".div-clocks [data-type='pomodoro']"
  );
  const dataTimer = document.querySelector("[data-timer]");
  const documentBody = document.body;

  if (pomodoros.length) pomodoros[0].classList.add("active");

  function choosePomodoro(e) {
    pomodoros.forEach((el) => el.classList.remove("active"));
    e.target.classList.add("active");

    if (e.target.classList.contains("pomodoro-clock")) {
      dataTimer.innerText = "25:00";
      documentBody.style.backgroundColor = "var(--tomato)";
    }

    if (e.target.classList.contains("short-pause-pomodoro")) {
      dataTimer.innerText = "05:00";
      documentBody.style.backgroundColor = "var(--backgroundShortBreak)";
    }

    if (e.target.classList.contains("long-pause-pomodoro")) {
      dataTimer.innerText = "15:00";
      documentBody.style.backgroundColor = "var(--backgroundLongBreak)";
    }
  }
  pomodoros.forEach((el) => el.addEventListener("click", choosePomodoro));
}
initPomodoros();

let tasks = [];

try {
  const stored = JSON.parse(localStorage.getItem("tasksData")) || [];
  if (Array.isArray(stored)) tasks = stored;
} catch (e) {
  console.error("Erro ao ler taskData", e);
}

function initTasks() {
  const inputDescriptionTask = document.getElementById("task");
  const textArea = document.querySelector("textarea");
  const addNotes = document.querySelector("[data-notes]");
  const buttonAddTasks = document.querySelector("[data-add-tasks]");
  const divInputTasks = document.querySelector(".inputTasks");

  function addTextArea() {
    textArea.classList.toggle("active");
  }

  function renderTasks(elementTasks = tasks) {
    divInputTasks.innerHTML = "";
    elementTasks.forEach((task, index) => {
      const taskElement = createTaskElement(
        task.title,
        task.note,
        index,
        task.done
      );
      divInputTasks.appendChild(taskElement);
    });
    addCounter();
  }

  function addTasksAndNotes() {
    const title = inputDescriptionTask.value.trim();
    const note = textArea.value.trim();

    if (!title) return;

    const newTask = {
      title,
      note,
      done: false,
    };

    tasks.push(newTask);

    localStorage.setItem("tasksData", JSON.stringify(tasks));
    renderTasks();

    inputDescriptionTask.value = "";
    textArea.value = "";
  }

  function createTaskElement(title, note, index) {
    const span = createElementSpan();
    const para = createElementParagraph(title);
    const div = createElementDiv(note);
    const btnEditSave = createElementEditAndSave();
    const wrapper = createElementWrapper();
    const checkbox = createElementCheckBox(index, para);
    addDropDownEvent(btnEditSave, index, para, div, span, wrapper);
    wrapper.append(checkbox, para, btnEditSave);
    span.append(wrapper);
    if (note) span.appendChild(div);

    return span;
  }

  function addDropDownEvent(btnDropDown, index, para, div, span, wrapper) {
    document.addEventListener("click", (e) => {
      const divDropDown = document.querySelector(".activedDivDropDown");
      const target = e.target;

      if (!divDropDown) return;

      if (divDropDown && !divDropDown.contains(target)) {
        removeElementsUI(divDropDown);
        removeScaleEffectAllElements();
      }
    });

    btnDropDown.addEventListener("click", (e) => {
      const divDropDown = document.querySelector(".activedDivDropDown");
      e.stopPropagation();
      btnDropDown.classList.toggle("scale-effect");

      if (divDropDown) {
        removeElementsUI(divDropDown);
        return;
      } else {
        const newDivDropDown = document.createElement("div");
        newDivDropDown.classList.add("activedDivDropDown");

        const rect = btnDropDown.getBoundingClientRect();

        newDivDropDown.style.position = "absolute";
        newDivDropDown.style.top = `${rect.bottom + window.scrollY}px`;

        const [edit, divEdit, save] = createElementEdit(
          index,
          para,
          div,
          btnDropDown,
          newDivDropDown,
          span,
          wrapper
        );
        const [remove, divRemove] = createElementRemove(index, newDivDropDown);
        newDivDropDown.append(divEdit, divRemove);
        document.body.appendChild(newDivDropDown);
      }
    });
  }

  function createElementEdit(
    index,
    para,
    div,
    btnDropDown,
    divDropDown,
    span,
    wrapper
  ) {
    const edit = document.createElement("span");
    edit.classList.add("edit");
    edit.innerText = "Editar";

    const divEdit = document.createElement("div");
    divEdit.classList.add("divListEdit");

    const save = document.createElement("button");
    save.type = "button";
    save.classList.add("activatedButtonSave");
    save.innerText = "Salvar";

    divEdit.appendChild(edit);

    divEdit.addEventListener("click", () => {
      const inputEditTask = document.createElement("input");
      inputEditTask.type = "text";
      inputEditTask.classList.add("activatedInputTasks");
      inputEditTask.value = tasks[index].title;

      const inputEditNote = document.createElement("input");
      inputEditNote.type = "text";
      inputEditNote.classList.add("activatedInputNote");
      inputEditNote.value = tasks[index].note;

      para.replaceWith(inputEditTask);
      div.replaceWith(inputEditNote);
      wrapper.insertAdjacentElement("beforeend", save);

      removeElementsUI(divDropDown, btnDropDown);

      save.addEventListener("click", () => {
        tasks[index].title = inputEditTask.value;
        tasks[index].note = inputEditNote.value;

        if (!tasks[index].title) return;

        localStorage.setItem("tasksData", JSON.stringify(tasks));
        const updateTaskElements = createTaskElement(
          tasks[index].title,
          tasks[index].note,
          index
        );
        span.replaceWith(updateTaskElements);
        renderTasks();
      });
    });

    return [edit, divEdit, save];
  }

  function removeElementsUI(dropDown, button) {
    dropDown?.remove();
    button?.remove();
  }

  function createElementRemove(index, newDivDropDown) {
    const remove = document.createElement("span");
    remove.classList.add("remove");
    remove.innerText = "Remover";

    const divRemove = document.createElement("div");
    divRemove.classList.add("divListRemove");

    divRemove.appendChild(remove);

    divRemove.addEventListener("click", () => {
      tasks.splice(index, 1);
      removeElementsUI(newDivDropDown);
      localStorage.setItem("tasksData", JSON.stringify(tasks));
      renderTasks();
      addCounter();
    });

    return [remove, divRemove];
  }

  function addCounter() {
    const count = document.querySelector("[data-count]");
    count.innerText = tasks.length;
  }

  function createElementCheckBox(index, para) {
    const checkbox = document.createElement("div");
    checkbox.classList.add("activatedDivCheckBox");
    checkbox.setAttribute("role", "checkbox");
    checkbox.setAttribute("aria-checked", tasks[index]?.done);

    if (tasks[index]?.done) {
      checkbox.setAttribute(
        "aria-checked",
        checkbox.classList.add("alternateStateCheckbox")
      );
      para.classList.add("alternateStateParagraph");
    }

    checkbox.addEventListener("click", () => {
      checkbox.classList.toggle("alternateStateCheckbox");
      para.classList.toggle("alternateStateParagraph");

      tasks[index].done = checkbox.classList.contains("alternateStateCheckbox");
      allTasksCompleted();
      reOrder();
      localStorage.setItem("tasksData", JSON.stringify(tasks));
    });

    return checkbox;
  }

  function reOrder() {
    const reorder = [...tasks].sort((a, b) => a.done - b.done);

    tasks.length = 0;
    tasks.push(...reorder);
    localStorage.setItem("tasksData", JSON.stringify(tasks));

    renderTasks();
  }

  function removeAllCompletedTasks() {
    const removeCompletedTasks = document.querySelector(
      ".menu [data-completed]"
    );

    removeCompletedTasks.addEventListener("click", () => {
      const taskCompleted = tasks.filter((el) => !el.done);
      localStorage.setItem("tasksData", JSON.stringify(taskCompleted));

      tasks.length = 0;
      tasks.push(...taskCompleted);

      removeMenuUI(menu);
      removeScaleEffectAllElements();
      renderTasks();
    });
  }

  function handleRemoveAllTasks() {
    const removeAllTasks = document.querySelector(".menu [data-remove-all]");

    removeAllTasks.addEventListener("click", () => {
      tasks.length = 0;
      localStorage.setItem("tasksData", JSON.stringify(tasks));

      removeMenuUI(menu);
      removeScaleEffectAllElements();
      renderTasks();
    });
  }

  function removeAllTasks() {
    tasks.length = 0;
    localStorage.setItem("tasksData", JSON.stringify([]));
    renderTasks();
  }

  function allTasksCompleted() {
    const completedTask = tasks.every((el) => el.done);
    if (tasks.length > 0 && completedTask) {
      setTimeout(() => {
        alert("Parabéns, você concluiu todas as tarefas!");
        removeAllTasks();
      }, 500);
    }
  }

  function removeScaleEffectAllElements() {
    document.querySelectorAll(".scale-effect").forEach((btn) => {
      btn.classList.remove("scale-effect");
    });
  }

  function removeMenuUI(menu) {
    const isVisible = menu.classList.contains("active");

    menu.classList.toggle("active", !isVisible);
    menu.classList.toggle("removeMenu", isVisible);
  }

  function createElementWrapper() {
    const elementWrapper = document.createElement("div");
    elementWrapper.classList.add("wrapper");

    return elementWrapper;
  }

  function createElementSpan() {
    const spanElement = document.createElement("span");
    spanElement.classList.add("activatedSpan");

    return spanElement;
  }

  function createElementParagraph(text) {
    const paragraphElement = document.createElement("p");
    paragraphElement.classList.add("activatedParagraph");
    paragraphElement.innerText = text;

    return paragraphElement;
  }

  function createElementDiv(text) {
    const divElement = document.createElement("div");
    divElement.classList.add("activatedDiv");
    divElement.innerText = text;

    return divElement;
  }

  function createElementEditAndSave() {
    const btnEditSave = document.createElement("button");
    btnEditSave.type = "button";
    btnEditSave.classList.add("activatedEditAndSave");
    const imgDropDown = document.createElement("img");
    imgDropDown.src = "./images/three-points.svg";
    imgDropDown.style.marginTop = "2px";
    btnEditSave.appendChild(imgDropDown);

    return btnEditSave;
  }

  addNotes.addEventListener("click", addTextArea);
  buttonAddTasks.addEventListener("click", addTasksAndNotes);
  removeAllCompletedTasks();
  handleRemoveAllTasks();
  renderTasks();
}
initTasks();
