import {
  addTextArea,
  addTasksAndNotes,
  handleRemoveAllTasks,
  removeAllCompletedTasks,
} from "./tasks.js"

import {
  buttonAddTasks,
  addNotes,
  removeAllTasksBtn,
  removeCompletedTasksBtn,
  menuCleanTasks,
} from "./tasksElements.js";

export default function registerTaskEvents() {
  addNotes.addEventListener("click", addTextArea);
  buttonAddTasks.addEventListener("click", addTasksAndNotes);
  removeAllTasksBtn.addEventListener("click", () => handleRemoveAllTasks(menuCleanTasks));
  removeCompletedTasksBtn.addEventListener("click", () =>
    removeAllCompletedTasks(menuCleanTasks)
  );
}
