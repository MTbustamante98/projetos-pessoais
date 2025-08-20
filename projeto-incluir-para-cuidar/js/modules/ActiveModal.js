import {
  btnModal,
  modal,
  containerMedia,
  active,
  title,
  video,
} from "./elements";

const activeModal = () => {
  btnModal.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      modal.classList.add(active);
      containerMedia.classList.add("removeClass");

      title.innerText = e.currentTarget.innerText.trim();
      video.pause();
    });

    document.addEventListener("click", ({ target }) => {
      if (!modal.contains(target) && ![...btnModal].includes(target)) {
        if (modal.classList.contains(active)) {
          modal.classList.remove(active);
          containerMedia.classList.remove("removeClass");
          title.innerText = "Menu Inicial";
          title.setAttribute("data-titulo", "Menu Inicial");
        }
      }
    });
  });
};

export default activeModal;
