import { modal, configs, menu, modalLinks } from "./modalElements.js";
import { active, hidden } from "./utilitaries.js";

const closeModals = [modal, configs, menu];
const matchMedia = (media) => window.matchMedia(media);

const openModal = (e) => {
  if (e) e.preventDefault();
  e.stopPropagation();

  const target = e.target;
  if (target.hasAttribute("data-modal")) {
    modal.classList.add(active);
  }

  if (target.hasAttribute("data-config")) {
    configs.classList.add(active);
    dataCloseConfigs();
    const small = matchMedia("(max-width: 1440px)");
    configs.style.overflowY = small.matches ? "scroll" : hidden;
  }

  if (target.closest("[data-menu]")) {
    menu.classList.toggle(active);
    modalLinks[2].classList.toggle("scale-effect");
  }
};

const closeModal = (e) => {
  const target = e.target;
  closeModals.forEach((modal, index) => {
    if (target === modal && index < 2) modal.classList.remove(active);

    if (index === 2 && !modal.contains(target)) {
      modal.classList.remove(active);
      modalLinks[2].classList.remove("scale-effect");
    }
  });
};

const imgCloseModalAndConfigs = (e) => {
  const type = e.target.dataset.imgClose;
  if (type === "modal") {
    modal.classList.remove(active);
  } else if (type === "configs") {
    configs.classList.remove(active);
  } else {
    containerTasks.classList.remove(active);
    arrowClose.classList.toggle(active);
  }
};

const dataCloseConfigs = () => {
  const buttonConfigs = document.querySelector("[data-close-configs]");
  buttonConfigs.addEventListener(
    "click",
    () => {
      configs.classList.remove(active);
    },
    { once: true }
  );
};

export { openModal, closeModal, imgCloseModalAndConfigs };
