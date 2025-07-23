import { active } from "./utilitaries.js";
import { innerTextLiDrop } from "./dropConfigElements.js";
import playAudio from "./audios.js"

export default function initDropConfig() {
  const savedTexts = JSON.parse(localStorage.getItem("dropdownTexts")) || {};
  const callback = (e) => {
    const itemsOpenMenu = e.target.closest(".activeDropDownChoose");
    if (!itemsOpenMenu) return;

    const id = itemsOpenMenu.getAttribute("data-toggle-drop");
    const drop = document.querySelector(`[data-drop="${id}"]`);
    if (drop) {
      drop.classList.toggle(active);
    }
  };

  innerTextLiDrop.forEach((liText) => {
    liText.addEventListener("click", (e) => {
      const target = e.target;
      const parentDrop = target.closest("[data-drop]");
      if (!parentDrop) return;

      const id = parentDrop.getAttribute("data-drop");
      const toggleDrop = document.querySelector(`[data-toggle-drop="${id}"]`);
      if (!toggleDrop) return;

      const span = toggleDrop?.querySelector(".format-innerText");
      if (span) span.innerText = e.currentTarget.innerText;

      const dataMusic = target.dataset.music;
      if (dataMusic !== undefined && dataMusic !== "") playAudio(dataMusic);
     
      const drop = document.querySelectorAll("[data-drop]");
      drop.forEach((dropDown) => {
        if (dropDown.classList.contains(active))
          dropDown.classList.remove(active);
      });

      savedTexts[id] = span.innerText;
      localStorage.setItem("dropdownTexts", JSON.stringify(savedTexts));
    });

    Object.entries(savedTexts).forEach(([id, value]) => {
      const toggleDrop = document.querySelector(`[data-toggle-drop="${id}"]`);
      if (!toggleDrop) return;

      const span = toggleDrop.querySelector(".format-innerText");
      if (span) span.innerText = value;
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
  document.addEventListener("click", callback);
}
