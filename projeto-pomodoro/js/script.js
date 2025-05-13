function initModals() {
  const modal = document.querySelector(".modal");
  const configs = document.querySelector(".configs");
  const tasks = document.querySelector(".add-list-tasks");
  const menu = document.querySelector(".menu");

  const modalLinks = document.querySelectorAll(
    "[data-modal], [data-config], [data-menu='button']"
  );
  const imgClose = document.querySelectorAll("[data-img-close]");

  const ativo = "ativo";
  const closeModals = [modal, configs, menu];

  function openModal(e) {
    if (e) e.preventDefault();
    e.stopPropagation();

    const target = e.target;

    if (target.hasAttribute("data-modal")) {
      modal.classList.add(ativo);
    }

    if (target.hasAttribute("data-config")) {
      configs.classList.add(ativo);
    }

    if (target.closest("[data-menu]")) {
      menu.classList.toggle(ativo);
      modalLinks[2].classList.toggle("scale-effect");
    }
  }

  function closeModal(e) {
    const target = e.target;
    closeModals.forEach((modal, index) => {
      if (target === modal && index < 2) modal.classList.remove(ativo);

      if (index === 2 && !modal.contains(target)) modal.classList.remove(ativo);
    });
  }

  function imgCloseModalAndConfigs(event) {
    const type = event.target.dataset.imgClose;
    if (type === "modal") {
      modal.classList.remove(ativo);
    } else if (type === "configs") {
      configs.classList.remove(ativo);
    } else {
      tasks.classList.remove(ativo);
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
//   const tasks = document.querySelector(".tasks")
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
//           tasks.classList.add("ativo");
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
  const divAddTasks = document.querySelector(".tasks");
  const containerTasks = document.querySelector(".add-list-tasks");

  function addTasks() {
    containerTasks.classList.toggle("ativo");
  }

  divAddTasks.addEventListener("click", addTasks);
}
initAddTasks();

// function InitAddNotesAndTasks() {
//   const textarea = document.querySelector("textarea");
//   const notes = document.querySelector(".notes");

//   function addTextArea() {
//     textarea.classList.toggle("ativo");
//   }

//   notes.addEventListener("click", addTextArea);
// }
// InitAddNotesAndTasks();

function initPomodoros() {
  const pomodoros = document.querySelectorAll(
    ".div-clocks [data-type='pomodoro']"
  );
  const dataTimer = document.querySelector("[data-timer]");
  const documentBody = document.body;

  if (pomodoros.length) {
    pomodoros[0].classList.add("ativo");
  }

  function choosePomodoro(e) {
    pomodoros.forEach((el) => el.classList.remove("ativo"));
    e.target.classList.add("ativo");

    if (e.target.classList.contains("pomodoro-clock")) {
      dataTimer.innerText = "25:00";
      documentBody.style.backgroundColor = "#f3615c";
    }

    if (e.target.classList.contains("short-pause-pomodoro")) {
      dataTimer.innerText = "05:00";
      documentBody.style.backgroundColor = "#38858A";
    }

    if (e.target.classList.contains("long-pause-pomodoro")) {
      dataTimer.innerText = "15:00";
      documentBody.style.backgroundColor = "#397097";
    }
  }
  pomodoros.forEach((el) => el.addEventListener("click", choosePomodoro));
}
initPomodoros();

function initTasks() {
  const inputDescriptionTask = document.getElementById("task");
  const textArea = document.querySelector("textarea");

  const addNotes = document.querySelector("[data-notes");
  const buttonAddTasks = document.querySelector("[data-add-tasks");
  const tasksContainer = document.querySelector(".add-list-tasks");

  
  const arrayList = JSON.parse(localStorage.getItem("inputTask")) || [];
  
  arrayList.forEach((el) => {
    const span = createElementSpan(el);
    tasksContainer.appendChild(span);
  });

  function addTextArea() {
    textArea.classList.toggle("ativo");
  }

  function addTasksAndNotes(e) {
    const valueInputTask = inputDescriptionTask.value.trim();
    if (!valueInputTask) return;

    arrayList.push(valueInputTask);

    const span = createElementSpan(valueInputTask);
    tasksContainer.appendChild(span);

    localStorage.setItem("inputTask", JSON.stringify(arrayList));
  }

  function createElementSpan(text) {
    const spanElement = document.createElement("span");
    spanElement.classList.add("activatedSpan");
    spanElement.innerText = text;

    return spanElement;
  }

  addNotes.addEventListener("click", addTextArea);
  buttonAddTasks.addEventListener("click", addTasksAndNotes);
}
initTasks();
