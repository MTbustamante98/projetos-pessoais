import {
  btnModal,
  modal,
  containerMedia,
  active,
  video,
  closeModal,
  slide,
} from "./elements";

const activeModal = () => {
  const events = ["click", "touchstart"];
  function openModal(e) {
    const title = document.querySelector("[data-titulo]");
    modal.classList.add(active);

    if (modal) slide.forEach((slide) => slide.classList.remove(active));
    containerMedia.classList.add("removeClass");

    if (title) title.innerText = e.currentTarget.innerText.trim();

    if (!video.paused) video.pause();
  }

  function closeModalHandler() {
    modal.classList.remove(active);
    containerMedia.classList.remove("removeClass");

    // if (title) {
    //   title.innerText = "Menu Inicial";
    //   title.setAttribute("data-titulo", "");
    // }
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
