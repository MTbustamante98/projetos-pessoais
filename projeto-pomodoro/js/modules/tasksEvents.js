import {
  removeAllTasksBtn,
  removeCompletedTasksBtn,
  menu,
} from "./tasksElements.js";

export default function registerTaskEvents() {
  addNotes.addEventListener("click", addTextArea);
  buttonAddTasks.addEventListener("click", addTasksAndNotes);
  removeAllTasksBtn.addEventListener("click", () => handleRemoveAllTasks(menu));
  removeCompletedTasksBtn.addEventListener("click", () =>
    removeAllCompletedTasks(menu)
  );
}
