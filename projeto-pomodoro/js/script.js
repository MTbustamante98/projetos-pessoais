function initModals() {
  const modal = document.querySelector(".modal");
  const configs = document.querySelector(".configs");
  const tasks = document.querySelector(".add-list-tasks");
  const modalLinks = document.querySelectorAll("[data-modal], [data-config]");
  const imgClose = document.querySelectorAll("[data-img-close]");
  const ativo = "ativo";

  function openModal(event) {
    if (event) event.preventDefault();
    const target = event.target;
    if (target.hasAttribute("data-modal")) {
      modal.classList.add(ativo);
    }

    if (target.hasAttribute("data-config")) {
      configs.classList.add(ativo);
    }
  }

  function closeModal(event) {
    if (event.target === modal) modal.classList.remove(ativo);
  }

  function closeConfigs(event) {
    if (event.target === configs) configs.classList.remove(ativo);
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
  modal.addEventListener("click", closeModal);
  configs.addEventListener("click", closeConfigs);
  imgClose.forEach((el) =>
    el.addEventListener("click", imgCloseModalAndConfigs)
  );
}
initModals();

function starTyping() {
  const tasks = document.querySelector(".tasks")
  const paragraphMessage = document.querySelector(".message");
  const frases = [
    "Bem-vindo(a) ao PomoClock.",
    "Configure o timer, dê start, concentre-se e trabalhe.",
    "Foco e atenção.",
  ];
  let index = 0;
  
  function initPhrase(frases, callback) {
    let acumulada = "";
    for (let i = 0; i < frases.length; i++) {
      setTimeout(() => {
        acumulada += frases[i];
        paragraphMessage.textContent = acumulada;
  
        if (i === frases.length - 1 && callback) {
          setTimeout(callback, 500);
        }
      }, i * 50);
    }
  }
  
  function executarFrases(index) {
    if (index >= frases.length) return;
  
    initPhrase(frases[index], () => {
      setTimeout(() => {
        paragraphMessage.textContent = "";
        if (index === frases.length - 1) {
          tasks.classList.add("ativo");
        } else {
          executarFrases(index + 1);
        }
      }, 1000);
    });
  }
  executarFrases(0)
}
starTyping();

function initAddTasks() {
  const divAddTasks = document.querySelector(".tasks");
  const containerTasks = document.querySelector(".add-list-tasks");
  
  function addTasks() {
    containerTasks.classList.toggle("ativo")
  }
  
  divAddTasks.addEventListener("click", addTasks);
}
initAddTasks();

function InitAddNotesAndTasks() {
  const textarea = document.querySelector("textarea");
  const notes = document.querySelector(".notes");

  function addTextArea() {
    textarea.classList.toggle("ativo");
  }

  notes.addEventListener("click", addTextArea);
}
InitAddNotesAndTasks();