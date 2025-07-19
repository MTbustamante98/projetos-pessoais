/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_modals_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modals.js */ \"./js/modules/modals.js\");\n/* harmony import */ var _modules_addTasks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/addTasks.js */ \"./js/modules/addTasks.js\");\n/* harmony import */ var _modules_pomodoros_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/pomodoros.js */ \"./js/modules/pomodoros.js\");\n/* harmony import */ var _modules_dropConfig_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/dropConfig.js */ \"./js/modules/dropConfig.js\");\n/* harmony import */ var _modules_tasks_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/tasks.js */ \"./js/modules/tasks.js\");\n/* harmony import */ var _modules_tasksEvents_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/tasksEvents.js */ \"./js/modules/tasksEvents.js\");\n/* harmony import */ var _modules_modalEvents_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/modalEvents.js */ \"./js/modules/modalEvents.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_addTasks_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_pomodoros_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_dropConfig_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_tasks_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n(0,_modules_tasksEvents_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\n(0,_modules_modalEvents_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\r\n\n\n//# sourceURL=webpack://projeto-pomodoro/./js/index.js?");

/***/ }),

/***/ "./js/modules/addTasks.js":
/*!********************************!*\
  !*** ./js/modules/addTasks.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAddTasks)\n/* harmony export */ });\n/* harmony import */ var _utilitaries_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilitaries.js */ \"./js/modules/utilitaries.js\");\n\r\n\r\nfunction initAddTasks() {\r\n  const arrowClose = document.querySelector(\"[data-img-close='tasks']\");\r\n  const containerTasks = document.querySelector(\".add-list-tasks\");\r\n  const divAddTasks = document.querySelector(\".tasks\");\r\n\r\n  const addTasks = () => {\r\n    containerTasks.classList.toggle(_utilitaries_js__WEBPACK_IMPORTED_MODULE_0__.active);\r\n    arrowClose.classList.toggle(_utilitaries_js__WEBPACK_IMPORTED_MODULE_0__.active);\r\n  }\r\n\r\n  divAddTasks.addEventListener(\"click\", addTasks);\r\n}\r\n\n\n//# sourceURL=webpack://projeto-pomodoro/./js/modules/addTasks.js?");

/***/ }),

/***/ "./js/modules/dropConfig.js":
/*!**********************************!*\
  !*** ./js/modules/dropConfig.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initDropConfig)\n/* harmony export */ });\n/* harmony import */ var _utilitaries_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilitaries.js */ \"./js/modules/utilitaries.js\");\n\r\n\r\nfunction initDropConfig() {\r\n  const toggleDrop = document.querySelectorAll(\"[data-toggle-drop]\");\r\n  const innerTextLiDrop = document.querySelectorAll(`[data-drop] li`);\r\n\r\n  const callback = (e) => {\r\n    const id = e.target.getAttribute(\"data-toggle-drop\");\r\n    const drop = document.querySelector(`[data-drop=\"${id}\"]`);\r\n    if (drop) drop.classList.toggle(_utilitaries_js__WEBPACK_IMPORTED_MODULE_0__.active);\r\n  };\r\n\r\n  innerTextLiDrop.forEach((liText) => {\r\n    liText.addEventListener(\"click\", (e) => {\r\n      const parentDrop = e.target.closest(\"[data-drop]\");\r\n      if (!parentDrop) return;\r\n\r\n      const id = parentDrop.getAttribute(\"data-drop\");\r\n      const toggleDrop = document.querySelector(`[data-toggle-drop=\"${id}\"]`);\r\n      if (!toggleDrop) return;\r\n\r\n      const span = toggleDrop?.querySelector(\".format-innerText\");\r\n      if (span) span.innerText = e.target.innerText;\r\n\r\n      const drop = document.querySelectorAll(\"[data-drop]\");\r\n      drop.forEach((dropDown) => {\r\n        if (dropDown.classList.contains(_utilitaries_js__WEBPACK_IMPORTED_MODULE_0__.active))\r\n          dropDown.classList.remove(_utilitaries_js__WEBPACK_IMPORTED_MODULE_0__.active);\r\n      });\r\n    });\r\n  });\r\n\r\n  document.addEventListener(\"click\", (e) => {\r\n    let clickInside = false;\r\n    document\r\n      .querySelectorAll(\"[data-toggle-drop], [data-drop]\")\r\n      .forEach((el) => {\r\n        if (el.contains(e.target)) clickInside = true;\r\n      });\r\n\r\n    if (!clickInside) {\r\n      document.querySelectorAll(\"[data-drop]\").forEach((drop) => {\r\n        drop.classList.remove(_utilitaries_js__WEBPACK_IMPORTED_MODULE_0__.active);\r\n      });\r\n    }\r\n  });\r\n\r\n  toggleDrop.forEach((div) => {\r\n    div.addEventListener(\"click\", callback);\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://projeto-pomodoro/./js/modules/dropConfig.js?");

/***/ }),

/***/ "./js/modules/modalElements.js":
/*!*************************************!*\
  !*** ./js/modules/modalElements.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   configs: () => (/* binding */ configs),\n/* harmony export */   imgClose: () => (/* binding */ imgClose),\n/* harmony export */   menu: () => (/* binding */ menu),\n/* harmony export */   modal: () => (/* binding */ modal),\n/* harmony export */   modalLinks: () => (/* binding */ modalLinks)\n/* harmony export */ });\nconst modal = document.querySelector(\".modal\");\r\nconst configs = document.querySelector(\".configs\");\r\nconst menu = document.querySelector(\".menu\");\r\nconst imgClose = document.querySelectorAll(\"[data-img-close]\");\r\nconst modalLinks = document.querySelectorAll(\r\n  \"[data-modal], [data-config], [data-menu='button']\"\r\n);\r\n\r\n\n\n//# sourceURL=webpack://projeto-pomodoro/./js/modules/modalElements.js?");

/***/ }),

/***/ "./js/modules/modalEvents.js":
/*!***********************************!*\
  !*** ./js/modules/modalEvents.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ registerModalEvents)\n/* harmony export */ });\n/* harmony import */ var _modalElements_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modalElements.js */ \"./js/modules/modalElements.js\");\n\r\n\r\nfunction registerModalEvents() {\r\n  document.addEventListener(\"click\", () => closeModal);\r\n  _modalElements_js__WEBPACK_IMPORTED_MODULE_0__.modalLinks.forEach((el) => el.addEventListener(\"click\", openModal));\r\n  _modalElements_js__WEBPACK_IMPORTED_MODULE_0__.imgClose.forEach((el) => el.addEventListener(\"click\", imgCloseModalAndConfigs));\r\n}\r\n\n\n//# sourceURL=webpack://projeto-pomodoro/./js/modules/modalEvents.js?");

/***/ }),

/***/ "./js/modules/modals.js":
/*!******************************!*\
  !*** ./js/modules/modals.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initModals)\n/* harmony export */ });\n/* harmony import */ var _modalEvents_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modalEvents.js */ \"./js/modules/modalEvents.js\");\n\r\n\r\nfunction initModals() {\r\n  \r\n}\r\n\n\n//# sourceURL=webpack://projeto-pomodoro/./js/modules/modals.js?");

/***/ }),

/***/ "./js/modules/pomodoroTimerElements.js":
/*!*********************************************!*\
  !*** ./js/modules/pomodoroTimerElements.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   buttonStartTimer: () => (/* binding */ buttonStartTimer),\n/* harmony export */   choose: () => (/* binding */ choose),\n/* harmony export */   divChoose: () => (/* binding */ divChoose),\n/* harmony export */   getTimerByType: () => (/* binding */ getTimerByType),\n/* harmony export */   getTypeButton: () => (/* binding */ getTypeButton),\n/* harmony export */   pomodoros: () => (/* binding */ pomodoros),\n/* harmony export */   progressBar: () => (/* binding */ progressBar),\n/* harmony export */   timeInputs: () => (/* binding */ timeInputs),\n/* harmony export */   timerElements: () => (/* binding */ timerElements),\n/* harmony export */   visibleTimer: () => (/* binding */ visibleTimer)\n/* harmony export */ });\n// Seletores DOM usados no módulo pomodoros.js\r\nconst pomodoros = document.querySelectorAll(\".div-clocks [data-type]\");\r\nconst buttonStartTimer = document.querySelector(\"[data-start-timer]\");\r\nconst progressBar = document.querySelector(\"[data-progress-bar]\");\r\nconst divChoose = document.querySelector(\".activate-pomodoro\");\r\nconst choose = document.querySelector(\"[data-choose]\");\r\nconst timeInputs = document.querySelectorAll(\".select-time [data-value]\");\r\n\r\n// Funções auxiliares para elementos dinâmicos\r\nconst timerElements = () => document.querySelectorAll(\"[data-timer]\");\r\nconst visibleTimer = () => document.querySelector(\"[data-timer]:not(.hidden)\");\r\nconst getTimerByType = (type) => document.querySelector(`[data-timer-type=\"${type}\"]`);\r\nconst getTypeButton = (type) => document.querySelector(`[data-type=${type}]`);\n\n//# sourceURL=webpack://projeto-pomodoro/./js/modules/pomodoroTimerElements.js?");

/***/ }),

/***/ "./js/modules/pomodoros.js":
/*!*********************************!*\
  !*** ./js/modules/pomodoros.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initPomodoros)\n/* harmony export */ });\n/* harmony import */ var _pomodoroTimerElements_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pomodoroTimerElements.js */ \"./js/modules/pomodoroTimerElements.js\");\n/* harmony import */ var _utilitaries_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utilitaries.js */ \"./js/modules/utilitaries.js\");\n\r\n\r\n\r\n\r\nfunction initPomodoros() {\r\n  let InnerTextTimers = JSON.parse(localStorage.getItem(\"timers\")) || [];\r\n  const tempoPersonalizado = {\r\n    pomodoro: \"25:00\",\r\n    short: \"05:00\",\r\n    long: \"15:00\",\r\n  };\r\n\r\n  function SaveTimersLocalStorage() {\r\n    const lastItem = InnerTextTimers[InnerTextTimers.length - 1];\r\n    for (let key in lastItem) {\r\n      const timerElement = (0,_pomodoroTimerElements_js__WEBPACK_IMPORTED_MODULE_0__.getTimerByType)(key);\r\n      if (timerElement) {\r\n        timerElement.innerText = lastItem[key];\r\n        tempoPersonalizado[key] = lastItem[key];\r\n      }\r\n    }\r\n  }\r\n\r\n  const timerState = {\r\n    totalSeconds: 0,\r\n    tempoInicial: 0,\r\n    isRunning: false,\r\n    interval: null,\r\n  };\r\n\r\n  function startCountDown() {\r\n    const currentTimer = (0,_pomodoroTimerElements_js__WEBPACK_IMPORTED_MODULE_0__.visibleTimer)();\r\n    const type = currentTimer.dataset.timerType;\r\n    const tempo = tempoPersonalizado[type];\r\n\r\n    if (!timerState.isRunning && timerState.totalSeconds === 0) {\r\n      const [minutes, seconds] = currentTimer.innerText.split(\":\").map(Number);\r\n      timerState.totalSeconds = minutes * 60 + seconds;\r\n      timerState.tempoInicial = timerState.totalSeconds;\r\n    }\r\n\r\n    if (!timerState.isRunning) {\r\n      timerState.isRunning = true;\r\n      _pomodoroTimerElements_js__WEBPACK_IMPORTED_MODULE_0__.buttonStartTimer.innerText = \"PAUSAR\";\r\n      _pomodoroTimerElements_js__WEBPACK_IMPORTED_MODULE_0__.buttonStartTimer.classList.add(_utilitaries_js__WEBPACK_IMPORTED_MODULE_1__.active);\r\n      _pomodoroTimerElements_js__WEBPACK_IMPORTED_MODULE_0__.buttonStartTimer.classList.remove(\"special-class\");\r\n\r\n      timerState.interval = setInterval(() => {\r\n        if (timerState.totalSeconds <= 0) {\r\n          timerState.isRunning = false;\r\n          _pomodoroTimerElements_js__WEBPACK_IMPORTED_MODULE_0__.buttonStartTimer.innerText = \"COMEÇAR\";\r\n          _pomodoroTimerElements_js__WEBPACK_IMPORTED_MODULE_0__.progressBar.style.width = \"0\";\r\n          currentTimer.innerText = tempo;\r\n          clearInterval(timerState.interval);\r\n          autoStartPomodorosLogic();\r\n          return;\r\n        }\r\n\r\n        const progress =\r\n          ((timerState.tempoInicial - timerState.totalSeconds) /\r\n            timerState.tempoInicial) *\r\n          100;\r\n        _pomodoroTimerElements_js__WEBPACK_IMPORTED_MODULE_0__.progressBar.style.width = `${progress}%`;\r\n\r\n        timerState.totalSeconds--;\r\n        const min = Math.floor(timerState.totalSeconds / 60);\r\n        const sec = timerState.totalSeconds % 60;\r\n        currentTimer.innerText = `${min.toString().padStart(2, \"0\")}:${sec\r\n          .toString()\r\n          .padStart(2, \"0\")}`;\r\n      }, 50);\r\n    } else {\r\n      timerState.isRunning = false;\r\n      clearInterval(timerState.interval);\r\n      _pomodoroTimerElements_js__WEBPACK_IMPORTED_MODULE_0__.buttonStartTimer.innerText = \"COMEÇAR\";\r\n      _pomodoroTimerElements_js__WEBPACK_IMPORTED_MODULE_0__.buttonStartTimer.classList.remove(_utilitaries_js__WEBPACK_IMPORTED_MODULE_1__.active);\r\n    }\r\n  }\r\n\r\n  function changeTimerWhenModifyValue() {\r\n    _pomodoroTimerElements_js__WEBPACK_IMPORTED_MODULE_0__.timeInputs.forEach((el) => {\r\n      el.addEventListener(\"input\", (e) => {\r\n        const type = e.target.dataset.value.replace(\"Timer\", \"\");\r\n        const value = e.target.value;\r\n        if (!value.trim()) return;\r\n\r\n        tempoPersonalizado[type] = `${value.toString().padStart(2, \"0\")}:00`;\r\n\r\n        const targetTimer = (0,_pomodoroTimerElements_js__WEBPACK_IMPORTED_MODULE_0__.getTimerByType)(type);\r\n        InnerTextTimers.push({ ...tempoPersonalizado });\r\n        localStorage.setItem(\"timers\", JSON.stringify(InnerTextTimers));\r\n\r\n        if (targetTimer && !targetTimer.classList.contains(\"hidden\")) {\r\n          targetTimer.innerText = tempoPersonalizado[type];\r\n        }\r\n      });\r\n      SaveTimersLocalStorage();\r\n    });\r\n  }\r\n\r\n  changeTimerWhenModifyValue();\r\n\r\n  const cycle = [\"pomodoro\", \"short\"];\r\n  let currentIndex = 0;\r\n\r\n  function loadAutoStartState() {\r\n    const state = JSON.parse(localStorage.getItem(\"state\"));\r\n    if (state) {\r\n      _pomodoroTimerElements_js__WEBPACK_IMPORTED_MODULE_0__.divChoose.classList.toggle(_utilitaries_js__WEBPACK_IMPORTED_MODULE_1__.active, state.divChooseActive);\r\n      _pomodoroTimerElements_js__WEBPACK_IMPORTED_MODULE_0__.choose.classList.toggle(_utilitaries_js__WEBPACK_IMPORTED_MODULE_1__.active, state.chooseActive);\r\n    }\r\n  }\r\n\r\n  function autoStartPomodorosLogic() {\r\n    if (_pomodoroTimerElements_js__WEBPACK_IMPORTED_MODULE_0__.divChoose.classList.contains(_utilitaries_js__WEBPACK_IMPORTED_MODULE_1__.active)) {\r\n      currentIndex++;\r\n      currentIndex = currentIndex >= cycle.length ? 0 : currentIndex;\r\n      choosePomodoro(cycle[currentIndex]);\r\n      _pomodoroTimerElements_js__WEBPACK_IMPORTED_MODULE_0__.buttonStartTimer.classList.add(\"special-class\");\r\n    }\r\n  }\r\n\r\n  function autoStartPomodorosUI() {\r\n    _pomodoroTimerElements_js__WEBPACK_IMPORTED_MODULE_0__.divChoose.classList.toggle(_utilitaries_js__WEBPACK_IMPORTED_MODULE_1__.active);\r\n    _pomodoroTimerElements_js__WEBPACK_IMPORTED_MODULE_0__.choose.classList.toggle(_utilitaries_js__WEBPACK_IMPORTED_MODULE_1__.active);\r\n\r\n    const state = {\r\n      divChooseActive: _pomodoroTimerElements_js__WEBPACK_IMPORTED_MODULE_0__.divChoose.classList.contains(_utilitaries_js__WEBPACK_IMPORTED_MODULE_1__.active),\r\n      chooseActive: _pomodoroTimerElements_js__WEBPACK_IMPORTED_MODULE_0__.choose.classList.contains(_utilitaries_js__WEBPACK_IMPORTED_MODULE_1__.active),\r\n    };\r\n    localStorage.setItem(\"state\", JSON.stringify(state));\r\n  }\r\n\r\n  function choosePomodoro(e) {\r\n    const type = typeof e === \"string\" ? e : e.target.dataset.type;\r\n    const targetTimer = (0,_pomodoroTimerElements_js__WEBPACK_IMPORTED_MODULE_0__.getTimerByType)(type);\r\n\r\n    _pomodoroTimerElements_js__WEBPACK_IMPORTED_MODULE_0__.pomodoros.forEach((el) => el.classList.remove(_utilitaries_js__WEBPACK_IMPORTED_MODULE_1__.active));\r\n\r\n    if (typeof e !== \"string\") {\r\n      e.target.classList.add(_utilitaries_js__WEBPACK_IMPORTED_MODULE_1__.active);\r\n    } else {\r\n      const targetButton = (0,_pomodoroTimerElements_js__WEBPACK_IMPORTED_MODULE_0__.getTypeButton)(type);\r\n      if (targetButton) targetButton.classList.add(_utilitaries_js__WEBPACK_IMPORTED_MODULE_1__.active);\r\n    }\r\n\r\n    (0,_pomodoroTimerElements_js__WEBPACK_IMPORTED_MODULE_0__.timerElements)().forEach((el) => el.classList.add(\"hidden\"));\r\n\r\n    if (targetTimer) {\r\n      targetTimer.classList.remove(\"hidden\");\r\n      targetTimer.innerText = tempoPersonalizado[type];\r\n\r\n      const documentBody = document.body;\r\n      if (type === \"pomodoro\") {\r\n        documentBody.style.backgroundColor = \"var(--tomato)\";\r\n      } else if (type === \"short\") {\r\n        documentBody.style.backgroundColor = \"var(--backgroundShortBreak)\";\r\n      } else if (type === \"long\") {\r\n        documentBody.style.backgroundColor = \"var(--backgroundLongBreak)\";\r\n      }\r\n    }\r\n  }\r\n\r\n  loadAutoStartState();\r\n  _pomodoroTimerElements_js__WEBPACK_IMPORTED_MODULE_0__.divChoose.addEventListener(\"click\", autoStartPomodorosUI);\r\n  _pomodoroTimerElements_js__WEBPACK_IMPORTED_MODULE_0__.buttonStartTimer.addEventListener(\"click\", startCountDown);\r\n  _pomodoroTimerElements_js__WEBPACK_IMPORTED_MODULE_0__.pomodoros.forEach((el) => el.addEventListener(\"click\", choosePomodoro));\r\n  if (_pomodoroTimerElements_js__WEBPACK_IMPORTED_MODULE_0__.pomodoros.length) _pomodoroTimerElements_js__WEBPACK_IMPORTED_MODULE_0__.pomodoros[0].classList.add(_utilitaries_js__WEBPACK_IMPORTED_MODULE_1__.active);\r\n}\r\n\n\n//# sourceURL=webpack://projeto-pomodoro/./js/modules/pomodoros.js?");

/***/ }),

/***/ "./js/modules/tasks.js":
/*!*****************************!*\
  !*** ./js/modules/tasks.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addCounter: () => (/* binding */ addCounter),\n/* harmony export */   addDropDownEvent: () => (/* binding */ addDropDownEvent),\n/* harmony export */   addTasksAndNotes: () => (/* binding */ addTasksAndNotes),\n/* harmony export */   addTextArea: () => (/* binding */ addTextArea),\n/* harmony export */   createElementCheckBox: () => (/* binding */ createElementCheckBox),\n/* harmony export */   createElementDiv: () => (/* binding */ createElementDiv),\n/* harmony export */   createElementEdit: () => (/* binding */ createElementEdit),\n/* harmony export */   createElementEditAndSave: () => (/* binding */ createElementEditAndSave),\n/* harmony export */   createElementParagraph: () => (/* binding */ createElementParagraph),\n/* harmony export */   createElementRemove: () => (/* binding */ createElementRemove),\n/* harmony export */   createElementSpan: () => (/* binding */ createElementSpan),\n/* harmony export */   createElementWrapper: () => (/* binding */ createElementWrapper),\n/* harmony export */   createTaskElement: () => (/* binding */ createTaskElement),\n/* harmony export */   \"default\": () => (/* binding */ initTasks),\n/* harmony export */   getTasks: () => (/* binding */ getTasks),\n/* harmony export */   handleRemoveAllTasks: () => (/* binding */ handleRemoveAllTasks),\n/* harmony export */   removeAllCompletedTasks: () => (/* binding */ removeAllCompletedTasks),\n/* harmony export */   removeAllTasks: () => (/* binding */ removeAllTasks),\n/* harmony export */   removeElementsUI: () => (/* binding */ removeElementsUI),\n/* harmony export */   removeMenuUI: () => (/* binding */ removeMenuUI),\n/* harmony export */   removeScaleEffectAllElements: () => (/* binding */ removeScaleEffectAllElements),\n/* harmony export */   renderTasks: () => (/* binding */ renderTasks)\n/* harmony export */ });\n/* harmony import */ var _tasksElements_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasksElements.js */ \"./js/modules/tasksElements.js\");\n\r\n\r\nlet tasks = [];\r\n\r\ntry {\r\n  const stored = JSON.parse(localStorage.getItem(\"tasksData\")) || [];\r\n  if (Array.isArray(stored)) tasks = stored;\r\n} catch (e) {\r\n  console.error(\"Erro ao ler taskData\", e);\r\n}\r\n\r\nfunction initTasks() {\r\n  renderTasks();\r\n}\r\n\r\nfunction renderTasks(elementTasks = tasks) {\r\n  _tasksElements_js__WEBPACK_IMPORTED_MODULE_0__.divInputTasks.innerHTML = \"\";\r\n  elementTasks.forEach((task, index) => {\r\n    const taskElement = createTaskElement(\r\n      task.title,\r\n      task.note,\r\n      index,\r\n      task.done\r\n    );\r\n    _tasksElements_js__WEBPACK_IMPORTED_MODULE_0__.divInputTasks.appendChild(taskElement);\r\n  });\r\n  addCounter();\r\n}\r\n\r\nfunction addTasksAndNotes() {\r\n  const title = _tasksElements_js__WEBPACK_IMPORTED_MODULE_0__.inputDescriptionTask.value.trim();\r\n  const note = _tasksElements_js__WEBPACK_IMPORTED_MODULE_0__.textArea.value.trim();\r\n\r\n  if (!title) return;\r\n\r\n  const newTask = {\r\n    title,\r\n    note,\r\n    done: false,\r\n  };\r\n\r\n  tasks.push(newTask);\r\n\r\n  localStorage.setItem(\"tasksData\", JSON.stringify(tasks));\r\n  renderTasks();\r\n\r\n  _tasksElements_js__WEBPACK_IMPORTED_MODULE_0__.inputDescriptionTask.value = \"\";\r\n  _tasksElements_js__WEBPACK_IMPORTED_MODULE_0__.textArea.value = \"\";\r\n}\r\n\r\nfunction createTaskElement(title, note, index) {\r\n  const span = createElementSpan();\r\n  const para = createElementParagraph(title);\r\n  const div = createElementDiv(note);\r\n  const btnEditSave = createElementEditAndSave();\r\n  const wrapper = createElementWrapper();\r\n  const checkbox = createElementCheckBox(index, para);\r\n  addDropDownEvent(btnEditSave, index, para, div, span, wrapper);\r\n  wrapper.append(checkbox, para, btnEditSave);\r\n  span.append(wrapper);\r\n  if (note) span.appendChild(div);\r\n  return span;\r\n}\r\n\r\nfunction createElementSpan() {\r\n  const spanElement = document.createElement(\"span\");\r\n  spanElement.classList.add(\"activatedSpan\");\r\n  return spanElement;\r\n}\r\n\r\nfunction createElementParagraph(text) {\r\n  const paragraphElement = document.createElement(\"p\");\r\n  paragraphElement.classList.add(\"activatedParagraph\");\r\n  paragraphElement.innerText = text;\r\n  return paragraphElement;\r\n}\r\n\r\nfunction createElementDiv(text) {\r\n  const divElement = document.createElement(\"div\");\r\n  divElement.classList.add(\"activatedDiv\");\r\n  divElement.innerText = text;\r\n  return divElement;\r\n}\r\n\r\nfunction createElementEditAndSave() {\r\n  const btnEditSave = document.createElement(\"button\");\r\n  btnEditSave.type = \"button\";\r\n  btnEditSave.classList.add(\"activatedEditAndSave\");\r\n  const imgDropDown = document.createElement(\"img\");\r\n  imgDropDown.src = \"./images/three-points.svg\";\r\n  imgDropDown.style.marginTop = \"2px\";\r\n  btnEditSave.appendChild(imgDropDown);\r\n  return btnEditSave;\r\n}\r\n\r\nfunction createElementWrapper() {\r\n  const elementWrapper = document.createElement(\"div\");\r\n  elementWrapper.classList.add(\"wrapper\");\r\n  return elementWrapper;\r\n}\r\n\r\nfunction createElementCheckBox(index, para) {\r\n  const checkbox = document.createElement(\"div\");\r\n  checkbox.classList.add(\"activatedDivCheckBox\");\r\n  checkbox.setAttribute(\"role\", \"checkbox\");\r\n  checkbox.setAttribute(\"aria-checked\", tasks[index]?.done);\r\n\r\n  if (tasks[index]?.done) {\r\n    checkbox.classList.add(\"alternateStateCheckbox\");\r\n    para.classList.add(\"alternateStateParagraph\");\r\n  }\r\n\r\n  checkbox.addEventListener(\"click\", () => {\r\n    checkbox.classList.toggle(\"alternateStateCheckbox\");\r\n    para.classList.toggle(\"alternateStateParagraph\");\r\n    tasks[index].done = checkbox.classList.contains(\"alternateStateCheckbox\");\r\n    allTasksCompleted();\r\n    reOrder();\r\n    localStorage.setItem(\"tasksData\", JSON.stringify(tasks));\r\n  });\r\n\r\n  return checkbox;\r\n}\r\n\r\nfunction addDropDownEvent(btnDropDown, index, para, div, span, wrapper) {\r\n  document.addEventListener(\"click\", (e) => {\r\n    if (!_tasksElements_js__WEBPACK_IMPORTED_MODULE_0__.divDropDown) return;\r\n    if (_tasksElements_js__WEBPACK_IMPORTED_MODULE_0__.divDropDown && !_tasksElements_js__WEBPACK_IMPORTED_MODULE_0__.divDropDown.contains(e.target)) {\r\n      removeElementsUI(_tasksElements_js__WEBPACK_IMPORTED_MODULE_0__.divDropDown);\r\n      removeScaleEffectAllElements();\r\n    }\r\n  });\r\n\r\n  btnDropDown.addEventListener(\"click\", (e) => {\r\n    e.stopPropagation();\r\n    btnDropDown.classList.toggle(\"scale-effect\");\r\n\r\n    if (_tasksElements_js__WEBPACK_IMPORTED_MODULE_0__.divDropDown) {\r\n      removeElementsUI(_tasksElements_js__WEBPACK_IMPORTED_MODULE_0__.divDropDown);\r\n      return;\r\n    }\r\n\r\n    const newDivDropDown = document.createElement(\"div\");\r\n    newDivDropDown.classList.add(\"activedDivDropDown\");\r\n    const rect = btnDropDown.getBoundingClientRect();\r\n    newDivDropDown.style.position = \"absolute\";\r\n    newDivDropDown.style.top = `${rect.bottom + window.scrollY}px`;\r\n\r\n    const [edit, divEdit, save] = createElementEdit(\r\n      index,\r\n      para,\r\n      div,\r\n      btnDropDown,\r\n      newDivDropDown,\r\n      span,\r\n      wrapper\r\n    );\r\n    const [remove, divRemove] = createElementRemove(index, newDivDropDown);\r\n\r\n    newDivDropDown.append(divEdit, divRemove);\r\n    document.body.appendChild(newDivDropDown);\r\n  });\r\n}\r\n\r\nfunction createElementEdit(\r\n  index,\r\n  para,\r\n  div,\r\n  btnDropDown,\r\n  divDropDown,\r\n  span,\r\n  wrapper\r\n) {\r\n  const edit = document.createElement(\"span\");\r\n  edit.classList.add(\"edit\");\r\n  edit.innerText = \"Editar\";\r\n\r\n  const divEdit = document.createElement(\"div\");\r\n  divEdit.classList.add(\"divListEdit\");\r\n\r\n  const save = document.createElement(\"button\");\r\n  save.type = \"button\";\r\n  save.classList.add(\"activatedButtonSave\");\r\n  save.innerText = \"Salvar\";\r\n\r\n  divEdit.appendChild(edit);\r\n\r\n  divEdit.addEventListener(\"click\", () => {\r\n    const inputEditTask = document.createElement(\"input\");\r\n    inputEditTask.type = \"text\";\r\n    inputEditTask.classList.add(\"activatedInputTasks\");\r\n    inputEditTask.value = tasks[index].title;\r\n\r\n    const inputEditNote = document.createElement(\"input\");\r\n    inputEditNote.type = \"text\";\r\n    inputEditNote.classList.add(\"activatedInputNote\");\r\n    inputEditNote.value = tasks[index].note;\r\n\r\n    para.replaceWith(inputEditTask);\r\n    div.replaceWith(inputEditNote);\r\n    wrapper.insertAdjacentElement(\"beforeend\", save);\r\n\r\n    removeElementsUI(divDropDown, btnDropDown);\r\n\r\n    save.addEventListener(\"click\", () => {\r\n      tasks[index].title = inputEditTask.value;\r\n      tasks[index].note = inputEditNote.value;\r\n      if (!tasks[index].title) return;\r\n\r\n      localStorage.setItem(\"tasksData\", JSON.stringify(tasks));\r\n      const updateTaskElements = createTaskElement(\r\n        tasks[index].title,\r\n        tasks[index].note,\r\n        index\r\n      );\r\n      span.replaceWith(updateTaskElements);\r\n      renderTasks();\r\n    });\r\n  });\r\n\r\n  return [edit, divEdit, save];\r\n}\r\n\r\nfunction createElementRemove(index, divDropDown) {\r\n  const remove = document.createElement(\"span\");\r\n  remove.classList.add(\"remove\");\r\n  remove.innerText = \"Remover\";\r\n\r\n  const divRemove = document.createElement(\"div\");\r\n  divRemove.classList.add(\"divListRemove\");\r\n  divRemove.appendChild(remove);\r\n\r\n  divRemove.addEventListener(\"click\", () => {\r\n    tasks.splice(index, 1);\r\n    removeElementsUI(divDropDown);\r\n    localStorage.setItem(\"tasksData\", JSON.stringify(tasks));\r\n    renderTasks();\r\n    addCounter();\r\n  });\r\n\r\n  return [remove, divRemove];\r\n}\r\n\r\nfunction removeElementsUI(dropDown, button) {\r\n  dropDown?.remove();\r\n  button?.remove();\r\n}\r\n\r\nfunction removeAllCompletedTasks() {\r\n  const taskCompleted = tasks.filter((el) => !el.done);\r\n  localStorage.setItem(\"tasksData\", JSON.stringify(taskCompleted));\r\n\r\n  tasks.length = 0;\r\n  tasks.push(...taskCompleted);\r\n\r\n  removeMenuUI(menuCleanTasks);\r\n  removeScaleEffectAllElements();\r\n  renderTasks();\r\n}\r\n\r\nfunction handleRemoveAllTasks() {\r\n    tasks.length = 0;\r\n    localStorage.setItem(\"tasksData\", JSON.stringify(tasks));\r\n\r\n    removeMenuUI(menuCleanTasks);\r\n    removeScaleEffectAllElements();\r\n    renderTasks();\r\n}\r\n\r\nfunction removeScaleEffectAllElements() {\r\n  document.querySelectorAll(\".scale-effect\").forEach((btn) => {\r\n    btn.classList.remove(\"scale-effect\");\r\n  });\r\n}\r\n\r\nfunction removeMenuUI(menu) {\r\n  const isVisible = menu.classList.contains(\"active\");\r\n  menu.classList.toggle(\"active\", !isVisible);\r\n  menu.classList.toggle(\"removeMenu\", isVisible);\r\n}\r\n\r\nfunction removeAllTasks() {\r\n  tasks.length = 0;\r\n  localStorage.setItem(\"tasksData\", JSON.stringify([]));\r\n  renderTasks();\r\n}\r\n\r\nfunction addCounter() {\r\n  _tasksElements_js__WEBPACK_IMPORTED_MODULE_0__.count.innerText = tasks.length;\r\n}\r\n\r\nfunction addTextArea() {\r\n  _tasksElements_js__WEBPACK_IMPORTED_MODULE_0__.textArea.classList.toggle(active);\r\n}\r\n\r\nfunction getTasks() {\r\n  return tasks;\r\n}\r\n\n\n//# sourceURL=webpack://projeto-pomodoro/./js/modules/tasks.js?");

/***/ }),

/***/ "./js/modules/tasksElements.js":
/*!*************************************!*\
  !*** ./js/modules/tasksElements.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addNotes: () => (/* binding */ addNotes),\n/* harmony export */   buttonAddTasks: () => (/* binding */ buttonAddTasks),\n/* harmony export */   count: () => (/* binding */ count),\n/* harmony export */   countElement: () => (/* binding */ countElement),\n/* harmony export */   divDropDown: () => (/* binding */ divDropDown),\n/* harmony export */   divInputTasks: () => (/* binding */ divInputTasks),\n/* harmony export */   inputDescriptionTask: () => (/* binding */ inputDescriptionTask),\n/* harmony export */   menu: () => (/* binding */ menu),\n/* harmony export */   removeAllTasksBtn: () => (/* binding */ removeAllTasksBtn),\n/* harmony export */   removeCompletedTasksBtn: () => (/* binding */ removeCompletedTasksBtn),\n/* harmony export */   textArea: () => (/* binding */ textArea)\n/* harmony export */ });\nconst inputDescriptionTask = document.getElementById(\"task\");\r\nconst textArea = document.querySelector(\"textarea\");\r\nconst addNotes = document.querySelector(\"[data-notes]\");\r\nconst buttonAddTasks = document.querySelector(\"[data-add-tasks]\");\r\nconst divInputTasks = document.querySelector(\".inputTasks\");\r\nconst menu = document.querySelector(\".menu-clean-tasks\");\r\nconst countElement = document.querySelector(\"[data-count]\");\r\nconst removeAllTasksBtn = document.querySelector(\".menu-clean-tasks [data-remove-all]\");\r\nconst removeCompletedTasksBtn = document.querySelector(\".menu-clean-tasks [data-completed]\");\r\nconst divDropDown = document.querySelector(\".activedDivDropDown\");\r\nconst count = document.querySelector(\"[data-count]\");\n\n//# sourceURL=webpack://projeto-pomodoro/./js/modules/tasksElements.js?");

/***/ }),

/***/ "./js/modules/tasksEvents.js":
/*!***********************************!*\
  !*** ./js/modules/tasksEvents.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ registerTaskEvents)\n/* harmony export */ });\n/* harmony import */ var _tasksElements_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasksElements.js */ \"./js/modules/tasksElements.js\");\n\r\n\r\nfunction registerTaskEvents() {\r\n  addNotes.addEventListener(\"click\", addTextArea);\r\n  buttonAddTasks.addEventListener(\"click\", addTasksAndNotes);\r\n  _tasksElements_js__WEBPACK_IMPORTED_MODULE_0__.removeAllTasksBtn.addEventListener(\"click\", () => handleRemoveAllTasks(_tasksElements_js__WEBPACK_IMPORTED_MODULE_0__.menu));\r\n  _tasksElements_js__WEBPACK_IMPORTED_MODULE_0__.removeCompletedTasksBtn.addEventListener(\"click\", () =>\r\n    removeAllCompletedTasks(_tasksElements_js__WEBPACK_IMPORTED_MODULE_0__.menu)\r\n  );\r\n}\r\n\n\n//# sourceURL=webpack://projeto-pomodoro/./js/modules/tasksEvents.js?");

/***/ }),

/***/ "./js/modules/utilitaries.js":
/*!***********************************!*\
  !*** ./js/modules/utilitaries.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   active: () => (/* binding */ active),\n/* harmony export */   hidden: () => (/* binding */ hidden)\n/* harmony export */ });\nconst active = \"active\";\r\nconst hidden = \"hidden\";\n\n//# sourceURL=webpack://projeto-pomodoro/./js/modules/utilitaries.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/index.js");
/******/ 	
/******/ })()
;