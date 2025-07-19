import {
  inputDescriptionTask,
  textArea,
  divInputTasks,
  count,
  divDropDown,
} from "./tasksElements.js";

let tasks = [];

try {
  const stored = JSON.parse(localStorage.getItem("tasksData")) || [];
  if (Array.isArray(stored)) tasks = stored;
} catch (e) {
  console.error("Erro ao ler taskData", e);
}

export default function initTasks() {
  renderTasks();
}

export function renderTasks(elementTasks = tasks) {
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

export function addTasksAndNotes() {
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

export function createTaskElement(title, note, index) {
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

export function createElementSpan() {
  const spanElement = document.createElement("span");
  spanElement.classList.add("activatedSpan");
  return spanElement;
}

export function createElementParagraph(text) {
  const paragraphElement = document.createElement("p");
  paragraphElement.classList.add("activatedParagraph");
  paragraphElement.innerText = text;
  return paragraphElement;
}

export function createElementDiv(text) {
  const divElement = document.createElement("div");
  divElement.classList.add("activatedDiv");
  divElement.innerText = text;
  return divElement;
}

export function createElementEditAndSave() {
  const btnEditSave = document.createElement("button");
  btnEditSave.type = "button";
  btnEditSave.classList.add("activatedEditAndSave");
  const imgDropDown = document.createElement("img");
  imgDropDown.src = "./images/three-points.svg";
  imgDropDown.style.marginTop = "2px";
  btnEditSave.appendChild(imgDropDown);
  return btnEditSave;
}

export function createElementWrapper() {
  const elementWrapper = document.createElement("div");
  elementWrapper.classList.add("wrapper");
  return elementWrapper;
}

export function createElementCheckBox(index, para) {
  const checkbox = document.createElement("div");
  checkbox.classList.add("activatedDivCheckBox");
  checkbox.setAttribute("role", "checkbox");
  checkbox.setAttribute("aria-checked", tasks[index]?.done);

  if (tasks[index]?.done) {
    checkbox.classList.add("alternateStateCheckbox");
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

export function addDropDownEvent(btnDropDown, index, para, div, span, wrapper) {
  document.addEventListener("click", (e) => {
    if (!divDropDown) return;
    if (divDropDown && !divDropDown.contains(e.target)) {
      removeElementsUI(divDropDown);
      removeScaleEffectAllElements();
    }
  });

  btnDropDown.addEventListener("click", (e) => {
    e.stopPropagation();
    btnDropDown.classList.toggle("scale-effect");

    if (divDropDown) {
      removeElementsUI(divDropDown);
      return;
    }

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
  });
}

export function createElementEdit(
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

export function createElementRemove(index, divDropDown) {
  const remove = document.createElement("span");
  remove.classList.add("remove");
  remove.innerText = "Remover";

  const divRemove = document.createElement("div");
  divRemove.classList.add("divListRemove");
  divRemove.appendChild(remove);

  divRemove.addEventListener("click", () => {
    tasks.splice(index, 1);
    removeElementsUI(divDropDown);
    localStorage.setItem("tasksData", JSON.stringify(tasks));
    renderTasks();
    addCounter();
  });

  return [remove, divRemove];
}

export function removeElementsUI(dropDown, button) {
  dropDown?.remove();
  button?.remove();
}

export function removeAllCompletedTasks() {
  const taskCompleted = tasks.filter((el) => !el.done);
  localStorage.setItem("tasksData", JSON.stringify(taskCompleted));

  tasks.length = 0;
  tasks.push(...taskCompleted);

  removeMenuUI(menuCleanTasks);
  removeScaleEffectAllElements();
  renderTasks();
}

export function handleRemoveAllTasks() {
    tasks.length = 0;
    localStorage.setItem("tasksData", JSON.stringify(tasks));

    removeMenuUI(menuCleanTasks);
    removeScaleEffectAllElements();
    renderTasks();
}

export function removeScaleEffectAllElements() {
  document.querySelectorAll(".scale-effect").forEach((btn) => {
    btn.classList.remove("scale-effect");
  });
}

export function removeMenuUI(menu) {
  const isVisible = menu.classList.contains("active");
  menu.classList.toggle("active", !isVisible);
  menu.classList.toggle("removeMenu", isVisible);
}

export function removeAllTasks() {
  tasks.length = 0;
  localStorage.setItem("tasksData", JSON.stringify([]));
  renderTasks();
}

export function addCounter() {
  count.innerText = tasks.length;
}

export function addTextArea() {
  textArea.classList.toggle(active);
}

export function getTasks() {
  return tasks;
}
