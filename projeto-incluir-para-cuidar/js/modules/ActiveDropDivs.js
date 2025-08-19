const activeDropDivs = () => {
  const dropWapper = document.querySelectorAll(".drop-wrapper");
  const slide = document.querySelectorAll("[data-drop]");
  const active = "active";
  console.log(slide);
  if (slide && slide.length) slide[0].classList.add(active);

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
