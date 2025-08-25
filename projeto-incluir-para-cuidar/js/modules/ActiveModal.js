import {
  btnModal,
  modal,
  containerMedia,
  active,
  title,
  video,
  closeModal,
  slide,
} from "./elements";
console.log()
const activeModal = () => {
  const events = ["click", "touchstart"];
  function openModal(e) {
    e.preventDefault();
    e.stopPropagation();

    modal.classList.add(active);
    if (modal) slide.forEach((slide) => slide.classList.remove(active))
    containerMedia.classList.add("removeClass");

    title.innerText = e.currentTarget.innerText.trim();
    if (!video.paused) video.pause();
  }

  function closeModalHandler() {
    modal.classList.remove(active);
    containerMedia.classList.remove("removeClass");
    title.innerText = "Menu Inicial";
    title.setAttribute("data-titulo", "Menu Inicial");
  }

  if (closeModal) {
    events.forEach((eventType) =>
      closeModal.addEventListener(eventType, closeModalHandler)
    );
  }

  events.forEach((eventType) => {
    document.addEventListener(eventType, ({ target }) => {
      const isOutsideModal = modal && !modal.contains(target);
      const isNotBtn = ![...btnModal].includes(target);
      const isNotClose = closeModal && !closeModal.contains(target);
      const isClose = target === closeModal;

      if ((isOutsideModal && isNotBtn && isNotClose) || isClose) {
        closeModalHandler();
      }
    });
  });

  btnModal.forEach((btn) => {
    events.forEach((eventType) => btn.addEventListener(eventType, openModal));
  });
};

export default activeModal;
