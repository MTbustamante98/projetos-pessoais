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

/***/ "./js/modules/ActiveDropDivs.js":
/*!**************************************!*\
  !*** ./js/modules/ActiveDropDivs.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst activeDropDivs = () => {\r\n  const dropWapper = document.querySelectorAll(\".drop-wrapper\");\r\n  const slide = document.querySelectorAll(\"[data-drop]\");\r\n  const active = \"active\";\r\n  console.log(slide);\r\n  if (slide && slide.length) slide[0].classList.add(active);\r\n\r\n  function handleActiveDiv(e) {\r\n    const itemOpenDiv = e.currentTarget.dataset.toggle;\r\n    const drop = document.querySelector(`[data-drop=\"${itemOpenDiv}\"]`);\r\n    drop?.classList.add(active);\r\n  }\r\n\r\n  function handleLeaveDiv(e) {\r\n    const itemOpenDiv = e.currentTarget.dataset.toggle;\r\n    const drop = document.querySelector(`[data-drop=\"${itemOpenDiv}\"]`);\r\n    drop?.classList.remove(active);\r\n  }\r\n\r\n  function handleTouchToggle(e) {\r\n    const itemOpenDiv = e.currentTarget.dataset.toggle;\r\n    const drop = document.querySelector(`[data-drop=\"${itemOpenDiv}\"]`);\r\n    drop?.classList.toggle(active);\r\n  }\r\n\r\n  dropWapper.forEach((el) => {\r\n    if (window.matchMedia(\"(max-width: 1024px)\").matches) {\r\n      el.addEventListener(\"touchstart\", handleTouchToggle, { passive: true });\r\n    } else {\r\n      el.addEventListener(\"mouseenter\", handleActiveDiv);\r\n      el.addEventListener(\"mouseleave\", handleLeaveDiv);\r\n    }\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (activeDropDivs);\r\n\n\n//# sourceURL=webpack:///./js/modules/ActiveDropDivs.js?\n}");

/***/ }),

/***/ "./js/modules/SimpleAnimeActive.js":
/*!*****************************************!*\
  !*** ./js/modules/SimpleAnimeActive.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst activeSimpleAnime = () => {\r\n  if (window.SimpleAnime) {\r\n    new SimpleAnime();\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (activeSimpleAnime);\n\n//# sourceURL=webpack:///./js/modules/SimpleAnimeActive.js?\n}");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_SimpleAnimeActive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/SimpleAnimeActive */ \"./js/modules/SimpleAnimeActive.js\");\n/* harmony import */ var _modules_ActiveDropDivs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/ActiveDropDivs */ \"./js/modules/ActiveDropDivs.js\");\n\r\n\r\n\r\n(0,_modules_SimpleAnimeActive__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n(0,_modules_ActiveDropDivs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(); \r\n\n\n//# sourceURL=webpack:///./js/script.js?\n}");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./js/script.js");
/******/ 	
/******/ })()
;