import { activatorMenuDrop, dropMenuSelectBg, spanDataName } from "./selectBackgroundElements";
import { active } from "./utilitaries.js";
export default function initDropDownSelectBg() {
  const backgroundActions = {
    Pomodoro: () => (spanDataName.innerText = " Pomodoro"),
    Short: () => (spanDataName.innerText = " Short"),
    Long: () => (spanDataName.innerText = " Long"),
  }

  const AddDropMenu = (element) => {
    element.classList.add(active);
  }

  const selectBackground = ({ target }) => {
    AddDropMenu(dropMenuSelectBg);
    const data = target.dataset.chooseBg;

    if (backgroundActions[data]) {
      backgroundActions[data]();
    } 
  }

  activatorMenuDrop.forEach((box) => box.addEventListener("click", selectBackground));
}