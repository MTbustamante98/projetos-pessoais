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
    e.stopPropagation();

    const title = document.querySelector("[data-titulo]");
    modal.classList.add(active);

    if (modal) slide.forEach((slide) => slide.classList.remove(active));
    containerMedia.classList.add("removeClass");

    if (title) {
      title.innerText = e.currentTarget.innerText.trim();
    }
 
    if (!video.paused) video.pause();
  }

  function closeModalHandler() {
    if (!modal || !modal.classList.contains(active)) return;

    modal.classList.remove(active);
    containerMedia.classList.remove("removeClass");

    const title = document.querySelector("[data-titulo]");
    if (title) {
      title.innerText = "Menu Inicial";
      title.setAttribute("data-titulo", "");
    }
  }

  if (closeModal) {
    events.forEach((eventType) =>
      closeModal.addEventListener(eventType, (e) => {
        e.stopPropagation();
        closeModalHandler();
      })
    );
  }

  events.forEach((eventType) => {
    document.addEventListener(eventType, (e) => {
      const target = e.target;

      if (!modal || !modal.classList.contains(active)) return;

      if (modal.contains(target)) return;

      const clickBtnModal = [...btnModal].some((btn) => btn.contains(target));
      if (clickBtnModal) return;

      closeModalHandler();
    });
  });

  btnModal.forEach((btn) => {
    events.forEach((eventType) => btn.addEventListener(eventType, openModal));
  });
};

export default activeModal;
