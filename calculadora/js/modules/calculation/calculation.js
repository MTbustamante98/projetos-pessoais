import {
  digit,
  state,
  operatorText,
  operationDisplay,
} from "./calculationElements.js";

import { createListeners, appendDigit, clearText } from "./listeners.js";

const calculate = () => {
  function numericOperators(operator, a, b) {
    let result;

    switch (operator) {
      case "+":
        result = a + b;
        break;
      case "-":
        result = a - b;
        break;
      case "x":
        result = a * b;
        break;
      case "/":
        result = b === 0 ? "Erro" : a / b;
        break;
    }

    return result;
  }

  function modifyCalc({ target }) {
    state.op = target.innerText;
    if (["+", "-", "x", "/"].includes(state.op)) {
      state.operator = state.op;
      state.firstValue = parseFloat(digit.innerText);

      operationDisplay.innerText = `${state.firstValue} ${state.operator}`;
      clearText(digit);
    }

    if (state.op === "=" && state.firstValue !== null && state.operator) {
      state.secondValue = parseFloat(digit.innerText);

      if (Number.isNaN(state.secondValue)) return;

      const result = numericOperators(
        state.operator,
        state.firstValue,
        state.secondValue
      );

      clearText(digit);
      appendDigit(digit, String(result));

      state.firstValue = null;
      state.operator = null;
    }

    if (state.op === "RESET") {
      if (digit && operatorText) {
        clearText(digit, operationDisplay);
        state.firstValue = null;
        state.secondValue = null;
        state.operator = null;
      }
    }

    if (state.op === "DEL") {
      if (digit)
        [digit, operationDisplay].forEach((el) => {
          el.innerText = el.innerText.slice(0, -1);
        });
    }
  }

  function renderNumber({ target }) {
    appendDigit(digit, target.innerText);

    if (state.operator)
      operationDisplay.innerText =
        state.firstValue + " " + state.operator + " " + digit.innerText;
  }

  const getListeners = createListeners();
  const listeners = getListeners(renderNumber, modifyCalc, numericOperators);

  listeners.forEach(({ element, event, callback }) => {
    element.forEach((el) => el.addEventListener(event, callback));
  });
};

export default calculate;
