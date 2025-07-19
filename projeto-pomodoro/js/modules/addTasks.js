import { active } from "./utilitaries.js"

export default function initAddTasks() {
  const arrowClose = document.querySelector("[data-img-close='tasks']");
  const containerTasks = document.querySelector(".add-list-tasks");
  const divAddTasks = document.querySelector(".tasks");

  const addTasks = () => {
    containerTasks.classList.toggle(active);
    arrowClose.classList.toggle(active);
  }

  divAddTasks.addEventListener("click", addTasks);
}
