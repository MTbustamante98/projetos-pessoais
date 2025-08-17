import {
  activatorMenuDrop,
  dropMenuSelectBg,
  spanDataName,
  selectorBg,
} from "./selectBackgroundElements";
import { active } from "./utilitaries.js";

export default function initDropDownSelectBg() {
  let timerColors = {};

  const savedColors = localStorage.getItem("timerColors");

  if (savedColors) {
    timerColors = JSON.parse(savedColors);
    const lastUsedType = localStorage.getItem("lastUsedType");
    if (lastUsedType && timerColors[lastUsedType]) {
      document.body.style.background = timerColors[lastUsedType];
      const activator = document.querySelector(
        `[data-choose-bg="${lastUsedType}"]`
      );
      if (activator) activator.style.background = timerColors[lastUsedType];
    }
  }

  const backgroundActions = {
    pomodoro: () => (spanDataName.innerText = " Pomodoro"),
    short: () => (spanDataName.innerText = " Short"),
    long: () => (spanDataName.innerText = " Long"),
  };

  const AddDropMenu = (element) => {
    element.classList.add(active);
  };

  const RemoveDropMenu = (element) => {
    element.classList.remove(active);
  };

  const selectBoxBackground = ({ target }) => {
    AddDropMenu(dropMenuSelectBg);
    currentTargetType = target.dataset.chooseBg;

    if (backgroundActions[currentTargetType]) {
      backgroundActions[currentTargetType]();
    }
  };

  let currentTargetType = null;
  selectorBg.forEach((box) => {
    box.addEventListener("click", () => {
      if (!currentTargetType) return;

      const targetElement = document.querySelector(
        `[data-type="${currentTargetType}"]`
      );
      const activator = document.querySelector(
        `[data-choose-bg="${currentTargetType}"]`
      );

      if (targetElement) {
        const color = box.dataset.color;

        document.body.style.background = color;
        activator.style.background = color;
        timerColors[currentTargetType] = color;

        localStorage.setItem("timerColors", JSON.stringify(timerColors));

        localStorage.setItem("lastUsedType", currentTargetType);
      }
    });
  });

  document.addEventListener("click", ({ target }) => {
    const clickOutside = [...activatorMenuDrop].some((box) =>
      box.contains(target)
    );

    const isClickInsideDropDown = dropMenuSelectBg.contains(target);

    if (!clickOutside && !isClickInsideDropDown)
      RemoveDropMenu(dropMenuSelectBg);
  });

  activatorMenuDrop.forEach((box) =>
    box.addEventListener("click", selectBoxBackground)
  );
}
