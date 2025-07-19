import { active } from "./utilitaries.js"

export default function initDropConfig() {
  const toggleDrop = document.querySelectorAll("[data-toggle-drop]");
  const innerTextLiDrop = document.querySelectorAll(`[data-drop] li`);

  const callback = (e) => {
    const id = e.target.getAttribute("data-toggle-drop");
    const drop = document.querySelector(`[data-drop="${id}"]`);
    if (drop) drop.classList.toggle(active);
  };

  innerTextLiDrop.forEach((liText) => {
    liText.addEventListener("click", (e) => {
      const parentDrop = e.target.closest("[data-drop]");
      if (!parentDrop) return;

      const id = parentDrop.getAttribute("data-drop");
      const toggleDrop = document.querySelector(`[data-toggle-drop="${id}"]`);
      if (!toggleDrop) return;

      const span = toggleDrop?.querySelector(".format-innerText");
      if (span) span.innerText = e.target.innerText;

      const drop = document.querySelectorAll("[data-drop]");
      drop.forEach((dropDown) => {
        if (dropDown.classList.contains(active))
          dropDown.classList.remove(active);
      });
    });
  });

  document.addEventListener("click", (e) => {
    let clickInside = false;
    document
      .querySelectorAll("[data-toggle-drop], [data-drop]")
      .forEach((el) => {
        if (el.contains(e.target)) clickInside = true;
      });

    if (!clickInside) {
      document.querySelectorAll("[data-drop]").forEach((drop) => {
        drop.classList.remove(active);
      });
    }
  });

  toggleDrop.forEach((div) => {
    div.addEventListener("click", callback);
  });
}
