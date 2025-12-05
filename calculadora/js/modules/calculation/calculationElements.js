export const state = {
  firstValue: null,
  secondValue: null,
  operator: null,
  op: null,
};

export const numericButtons = document.querySelectorAll("[data-value]");
export const btnModifiers = document.querySelectorAll("[data-btn-modifiers]");
export const operationDisplay = document.querySelector(
  "[data-operation-display]"
);
export const operatorText = document.querySelector("[data-operator-display]");
export const btnOperators = document.querySelectorAll("[data-operator]");
export const digit = document.querySelector("[data-digit]");
