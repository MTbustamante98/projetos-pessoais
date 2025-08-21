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

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements */ \"./js/modules/elements.js\");\n\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", () => {\r\n  setTimeout(() => {\r\n    _elements__WEBPACK_IMPORTED_MODULE_0__.slide.forEach((divSlide) => {\r\n      if (divSlide) divSlide.classList.add(_elements__WEBPACK_IMPORTED_MODULE_0__.active);\r\n    });\r\n    setTimeout(() => {\r\n      _elements__WEBPACK_IMPORTED_MODULE_0__.slide.forEach((divSlide) => {\r\n        if (divSlide) divSlide.classList.remove(_elements__WEBPACK_IMPORTED_MODULE_0__.active);\r\n      });\r\n    }, 2000);\r\n  }, 1000);\r\n});\r\n\r\nconst activeDropDivs = () => {\r\n  function handleActiveDiv(e) {\r\n    const itemOpenDiv = e.currentTarget.dataset.toggle;\r\n    const drop = document.querySelector(`[data-drop=\"${itemOpenDiv}\"]`);\r\n    drop?.classList.add(_elements__WEBPACK_IMPORTED_MODULE_0__.active);\r\n  }\r\n\r\n  function handleLeaveDiv(e) {\r\n    const itemOpenDiv = e.currentTarget.dataset.toggle;\r\n    const drop = document.querySelector(`[data-drop=\"${itemOpenDiv}\"]`);\r\n    drop?.classList.remove(_elements__WEBPACK_IMPORTED_MODULE_0__.active);\r\n  }\r\n\r\n  function handleTouchToggle(e) {\r\n    const itemOpenDiv = e.currentTarget.dataset.toggle;\r\n    const drop = document.querySelector(`[data-drop=\"${itemOpenDiv}\"]`);\r\n    drop?.classList.toggle(_elements__WEBPACK_IMPORTED_MODULE_0__.active);\r\n  }\r\n\r\n  _elements__WEBPACK_IMPORTED_MODULE_0__.dropWapper.forEach((el) => {\r\n    if (window.matchMedia(\"(max-width: 1024px)\").matches) {\r\n      el.addEventListener(\"touchstart\", handleTouchToggle, { passive: true });\r\n    } else {\r\n      el.addEventListener(\"mouseenter\", handleActiveDiv);\r\n      el.addEventListener(\"mouseleave\", handleLeaveDiv);\r\n    }\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (activeDropDivs);\r\n\n\n//# sourceURL=webpack:///./js/modules/ActiveDropDivs.js?\n}");

/***/ }),

/***/ "./js/modules/ActiveModal.js":
/*!***********************************!*\
  !*** ./js/modules/ActiveModal.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements */ \"./js/modules/elements.js\");\n\r\n\r\nconst activeModal = () => {\r\n  _elements__WEBPACK_IMPORTED_MODULE_0__.btnModal.forEach((btn) => {\r\n    btn.addEventListener(\"click\", (e) => {\r\n      e.stopPropagation();\r\n      _elements__WEBPACK_IMPORTED_MODULE_0__.modal.classList.add(_elements__WEBPACK_IMPORTED_MODULE_0__.active);\r\n      _elements__WEBPACK_IMPORTED_MODULE_0__.containerMedia.classList.add(\"removeClass\");\r\n\r\n      _elements__WEBPACK_IMPORTED_MODULE_0__.title.innerText = e.currentTarget.innerText.trim();\r\n      _elements__WEBPACK_IMPORTED_MODULE_0__.video.pause();\r\n    });\r\n\r\n    document.addEventListener(\"click\", ({ target }) => {\r\n      console.log(target)\r\n      if (!_elements__WEBPACK_IMPORTED_MODULE_0__.modal.contains(target) && ![..._elements__WEBPACK_IMPORTED_MODULE_0__.btnModal].includes(target) && !_elements__WEBPACK_IMPORTED_MODULE_0__.closeModal.contains(target) || target === _elements__WEBPACK_IMPORTED_MODULE_0__.closeModal) {\r\n        if (_elements__WEBPACK_IMPORTED_MODULE_0__.modal.classList.contains(_elements__WEBPACK_IMPORTED_MODULE_0__.active)) {\r\n          _elements__WEBPACK_IMPORTED_MODULE_0__.modal.classList.remove(_elements__WEBPACK_IMPORTED_MODULE_0__.active);\r\n          _elements__WEBPACK_IMPORTED_MODULE_0__.containerMedia.classList.remove(\"removeClass\");\r\n          _elements__WEBPACK_IMPORTED_MODULE_0__.title.innerText = \"Menu Inicial\";\r\n          _elements__WEBPACK_IMPORTED_MODULE_0__.title.setAttribute(\"data-titulo\", \"Menu Inicial\");\r\n        }\r\n      }\r\n    });\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (activeModal);\r\n\n\n//# sourceURL=webpack:///./js/modules/ActiveModal.js?\n}");

/***/ }),

/***/ "./js/modules/SimpleAnimeActive.js":
/*!*****************************************!*\
  !*** ./js/modules/SimpleAnimeActive.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst activeSimpleAnime = () => {\r\n  if (window.SimpleAnime) {\r\n    new SimpleAnime();\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (activeSimpleAnime);\n\n//# sourceURL=webpack:///./js/modules/SimpleAnimeActive.js?\n}");

/***/ }),

/***/ "./js/modules/ToUpdateVideos.js":
/*!**************************************!*\
  !*** ./js/modules/ToUpdateVideos.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements */ \"./js/modules/elements.js\");\n\r\nconst toUpdateVideos = () => {\r\n  document.addEventListener(\"click\", ({ target }) => {\r\n    const itemOpenVideo = target.closest(\".btn-icone\");\r\n    if (itemOpenVideo) {\r\n      const data = itemOpenVideo.getAttribute(\"data-video\");\r\n      if (data) {\r\n        _elements__WEBPACK_IMPORTED_MODULE_0__.source.src = `${data}.mp4`;\r\n\r\n        _elements__WEBPACK_IMPORTED_MODULE_0__.video.load();\r\n\r\n        const spanText = itemOpenVideo.querySelector(\"span\");\r\n        if (spanText) {\r\n          const text = spanText.innerText.trim();\r\n\r\n          _elements__WEBPACK_IMPORTED_MODULE_0__.title.innerText = text;\r\n\r\n          _elements__WEBPACK_IMPORTED_MODULE_0__.title.setAttribute(\"data-titulo\", text);\r\n        }\r\n      }\r\n    }\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toUpdateVideos);\r\n\n\n//# sourceURL=webpack:///./js/modules/ToUpdateVideos.js?\n}");

/***/ }),

/***/ "./js/modules/elements.js":
/*!********************************!*\
  !*** ./js/modules/elements.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   active: () => (/* binding */ active),\n/* harmony export */   btnModal: () => (/* binding */ btnModal),\n/* harmony export */   closeModal: () => (/* binding */ closeModal),\n/* harmony export */   containerMedia: () => (/* binding */ containerMedia),\n/* harmony export */   dropWapper: () => (/* binding */ dropWapper),\n/* harmony export */   modal: () => (/* binding */ modal),\n/* harmony export */   slide: () => (/* binding */ slide),\n/* harmony export */   sliderImg: () => (/* binding */ sliderImg),\n/* harmony export */   source: () => (/* binding */ source),\n/* harmony export */   title: () => (/* binding */ title),\n/* harmony export */   video: () => (/* binding */ video)\n/* harmony export */ });\n// Slide div's\r\nconst dropWapper = document.querySelectorAll(\".drop-wrapper\");\r\nconst slide = document.querySelectorAll(\"[data-drop]\");\r\n\r\n//Elements update video\r\nconst video = document.querySelector(\"video\");\r\nconst source = video.querySelector(\"source\");\r\n\r\n//Modal\r\nconst btnModal = document.querySelectorAll(\"[data-active-modal]\");\r\nconst modal = document.querySelector(\"[data-modal]\");\r\nconst containerMedia = document.querySelector(\"#container-media-video\");\r\nconst closeModal = document.querySelector(\".close-modal\");\r\n\r\n//Rotinas\r\nconst sliderImg = document.querySelector(\"[data-imagem-rotina]\");\r\n\r\nconst active = \"active\";\r\nconst title = document.querySelector(\"[data-titulo]\");\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./js/modules/elements.js?\n}");

/***/ }),

/***/ "./js/modules/updateVideoAndImg.js":
/*!*****************************************!*\
  !*** ./js/modules/updateVideoAndImg.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements */ \"./js/modules/elements.js\");\n\r\n\r\nconst updateVideoImg = () => {\r\n  const rotinas = {\r\n    mao: [\r\n      { img: \"./img/mao-pa.png\", video: \"./videos/mao-pa.mp4\" },\r\n      { img: \"./img/mao-ob.png\", video: \"./videos/mao-ob.mp4\" },\r\n      { img: \"./img/mao-pe.png\", video: \"./videos/mao-pe.mp4\" },\r\n    ],\r\n    cranio: [\r\n      { img: \"./img/cranio-pa.png\", video: \"./videos/cranio-pa.mp4\" },\r\n      { img: \"./img/cranio-waters.png\", video: \"./videos/cranio-waters.mp4\" },\r\n      { img: \"./img/cranio-ap.png\", video: \"./videos/cranio-ap.mp4\" },\r\n      { img: \"./img/cranio-pe.png\", video: \"./videos/cranio-pe.mp4\" },\r\n    ],\r\n    abdome: [\r\n      {\r\n        img: \"./img/rotina-abdome-1.png\",\r\n        video: \"./videos/rotina-abdome-1.mp4\",\r\n      },\r\n      { img: \"./img/abdome-orts-ap.png\", video: \"./videos/abdome-orts-ap.mp4\" },\r\n      { img: \"./img/abdome-rub-dle.png\", video: \"./videos/abdome-rub-dle.mp4\" },\r\n      { img: \"./img/abdome-dle.png\", video: \"./videos/abdome-dle.m  p4\" },\r\n    ],\r\n    torax: [\r\n      { img: \"./img/torax-pa.png\", video: \"./videos/torax-pa.mp4\" },\r\n      { img: \"./img/torax-pe.png\", video: \"./videos/torax-pe.mp4\" },\r\n    ],\r\n  };\r\n\r\n  const pagina = document.body.id.replace(\"rotina-\", \"\");\r\n  const listaAtual = rotinas[pagina];\r\n  let currentIndex = 0;\r\n\r\n  if (listaAtual && listaAtual.length) {\r\n    _elements__WEBPACK_IMPORTED_MODULE_0__.sliderImg.src = listaAtual[currentIndex].img;\r\n    _elements__WEBPACK_IMPORTED_MODULE_0__.source.src = listaAtual[currentIndex].video;\r\n    _elements__WEBPACK_IMPORTED_MODULE_0__.video.load();\r\n  }\r\n\r\n  function updateSliderAndMediaVideo() {\r\n    currentIndex++;\r\n    if (currentIndex >= listaAtual.length) currentIndex = 0;\r\n\r\n    const nextItem = listaAtual[currentIndex];\r\n\r\n    _elements__WEBPACK_IMPORTED_MODULE_0__.sliderImg.src = nextItem.img;\r\n    _elements__WEBPACK_IMPORTED_MODULE_0__.source.src = nextItem.video;\r\n    _elements__WEBPACK_IMPORTED_MODULE_0__.video.load();\r\n  }\r\n\r\n  _elements__WEBPACK_IMPORTED_MODULE_0__.video.addEventListener(\"ended\", updateSliderAndMediaVideo);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateVideoImg);\r\n\n\n//# sourceURL=webpack:///./js/modules/updateVideoAndImg.js?\n}");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_SimpleAnimeActive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/SimpleAnimeActive */ \"./js/modules/SimpleAnimeActive.js\");\n/* harmony import */ var _modules_ActiveDropDivs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/ActiveDropDivs */ \"./js/modules/ActiveDropDivs.js\");\n/* harmony import */ var _modules_ToUpdateVideos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/ToUpdateVideos */ \"./js/modules/ToUpdateVideos.js\");\n/* harmony import */ var _modules_ActiveModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/ActiveModal */ \"./js/modules/ActiveModal.js\");\n/* harmony import */ var _modules_updateVideoAndImg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/updateVideoAndImg */ \"./js/modules/updateVideoAndImg.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_ActiveDropDivs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(); \r\n(0,_modules_SimpleAnimeActive__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n(0,_modules_ToUpdateVideos__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(); \r\n(0,_modules_ActiveModal__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_updateVideoAndImg__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n\n//# sourceURL=webpack:///./js/script.js?\n}");

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