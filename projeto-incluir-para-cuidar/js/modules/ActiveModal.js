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
  const events = ["click", "touchstart"];
  function openModal(e) {
    e.preventDefault();
    e.stopPropagation();
    modal.classList.add(active);
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

  events.forEach((eventType) =>
    closeModal.addEventListener(eventType, closeModalHandler)
  );

  events.forEach((eventType) => {
    document.addEventListener(eventType, ({ target }) => {
      if (
        (!modal.contains(target) &&
          ![...btnModal].includes(target) &&
          !closeModal.contains(target))
      ) {
        closeModalHandler();
      }
    });
  });

  btnModal.forEach((btn) => {
    events.forEach((eventType) => btn.addEventListener(eventType, openModal));
  });
};

export default activeModal;
