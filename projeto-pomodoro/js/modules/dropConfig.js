import { active } from "./utilitaries.js"
import { toggleDrop, innerTextLiDrop, smallArrow } from "./dropConfigElements.js"

export default function initDropConfig() {
  const callback = (e) => {
    const itemsOpenMenu = e.target.closest(".activeDropDownChoose");
    if (!itemsOpenMenu) return;

    const id = itemsOpenMenu.getAttribute("data-toggle-drop")
    const drop = document.querySelector(`[data-drop="${id}"]`);
    if (drop) {
      drop.classList.toggle(active);
    }
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
  //DELEGAÇÃO DE EVENTOS
  document.addEventListener("click", callback)
}
