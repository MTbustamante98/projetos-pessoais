import initAddTasks from "./modules/addTasks.js";
import initPomodoros from "./modules/pomodoros.js";
import initDropConfig from "./modules/dropConfig.js";
import initTasks from "./modules/tasks.js";
import registerTaskEvents from "./modules/tasksEvents.js";
import registerModalEvents from "./modules/modalEvents.js";

document.addEventListener("DOMContentLoaded", () => {
  initDropConfig();
});
initAddTasks();
initPomodoros();
initTasks();
registerTaskEvents();
registerModalEvents();
