import {
  numericButtons,
  btnModifiers,
  btnOperators,
} from "./calculationElements.js";

export function createListeners() {
  return (renderNumber, modifyCalc) => [
    { element: numericButtons, event: "click", callback: renderNumber },
    { element: btnModifiers, event: "click", callback: modifyCalc },
    { element: btnOperators, event: "click", callback: modifyCalc },
  ];
}

export function appendDigit(digitEl, value) {
  digitEl.innerText += value;
}

export function clearText(...element) {
  element.forEach((el) => (el.innerText = ""));
}

