import { dropWapper, slide, active } from "./elements";

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    slide.forEach((divSlide) => {
      if (divSlide) divSlide.classList.add(active);
    });
    setTimeout(() => {
      slide.forEach((divSlide) => {
        if (divSlide) divSlide.classList.remove(active);
      });
    }, 2000);
  }, 1000);
});

const activeDropDivs = () => {
  function handleActiveDiv(e) {
    const itemOpenDiv = e.currentTarget.dataset.toggle;
    const drop = document.querySelector(`[data-drop="${itemOpenDiv}"]`);
    drop?.classList.add(active);
  }

  function handleLeaveDiv(e) {
    const itemOpenDiv = e.currentTarget.dataset.toggle;
    const drop = document.querySelector(`[data-drop="${itemOpenDiv}"]`);
    drop?.classList.remove(active);
  }

  function handleTouchToggle(e) {
    const itemOpenDiv = e.currentTarget.dataset.toggle;
    const drop = document.querySelector(`[data-drop="${itemOpenDiv}"]`);
    drop?.classList.toggle(active);
  }

  dropWapper.forEach((el) => {
    if (window.matchMedia("(max-width: 1024px)").matches) {
      el.addEventListener("touchstart", handleTouchToggle, { passive: true });
    } else {
      el.addEventListener("mouseenter", handleActiveDiv);
      el.addEventListener("mouseleave", handleLeaveDiv);
    }
  });
};

export default activeDropDivs;
