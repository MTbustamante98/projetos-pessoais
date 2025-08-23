import {
  btnModal,
  modal,
  containerMedia,
  active,
  title,
  video,
  closeModal,
} from "./elements";

const activeModal = () => {
  const events = ["touchstart", "click"];
  function openModal(e) {
    e.stopPropagation();
    modal.classList.add(active);
    containerMedia.classList.add("removeClass");

    title.innerText = e.currentTarget.innerText.trim();
    video.pause();
  }

  document.addEventListener("click", ({ target }) => {
    if (
      (!modal.contains(target) &&
        ![...btnModal].includes(target) &&
        !closeModal.contains(target)) ||
      target === closeModal
    ) {
      if (modal.classList.contains(active)) {
        modal.classList.remove(active);
        containerMedia.classList.remove("removeClass");
        title.innerText = "Menu Inicial";
        title.setAttribute("data-titulo", "Menu Inicial");
      }
    }
  });

  if (events.length > 0) {
    events.forEach((eventType) => {
      btnModal.forEach((btn) => btn.addEventListener(eventType, openModal));
    });
  }
};

export default activeModal;
