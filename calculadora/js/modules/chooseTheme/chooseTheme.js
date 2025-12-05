import { boxChoose, choose, spanNumber, THEME } from "./chooseThemeElements.js";
import { setLocalStorage, getLocalStorage } from "../localStorage/storage.js";

const chooseThemeCalc = () => {
  spanNumber.forEach((number, index) => {
    number.innerText = THEME[index].label;
  });

  let themeIndex = null;

  (function render() {
    const savedTheme = getLocalStorage("theme");
    document.body.className = savedTheme;

    themeIndex = THEME.findIndex((theme) => theme.class === savedTheme);

    if (themeIndex === -1) themeIndex = 0;

    choose.classList.remove("t1", "t2", "t3");
    choose.classList.add(`t${themeIndex + 1}`);
  })();

  function chooseTheme() {
    themeIndex = (themeIndex + 1) % 3;
    const currentIndex = THEME[themeIndex];

    document.body.className = currentIndex.class;

    choose.classList.remove("t1", "t2", "t3");
    choose.classList.add(`t${themeIndex + 1}`);

    setLocalStorage("theme", currentIndex.class);
  }

  boxChoose.addEventListener("click", chooseTheme);
};

export default chooseThemeCalc;
