// Seletores DOM usados no módulo pomodoros.js
export const pomodoros = document.querySelectorAll(".div-clocks [data-type]");
export const buttonStartTimer = document.querySelector("[data-start-timer]");
export const progressBar = document.querySelector("[data-progress-bar]");
export const divChoose = document.querySelector(".activate-pomodoro");
export const choose = document.querySelector("[data-choose]");
export const timeInputs = document.querySelectorAll(".select-time [data-value]");

// Funções auxiliares para elementos dinâmicos
export const timerElements = () => document.querySelectorAll("[data-timer]");
export const visibleTimer = () => document.querySelector("[data-timer]:not(.hidden)");
export const getTimerByType = (type) => document.querySelector(`[data-timer-type="${type}"]`);
export const getTypeButton = (type) => document.querySelector(`[data-type=${type}]`);