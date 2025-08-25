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

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements */ \"./js/modules/elements.js\");\n\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", () => {\r\n  setTimeout(() => {\r\n    _elements__WEBPACK_IMPORTED_MODULE_0__.slide.forEach((divSlide) => {\r\n      if (divSlide) divSlide.classList.add(_elements__WEBPACK_IMPORTED_MODULE_0__.active);\r\n    });\r\n    setTimeout(() => {\r\n      _elements__WEBPACK_IMPORTED_MODULE_0__.slide.forEach((divSlide) => {\r\n        if (divSlide) divSlide.classList.remove(_elements__WEBPACK_IMPORTED_MODULE_0__.active);\r\n      });\r\n    }, 2000);\r\n  }, 1000);\r\n});\r\n\r\nconst activeDropDivs = () => {\r\n  function handleActiveDiv(e) {\r\n    const itemOpenDiv = e.currentTarget.dataset.toggle;\r\n    const drop = document.querySelector(`[data-drop=\"${itemOpenDiv}\"]`);\r\n    drop?.classList.add(_elements__WEBPACK_IMPORTED_MODULE_0__.active);\r\n  }\r\n\r\n  function handleLeaveDiv(e) {\r\n    const itemOpenDiv = e.currentTarget.dataset.toggle;\r\n    const drop = document.querySelector(`[data-drop=\"${itemOpenDiv}\"]`);\r\n    drop?.classList.remove(_elements__WEBPACK_IMPORTED_MODULE_0__.active);\r\n  }\r\n\r\n  function handleTouchToggle(e) {\r\n    const itemOpenDiv = e.currentTarget.dataset.toggle;\r\n    const drop = document.querySelector(`[data-drop=\"${itemOpenDiv}\"]`);\r\n    drop?.classList.toggle(_elements__WEBPACK_IMPORTED_MODULE_0__.active);\r\n\r\n    document.addEventListener(\"touchstart\", ({ target }) => {\r\n      const insideDrop = target.closest(\"[data-drop]\");\r\n      const insideTrigger = target.closest(\"[data-toggle]\");\r\n      if (!insideDrop && !insideTrigger) {\r\n        document\r\n          .querySelectorAll(\"[data-drop]\")\r\n          .forEach((drop) => drop.classList.remove(_elements__WEBPACK_IMPORTED_MODULE_0__.active));\r\n      }\r\n    });\r\n  }\r\n\r\n  _elements__WEBPACK_IMPORTED_MODULE_0__.dropWapper.forEach((el) => {\r\n    if (window.matchMedia(\"(max-width: 1024px)\").matches) {\r\n      el.addEventListener(\"touchstart\", handleTouchToggle, { passive: true });\r\n    } else {\r\n      el.addEventListener(\"mouseenter\", handleActiveDiv);\r\n      el.addEventListener(\"mouseleave\", handleLeaveDiv);\r\n    }\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (activeDropDivs);\r\n\n\n//# sourceURL=webpack:///./js/modules/ActiveDropDivs.js?\n}");

/***/ }),

/***/ "./js/modules/ActiveModal.js":
/*!***********************************!*\
  !*** ./js/modules/ActiveModal.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements */ \"./js/modules/elements.js\");\n\r\nconsole.log()\r\nconst activeModal = () => {\r\n  const events = [\"click\", \"touchstart\"];\r\n  function openModal(e) {\r\n    e.preventDefault();\r\n    e.stopPropagation();\r\n\r\n    _elements__WEBPACK_IMPORTED_MODULE_0__.modal.classList.add(_elements__WEBPACK_IMPORTED_MODULE_0__.active);\r\n    if (_elements__WEBPACK_IMPORTED_MODULE_0__.modal) _elements__WEBPACK_IMPORTED_MODULE_0__.slide.forEach((slide) => slide.classList.remove(_elements__WEBPACK_IMPORTED_MODULE_0__.active))\r\n    _elements__WEBPACK_IMPORTED_MODULE_0__.containerMedia.classList.add(\"removeClass\");\r\n\r\n    _elements__WEBPACK_IMPORTED_MODULE_0__.title.innerText = e.currentTarget.innerText.trim();\r\n    if (!_elements__WEBPACK_IMPORTED_MODULE_0__.video.paused) _elements__WEBPACK_IMPORTED_MODULE_0__.video.pause();\r\n  }\r\n\r\n  function closeModalHandler() {\r\n    _elements__WEBPACK_IMPORTED_MODULE_0__.modal.classList.remove(_elements__WEBPACK_IMPORTED_MODULE_0__.active);\r\n    _elements__WEBPACK_IMPORTED_MODULE_0__.containerMedia.classList.remove(\"removeClass\");\r\n    _elements__WEBPACK_IMPORTED_MODULE_0__.title.innerText = \"Menu Inicial\";\r\n    _elements__WEBPACK_IMPORTED_MODULE_0__.title.setAttribute(\"data-titulo\", \"Menu Inicial\");\r\n  }\r\n\r\n  if (_elements__WEBPACK_IMPORTED_MODULE_0__.closeModal) {\r\n    events.forEach((eventType) =>\r\n      _elements__WEBPACK_IMPORTED_MODULE_0__.closeModal.addEventListener(eventType, closeModalHandler)\r\n    );\r\n  }\r\n\r\n  events.forEach((eventType) => {\r\n    document.addEventListener(eventType, ({ target }) => {\r\n      const isOutsideModal = _elements__WEBPACK_IMPORTED_MODULE_0__.modal && !_elements__WEBPACK_IMPORTED_MODULE_0__.modal.contains(target);\r\n      const isNotBtn = ![..._elements__WEBPACK_IMPORTED_MODULE_0__.btnModal].includes(target);\r\n      const isNotClose = _elements__WEBPACK_IMPORTED_MODULE_0__.closeModal && !_elements__WEBPACK_IMPORTED_MODULE_0__.closeModal.contains(target);\r\n      const isClose = target === _elements__WEBPACK_IMPORTED_MODULE_0__.closeModal;\r\n\r\n      if ((isOutsideModal && isNotBtn && isNotClose) || isClose) {\r\n        closeModalHandler();\r\n      }\r\n    });\r\n  });\r\n\r\n  _elements__WEBPACK_IMPORTED_MODULE_0__.btnModal.forEach((btn) => {\r\n    events.forEach((eventType) => btn.addEventListener(eventType, openModal));\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (activeModal);\r\n\n\n//# sourceURL=webpack:///./js/modules/ActiveModal.js?\n}");

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

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements */ \"./js/modules/elements.js\");\n\r\nconst toUpdateVideos = () => {\r\n  const events = [\"touchstart\", \"click\"];\r\n  events.forEach((eventType) => {\r\n    document.addEventListener(eventType, ({ target }) => {\r\n      const itemOpenVideo = target.closest(\".btn-icone\");\r\n      if (itemOpenVideo) {\r\n        const data = itemOpenVideo.getAttribute(\"data-video\");\r\n        if (data) {\r\n          if (_elements__WEBPACK_IMPORTED_MODULE_0__.video && _elements__WEBPACK_IMPORTED_MODULE_0__.source) {\r\n            _elements__WEBPACK_IMPORTED_MODULE_0__.source.src = `${data}.mp4`;\r\n            _elements__WEBPACK_IMPORTED_MODULE_0__.video.load();\r\n          }\r\n\r\n          const spanText = itemOpenVideo.querySelector(\"span\");\r\n          if (spanText) {\r\n            const text = spanText.innerText.trim();\r\n\r\n            _elements__WEBPACK_IMPORTED_MODULE_0__.title.innerText = text;\r\n\r\n            _elements__WEBPACK_IMPORTED_MODULE_0__.title.setAttribute(\"data-titulo\", text);\r\n          }\r\n        }\r\n      }\r\n    });\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toUpdateVideos);\r\n\n\n//# sourceURL=webpack:///./js/modules/ToUpdateVideos.js?\n}");

/***/ }),

/***/ "./js/modules/elements.js":
/*!********************************!*\
  !*** ./js/modules/elements.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   active: () => (/* binding */ active),\n/* harmony export */   btnModal: () => (/* binding */ btnModal),\n/* harmony export */   closeModal: () => (/* binding */ closeModal),\n/* harmony export */   containerMedia: () => (/* binding */ containerMedia),\n/* harmony export */   dropWapper: () => (/* binding */ dropWapper),\n/* harmony export */   form: () => (/* binding */ form),\n/* harmony export */   imgPerson: () => (/* binding */ imgPerson),\n/* harmony export */   inputName: () => (/* binding */ inputName),\n/* harmony export */   modal: () => (/* binding */ modal),\n/* harmony export */   slide: () => (/* binding */ slide),\n/* harmony export */   sliderImg: () => (/* binding */ sliderImg),\n/* harmony export */   source: () => (/* binding */ source),\n/* harmony export */   textarea: () => (/* binding */ textarea),\n/* harmony export */   title: () => (/* binding */ title),\n/* harmony export */   video: () => (/* binding */ video)\n/* harmony export */ });\n// Slide div's\r\nconst dropWapper = document.querySelectorAll(\".drop-wrapper\");\r\nconst slide = document.querySelectorAll(\"[data-drop]\");\r\n\r\n//Elements update video\r\nconst video = document.querySelector(\"video\");\r\nconst source = video ? video.querySelector(\"source\") : null;\r\n\r\n\r\n//Modal\r\nconst btnModal = document.querySelectorAll(\"[data-active-modal]\");\r\nconst modal = document.querySelector(\"[data-modal]\");\r\nconst containerMedia = document.querySelector(\"#container-media-video\");\r\nconst closeModal = document.querySelector(\".close-modal\");\r\n\r\n//Rotinas\r\nconst sliderImg = document.querySelector(\"[data-imagem-rotina]\");\r\nconst imgPerson = document.querySelector(\"[data-person-img]\")\r\n\r\n// Sugestão\r\nconst form = document.querySelector(\"#sendEmail\");\r\nconst textarea = document.querySelector(\"textarea\");\r\nconst inputName = document.querySelector(\"input\");\r\n\r\nconst active = \"active\";\r\nconst title = document.querySelector(\"[data-titulo]\");\r\n\n\n//# sourceURL=webpack:///./js/modules/elements.js?\n}");

/***/ }),

/***/ "./js/modules/sendEmail.js":
/*!*********************************!*\
  !*** ./js/modules/sendEmail.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _emailjs_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emailjs/browser */ \"./node_modules/@emailjs/browser/es/index.js\");\n/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./elements */ \"./js/modules/elements.js\");\n\r\n\r\n\r\nconst sendEmailJS = () => {\r\n  _emailjs_browser__WEBPACK_IMPORTED_MODULE_0__[\"default\"].init(\"S7MmKe84IxrIf2XJK\");\r\n\r\n  function sendEmail(e) {\r\n    e.preventDefault();\r\n\r\n    const inputValue = _elements__WEBPACK_IMPORTED_MODULE_1__.inputName.value.trim();\r\n    const textValue = _elements__WEBPACK_IMPORTED_MODULE_1__.textarea.value.trim();\r\n\r\n    if (!textValue || !inputValue) return false;\r\n\r\n    _emailjs_browser__WEBPACK_IMPORTED_MODULE_0__[\"default\"].send(\"service_4s0cv2p\", \"template_7aen7un\", {\r\n        name: inputValue,\r\n        message: textValue,\r\n      })\r\n      .then(() => {\r\n        alert(\"Sugestão enviada com sucesso!\");\r\n        _elements__WEBPACK_IMPORTED_MODULE_1__.form.reset();\r\n      })\r\n      .catch((error) => alert(\"Erro, tente novamente!\", error));\r\n  }\r\n\r\n  _elements__WEBPACK_IMPORTED_MODULE_1__.form.addEventListener(\"submit\", sendEmail);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendEmailJS);\r\n\n\n//# sourceURL=webpack:///./js/modules/sendEmail.js?\n}");

/***/ }),

/***/ "./js/modules/updateVideoAndImg.js":
/*!*****************************************!*\
  !*** ./js/modules/updateVideoAndImg.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements */ \"./js/modules/elements.js\");\n\r\n\r\nconst updateVideoImg = () => {\r\n  const rotinas = {\r\n    mao: [\r\n      { img: \"./img/mao-pa.png\", video: \"./videos/mao-pa.mp4\" },\r\n      { img: \"./img/mao-ob.png\", video: \"./videos/mao-ob.mp4\" },\r\n      { img: \"./img/mao-pe.png\", video: \"./videos/mao-pe.mp4\" },\r\n    ],\r\n    cranio: [\r\n      { img: \"./img/cranio-pa.png\", video: \"./videos/cranio-pa.mp4\" },\r\n      { img: \"./img/cranio-waters.png\", video: \"./videos/cranio-waters.mp4\" },\r\n      { img: \"./img/cranio-ap.png\", video: \"./videos/cranio-ap.mp4\" },\r\n      { img: \"./img/cranio-pe.png\", video: \"./videos/cranio-pe.mp4\" },\r\n    ],\r\n    abdome: [\r\n      {\r\n        img: \"./img/abdome-1.png\",\r\n        video: \"./videos/torax-pa.mp4\",\r\n      },\r\n      { img: \"./img/abdome-orts-ap.png\", video: \"./videos/abdome-orts-ap.mp4\" },\r\n      { img: \"./img/abdome-rub-dle.png\", video: \"./videos/abdome-rub-dle.mp4\" },\r\n      { img: \"./img/abdome-dle.png\", video: \"./videos/abdome-dle.mp4\" },\r\n    ],\r\n    torax: [\r\n      { img: \"./img/torax-pa.png\", video: \"./videos/torax-pa.mp4\" },\r\n      { img: \"./img/torax-pe.png\", video: \"./videos/torax-pe.mp4\" },\r\n    ],\r\n  };\r\n\r\n  const pagina = document.body.id.replace(\"rotina-\", \"\");\r\n  const listaAtual = rotinas[pagina];\r\n  let currentIndex = 0;\r\n\r\n  if (listaAtual && listaAtual.length) {\r\n    _elements__WEBPACK_IMPORTED_MODULE_0__.sliderImg.src = listaAtual[currentIndex].img;\r\n    _elements__WEBPACK_IMPORTED_MODULE_0__.source.src = listaAtual[currentIndex].video;\r\n    _elements__WEBPACK_IMPORTED_MODULE_0__.video.load();\r\n  }\r\n\r\n  function updatePuppetInroutines() {\r\n    const nextItem = listaAtual[currentIndex];\r\n    if (\r\n      nextItem.img.includes(\"abdome-rub-dle.png\") ||\r\n      nextItem.img.includes(\"abdome-dle.png\")\r\n    ) {\r\n      _elements__WEBPACK_IMPORTED_MODULE_0__.imgPerson.setAttribute(\"src\", \"./img/boneco-deitado.png\");\r\n    } else if (nextItem.img.includes(\"torax-pe.png\")) {\r\n      _elements__WEBPACK_IMPORTED_MODULE_0__.imgPerson.setAttribute(\"src\", \"./img/boneco-perfil.png\");\r\n    } else {\r\n      _elements__WEBPACK_IMPORTED_MODULE_0__.imgPerson.setAttribute(\"src\", \"./img/boneco-em-pe.png\");\r\n    }\r\n  }\r\n\r\n  function updateSliderAndMediaVideo() {\r\n    currentIndex++;\r\n    if (currentIndex >= listaAtual.length) currentIndex = 0;\r\n\r\n    const nextItem = listaAtual[currentIndex];\r\n\r\n    _elements__WEBPACK_IMPORTED_MODULE_0__.sliderImg.src = nextItem.img;\r\n    _elements__WEBPACK_IMPORTED_MODULE_0__.source.src = nextItem.video;\r\n    _elements__WEBPACK_IMPORTED_MODULE_0__.video.load();\r\n\r\n    updatePuppetInroutines();\r\n  }\r\n\r\n  if (_elements__WEBPACK_IMPORTED_MODULE_0__.video && _elements__WEBPACK_IMPORTED_MODULE_0__.source)\r\n    _elements__WEBPACK_IMPORTED_MODULE_0__.video.addEventListener(\"ended\", updateSliderAndMediaVideo);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateVideoImg);\r\n\n\n//# sourceURL=webpack:///./js/modules/updateVideoAndImg.js?\n}");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_SimpleAnimeActive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/SimpleAnimeActive */ \"./js/modules/SimpleAnimeActive.js\");\n/* harmony import */ var _modules_ActiveDropDivs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/ActiveDropDivs */ \"./js/modules/ActiveDropDivs.js\");\n/* harmony import */ var _modules_ToUpdateVideos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/ToUpdateVideos */ \"./js/modules/ToUpdateVideos.js\");\n/* harmony import */ var _modules_ActiveModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/ActiveModal */ \"./js/modules/ActiveModal.js\");\n/* harmony import */ var _modules_updateVideoAndImg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/updateVideoAndImg */ \"./js/modules/updateVideoAndImg.js\");\n/* harmony import */ var _modules_sendEmail__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/sendEmail */ \"./js/modules/sendEmail.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_ActiveDropDivs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_SimpleAnimeActive__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n(0,_modules_ToUpdateVideos__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_ActiveModal__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_updateVideoAndImg__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n(0,_modules_sendEmail__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\n\n\n//# sourceURL=webpack:///./js/script.js?\n}");

/***/ }),

/***/ "./node_modules/@emailjs/browser/es/api/sendPost.js":
/*!**********************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/api/sendPost.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   sendPost: () => (/* binding */ sendPost)\n/* harmony export */ });\n/* harmony import */ var _models_EmailJSResponseStatus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/EmailJSResponseStatus */ \"./node_modules/@emailjs/browser/es/models/EmailJSResponseStatus.js\");\n/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/store */ \"./node_modules/@emailjs/browser/es/store/store.js\");\n\n\nconst sendPost = async (url, data, headers = {}) => {\n    const response = await fetch(_store_store__WEBPACK_IMPORTED_MODULE_1__.store.origin + url, {\n        method: 'POST',\n        headers,\n        body: data,\n    });\n    const message = await response.text();\n    const responseStatus = new _models_EmailJSResponseStatus__WEBPACK_IMPORTED_MODULE_0__.EmailJSResponseStatus(response.status, message);\n    if (response.ok) {\n        return responseStatus;\n    }\n    throw responseStatus;\n};\n\n\n//# sourceURL=webpack:///./node_modules/@emailjs/browser/es/api/sendPost.js?\n}");

/***/ }),

/***/ "./node_modules/@emailjs/browser/es/errors/blockedEmailError/blockedEmailError.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/errors/blockedEmailError/blockedEmailError.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   blockedEmailError: () => (/* binding */ blockedEmailError)\n/* harmony export */ });\n/* harmony import */ var _models_EmailJSResponseStatus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/EmailJSResponseStatus */ \"./node_modules/@emailjs/browser/es/models/EmailJSResponseStatus.js\");\n\nconst blockedEmailError = () => {\n    return new _models_EmailJSResponseStatus__WEBPACK_IMPORTED_MODULE_0__.EmailJSResponseStatus(403, 'Forbidden');\n};\n\n\n//# sourceURL=webpack:///./node_modules/@emailjs/browser/es/errors/blockedEmailError/blockedEmailError.js?\n}");

/***/ }),

/***/ "./node_modules/@emailjs/browser/es/errors/headlessError/headlessError.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/errors/headlessError/headlessError.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headlessError: () => (/* binding */ headlessError)\n/* harmony export */ });\n/* harmony import */ var _models_EmailJSResponseStatus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/EmailJSResponseStatus */ \"./node_modules/@emailjs/browser/es/models/EmailJSResponseStatus.js\");\n\nconst headlessError = () => {\n    return new _models_EmailJSResponseStatus__WEBPACK_IMPORTED_MODULE_0__.EmailJSResponseStatus(451, 'Unavailable For Headless Browser');\n};\n\n\n//# sourceURL=webpack:///./node_modules/@emailjs/browser/es/errors/headlessError/headlessError.js?\n}");

/***/ }),

/***/ "./node_modules/@emailjs/browser/es/errors/limitRateError/limitRateError.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/errors/limitRateError/limitRateError.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   limitRateError: () => (/* binding */ limitRateError)\n/* harmony export */ });\n/* harmony import */ var _models_EmailJSResponseStatus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/EmailJSResponseStatus */ \"./node_modules/@emailjs/browser/es/models/EmailJSResponseStatus.js\");\n\nconst limitRateError = () => {\n    return new _models_EmailJSResponseStatus__WEBPACK_IMPORTED_MODULE_0__.EmailJSResponseStatus(429, 'Too Many Requests');\n};\n\n\n//# sourceURL=webpack:///./node_modules/@emailjs/browser/es/errors/limitRateError/limitRateError.js?\n}");

/***/ }),

/***/ "./node_modules/@emailjs/browser/es/index.js":
/*!***************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   EmailJSResponseStatus: () => (/* reexport safe */ _models_EmailJSResponseStatus__WEBPACK_IMPORTED_MODULE_0__.EmailJSResponseStatus),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   init: () => (/* reexport safe */ _methods_init_init__WEBPACK_IMPORTED_MODULE_1__.init),\n/* harmony export */   send: () => (/* reexport safe */ _methods_send_send__WEBPACK_IMPORTED_MODULE_2__.send),\n/* harmony export */   sendForm: () => (/* reexport safe */ _methods_sendForm_sendForm__WEBPACK_IMPORTED_MODULE_3__.sendForm)\n/* harmony export */ });\n/* harmony import */ var _models_EmailJSResponseStatus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/EmailJSResponseStatus */ \"./node_modules/@emailjs/browser/es/models/EmailJSResponseStatus.js\");\n/* harmony import */ var _methods_init_init__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./methods/init/init */ \"./node_modules/@emailjs/browser/es/methods/init/init.js\");\n/* harmony import */ var _methods_send_send__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./methods/send/send */ \"./node_modules/@emailjs/browser/es/methods/send/send.js\");\n/* harmony import */ var _methods_sendForm_sendForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./methods/sendForm/sendForm */ \"./node_modules/@emailjs/browser/es/methods/sendForm/sendForm.js\");\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    init: _methods_init_init__WEBPACK_IMPORTED_MODULE_1__.init,\n    send: _methods_send_send__WEBPACK_IMPORTED_MODULE_2__.send,\n    sendForm: _methods_sendForm_sendForm__WEBPACK_IMPORTED_MODULE_3__.sendForm,\n    EmailJSResponseStatus: _models_EmailJSResponseStatus__WEBPACK_IMPORTED_MODULE_0__.EmailJSResponseStatus,\n});\n\n\n//# sourceURL=webpack:///./node_modules/@emailjs/browser/es/index.js?\n}");

/***/ }),

/***/ "./node_modules/@emailjs/browser/es/methods/init/init.js":
/*!***************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/methods/init/init.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   init: () => (/* binding */ init)\n/* harmony export */ });\n/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store/store */ \"./node_modules/@emailjs/browser/es/store/store.js\");\n/* harmony import */ var _utils_buildOptions_buildOptions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/buildOptions/buildOptions */ \"./node_modules/@emailjs/browser/es/utils/buildOptions/buildOptions.js\");\n\n\n/**\n * EmailJS global SDK config\n * @param {object} options - the EmailJS global SDK config options\n * @param {string} origin - the non-default EmailJS origin\n */\nconst init = (options, origin = 'https://api.emailjs.com') => {\n    if (!options)\n        return;\n    const opts = (0,_utils_buildOptions_buildOptions__WEBPACK_IMPORTED_MODULE_1__.buildOptions)(options);\n    _store_store__WEBPACK_IMPORTED_MODULE_0__.store.publicKey = opts.publicKey;\n    _store_store__WEBPACK_IMPORTED_MODULE_0__.store.blockHeadless = opts.blockHeadless;\n    _store_store__WEBPACK_IMPORTED_MODULE_0__.store.storageProvider = opts.storageProvider;\n    _store_store__WEBPACK_IMPORTED_MODULE_0__.store.blockList = opts.blockList;\n    _store_store__WEBPACK_IMPORTED_MODULE_0__.store.limitRate = opts.limitRate;\n    _store_store__WEBPACK_IMPORTED_MODULE_0__.store.origin = opts.origin || origin;\n};\n\n\n//# sourceURL=webpack:///./node_modules/@emailjs/browser/es/methods/init/init.js?\n}");

/***/ }),

/***/ "./node_modules/@emailjs/browser/es/methods/send/send.js":
/*!***************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/methods/send/send.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   send: () => (/* binding */ send)\n/* harmony export */ });\n/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store/store */ \"./node_modules/@emailjs/browser/es/store/store.js\");\n/* harmony import */ var _api_sendPost__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api/sendPost */ \"./node_modules/@emailjs/browser/es/api/sendPost.js\");\n/* harmony import */ var _utils_buildOptions_buildOptions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/buildOptions/buildOptions */ \"./node_modules/@emailjs/browser/es/utils/buildOptions/buildOptions.js\");\n/* harmony import */ var _utils_validateParams_validateParams__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/validateParams/validateParams */ \"./node_modules/@emailjs/browser/es/utils/validateParams/validateParams.js\");\n/* harmony import */ var _utils_validateTemplateParams_validateTemplateParams__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/validateTemplateParams/validateTemplateParams */ \"./node_modules/@emailjs/browser/es/utils/validateTemplateParams/validateTemplateParams.js\");\n/* harmony import */ var _utils_isHeadless_isHeadless__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/isHeadless/isHeadless */ \"./node_modules/@emailjs/browser/es/utils/isHeadless/isHeadless.js\");\n/* harmony import */ var _errors_headlessError_headlessError__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../errors/headlessError/headlessError */ \"./node_modules/@emailjs/browser/es/errors/headlessError/headlessError.js\");\n/* harmony import */ var _utils_isBlockedValueInParams_isBlockedValueInParams__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/isBlockedValueInParams/isBlockedValueInParams */ \"./node_modules/@emailjs/browser/es/utils/isBlockedValueInParams/isBlockedValueInParams.js\");\n/* harmony import */ var _errors_blockedEmailError_blockedEmailError__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../errors/blockedEmailError/blockedEmailError */ \"./node_modules/@emailjs/browser/es/errors/blockedEmailError/blockedEmailError.js\");\n/* harmony import */ var _utils_isLimitRateHit_isLimitRateHit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/isLimitRateHit/isLimitRateHit */ \"./node_modules/@emailjs/browser/es/utils/isLimitRateHit/isLimitRateHit.js\");\n/* harmony import */ var _errors_limitRateError_limitRateError__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../errors/limitRateError/limitRateError */ \"./node_modules/@emailjs/browser/es/errors/limitRateError/limitRateError.js\");\n\n\n\n\n\n\n\n\n\n\n\n/**\n * Send a template to the specific EmailJS service\n * @param {string} serviceID - the EmailJS service ID\n * @param {string} templateID - the EmailJS template ID\n * @param {object} templateParams - the template params, what will be set to the EmailJS template\n * @param {object} options - the EmailJS SDK config options\n * @returns {Promise<EmailJSResponseStatus>}\n */\nconst send = async (serviceID, templateID, templateParams, options) => {\n    const opts = (0,_utils_buildOptions_buildOptions__WEBPACK_IMPORTED_MODULE_2__.buildOptions)(options);\n    const publicKey = opts.publicKey || _store_store__WEBPACK_IMPORTED_MODULE_0__.store.publicKey;\n    const blockHeadless = opts.blockHeadless || _store_store__WEBPACK_IMPORTED_MODULE_0__.store.blockHeadless;\n    const storageProvider = opts.storageProvider || _store_store__WEBPACK_IMPORTED_MODULE_0__.store.storageProvider;\n    const blockList = { ..._store_store__WEBPACK_IMPORTED_MODULE_0__.store.blockList, ...opts.blockList };\n    const limitRate = { ..._store_store__WEBPACK_IMPORTED_MODULE_0__.store.limitRate, ...opts.limitRate };\n    if (blockHeadless && (0,_utils_isHeadless_isHeadless__WEBPACK_IMPORTED_MODULE_5__.isHeadless)(navigator)) {\n        return Promise.reject((0,_errors_headlessError_headlessError__WEBPACK_IMPORTED_MODULE_6__.headlessError)());\n    }\n    (0,_utils_validateParams_validateParams__WEBPACK_IMPORTED_MODULE_3__.validateParams)(publicKey, serviceID, templateID);\n    (0,_utils_validateTemplateParams_validateTemplateParams__WEBPACK_IMPORTED_MODULE_4__.validateTemplateParams)(templateParams);\n    if (templateParams && (0,_utils_isBlockedValueInParams_isBlockedValueInParams__WEBPACK_IMPORTED_MODULE_7__.isBlockedValueInParams)(blockList, templateParams)) {\n        return Promise.reject((0,_errors_blockedEmailError_blockedEmailError__WEBPACK_IMPORTED_MODULE_8__.blockedEmailError)());\n    }\n    if (await (0,_utils_isLimitRateHit_isLimitRateHit__WEBPACK_IMPORTED_MODULE_9__.isLimitRateHit)(location.pathname, limitRate, storageProvider)) {\n        return Promise.reject((0,_errors_limitRateError_limitRateError__WEBPACK_IMPORTED_MODULE_10__.limitRateError)());\n    }\n    const params = {\n        lib_version: '4.4.1',\n        user_id: publicKey,\n        service_id: serviceID,\n        template_id: templateID,\n        template_params: templateParams,\n    };\n    return (0,_api_sendPost__WEBPACK_IMPORTED_MODULE_1__.sendPost)('/api/v1.0/email/send', JSON.stringify(params), {\n        'Content-type': 'application/json',\n    });\n};\n\n\n//# sourceURL=webpack:///./node_modules/@emailjs/browser/es/methods/send/send.js?\n}");

/***/ }),

/***/ "./node_modules/@emailjs/browser/es/methods/sendForm/sendForm.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/methods/sendForm/sendForm.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   sendForm: () => (/* binding */ sendForm)\n/* harmony export */ });\n/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store/store */ \"./node_modules/@emailjs/browser/es/store/store.js\");\n/* harmony import */ var _api_sendPost__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api/sendPost */ \"./node_modules/@emailjs/browser/es/api/sendPost.js\");\n/* harmony import */ var _utils_buildOptions_buildOptions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/buildOptions/buildOptions */ \"./node_modules/@emailjs/browser/es/utils/buildOptions/buildOptions.js\");\n/* harmony import */ var _utils_validateForm_validateForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/validateForm/validateForm */ \"./node_modules/@emailjs/browser/es/utils/validateForm/validateForm.js\");\n/* harmony import */ var _utils_validateParams_validateParams__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/validateParams/validateParams */ \"./node_modules/@emailjs/browser/es/utils/validateParams/validateParams.js\");\n/* harmony import */ var _utils_isHeadless_isHeadless__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/isHeadless/isHeadless */ \"./node_modules/@emailjs/browser/es/utils/isHeadless/isHeadless.js\");\n/* harmony import */ var _errors_headlessError_headlessError__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../errors/headlessError/headlessError */ \"./node_modules/@emailjs/browser/es/errors/headlessError/headlessError.js\");\n/* harmony import */ var _utils_isBlockedValueInParams_isBlockedValueInParams__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/isBlockedValueInParams/isBlockedValueInParams */ \"./node_modules/@emailjs/browser/es/utils/isBlockedValueInParams/isBlockedValueInParams.js\");\n/* harmony import */ var _errors_blockedEmailError_blockedEmailError__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../errors/blockedEmailError/blockedEmailError */ \"./node_modules/@emailjs/browser/es/errors/blockedEmailError/blockedEmailError.js\");\n/* harmony import */ var _utils_isLimitRateHit_isLimitRateHit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/isLimitRateHit/isLimitRateHit */ \"./node_modules/@emailjs/browser/es/utils/isLimitRateHit/isLimitRateHit.js\");\n/* harmony import */ var _errors_limitRateError_limitRateError__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../errors/limitRateError/limitRateError */ \"./node_modules/@emailjs/browser/es/errors/limitRateError/limitRateError.js\");\n\n\n\n\n\n\n\n\n\n\n\nconst findHTMLForm = (form) => {\n    return typeof form === 'string' ? document.querySelector(form) : form;\n};\n/**\n * Send a form the specific EmailJS service\n * @param {string} serviceID - the EmailJS service ID\n * @param {string} templateID - the EmailJS template ID\n * @param {string | HTMLFormElement} form - the form element or selector\n * @param {object} options - the EmailJS SDK config options\n * @returns {Promise<EmailJSResponseStatus>}\n */\nconst sendForm = async (serviceID, templateID, form, options) => {\n    const opts = (0,_utils_buildOptions_buildOptions__WEBPACK_IMPORTED_MODULE_2__.buildOptions)(options);\n    const publicKey = opts.publicKey || _store_store__WEBPACK_IMPORTED_MODULE_0__.store.publicKey;\n    const blockHeadless = opts.blockHeadless || _store_store__WEBPACK_IMPORTED_MODULE_0__.store.blockHeadless;\n    const storageProvider = _store_store__WEBPACK_IMPORTED_MODULE_0__.store.storageProvider || opts.storageProvider;\n    const blockList = { ..._store_store__WEBPACK_IMPORTED_MODULE_0__.store.blockList, ...opts.blockList };\n    const limitRate = { ..._store_store__WEBPACK_IMPORTED_MODULE_0__.store.limitRate, ...opts.limitRate };\n    if (blockHeadless && (0,_utils_isHeadless_isHeadless__WEBPACK_IMPORTED_MODULE_5__.isHeadless)(navigator)) {\n        return Promise.reject((0,_errors_headlessError_headlessError__WEBPACK_IMPORTED_MODULE_6__.headlessError)());\n    }\n    const currentForm = findHTMLForm(form);\n    (0,_utils_validateParams_validateParams__WEBPACK_IMPORTED_MODULE_4__.validateParams)(publicKey, serviceID, templateID);\n    (0,_utils_validateForm_validateForm__WEBPACK_IMPORTED_MODULE_3__.validateForm)(currentForm);\n    const formData = new FormData(currentForm);\n    if ((0,_utils_isBlockedValueInParams_isBlockedValueInParams__WEBPACK_IMPORTED_MODULE_7__.isBlockedValueInParams)(blockList, formData)) {\n        return Promise.reject((0,_errors_blockedEmailError_blockedEmailError__WEBPACK_IMPORTED_MODULE_8__.blockedEmailError)());\n    }\n    if (await (0,_utils_isLimitRateHit_isLimitRateHit__WEBPACK_IMPORTED_MODULE_9__.isLimitRateHit)(location.pathname, limitRate, storageProvider)) {\n        return Promise.reject((0,_errors_limitRateError_limitRateError__WEBPACK_IMPORTED_MODULE_10__.limitRateError)());\n    }\n    formData.append('lib_version', '4.4.1');\n    formData.append('service_id', serviceID);\n    formData.append('template_id', templateID);\n    formData.append('user_id', publicKey);\n    return (0,_api_sendPost__WEBPACK_IMPORTED_MODULE_1__.sendPost)('/api/v1.0/email/send-form', formData);\n};\n\n\n//# sourceURL=webpack:///./node_modules/@emailjs/browser/es/methods/sendForm/sendForm.js?\n}");

/***/ }),

/***/ "./node_modules/@emailjs/browser/es/models/EmailJSResponseStatus.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/models/EmailJSResponseStatus.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   EmailJSResponseStatus: () => (/* binding */ EmailJSResponseStatus)\n/* harmony export */ });\nclass EmailJSResponseStatus {\n    constructor(_status = 0, _text = 'Network Error') {\n        this.status = _status;\n        this.text = _text;\n    }\n}\n\n\n//# sourceURL=webpack:///./node_modules/@emailjs/browser/es/models/EmailJSResponseStatus.js?\n}");

/***/ }),

/***/ "./node_modules/@emailjs/browser/es/store/store.js":
/*!*********************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/store/store.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   store: () => (/* binding */ store)\n/* harmony export */ });\n/* harmony import */ var _utils_createWebStorage_createWebStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/createWebStorage/createWebStorage */ \"./node_modules/@emailjs/browser/es/utils/createWebStorage/createWebStorage.js\");\n\nconst store = {\n    origin: 'https://api.emailjs.com',\n    blockHeadless: false,\n    storageProvider: (0,_utils_createWebStorage_createWebStorage__WEBPACK_IMPORTED_MODULE_0__.createWebStorage)(),\n};\n\n\n//# sourceURL=webpack:///./node_modules/@emailjs/browser/es/store/store.js?\n}");

/***/ }),

/***/ "./node_modules/@emailjs/browser/es/utils/buildOptions/buildOptions.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/utils/buildOptions/buildOptions.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   buildOptions: () => (/* binding */ buildOptions)\n/* harmony export */ });\nconst buildOptions = (options) => {\n    if (!options)\n        return {};\n    // support compatibility with SDK v3\n    if (typeof options === 'string') {\n        return {\n            publicKey: options,\n        };\n    }\n    // eslint-disable-next-line @typescript-eslint/no-base-to-string\n    if (options.toString() === '[object Object]') {\n        return options;\n    }\n    return {};\n};\n\n\n//# sourceURL=webpack:///./node_modules/@emailjs/browser/es/utils/buildOptions/buildOptions.js?\n}");

/***/ }),

/***/ "./node_modules/@emailjs/browser/es/utils/createWebStorage/createWebStorage.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/utils/createWebStorage/createWebStorage.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createWebStorage: () => (/* binding */ createWebStorage)\n/* harmony export */ });\nconst createWebStorage = () => {\n    if (typeof localStorage === 'undefined')\n        return;\n    return {\n        get: (key) => Promise.resolve(localStorage.getItem(key)),\n        set: (key, value) => Promise.resolve(localStorage.setItem(key, value)),\n        remove: (key) => Promise.resolve(localStorage.removeItem(key)),\n    };\n};\n\n\n//# sourceURL=webpack:///./node_modules/@emailjs/browser/es/utils/createWebStorage/createWebStorage.js?\n}");

/***/ }),

/***/ "./node_modules/@emailjs/browser/es/utils/isBlockedValueInParams/isBlockedValueInParams.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/utils/isBlockedValueInParams/isBlockedValueInParams.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   isBlockedValueInParams: () => (/* binding */ isBlockedValueInParams)\n/* harmony export */ });\n/* harmony import */ var _validateBlockListParams_validateBlockListParams__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../validateBlockListParams/validateBlockListParams */ \"./node_modules/@emailjs/browser/es/utils/validateBlockListParams/validateBlockListParams.js\");\n\nconst isBlockListDisabled = (options) => {\n    return !options.list?.length || !options.watchVariable;\n};\nconst getValue = (data, name) => {\n    return data instanceof FormData ? data.get(name) : data[name];\n};\nconst isBlockedValueInParams = (options, params) => {\n    if (isBlockListDisabled(options))\n        return false;\n    (0,_validateBlockListParams_validateBlockListParams__WEBPACK_IMPORTED_MODULE_0__.validateBlockListParams)(options.list, options.watchVariable);\n    const value = getValue(params, options.watchVariable);\n    if (typeof value !== 'string')\n        return false;\n    return options.list.includes(value);\n};\n\n\n//# sourceURL=webpack:///./node_modules/@emailjs/browser/es/utils/isBlockedValueInParams/isBlockedValueInParams.js?\n}");

/***/ }),

/***/ "./node_modules/@emailjs/browser/es/utils/isHeadless/isHeadless.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/utils/isHeadless/isHeadless.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   isHeadless: () => (/* binding */ isHeadless)\n/* harmony export */ });\nconst isHeadless = (navigator) => {\n    return navigator.webdriver || !navigator.languages || navigator.languages.length === 0;\n};\n\n\n//# sourceURL=webpack:///./node_modules/@emailjs/browser/es/utils/isHeadless/isHeadless.js?\n}");

/***/ }),

/***/ "./node_modules/@emailjs/browser/es/utils/isLimitRateHit/isLimitRateHit.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/utils/isLimitRateHit/isLimitRateHit.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   isLimitRateHit: () => (/* binding */ isLimitRateHit)\n/* harmony export */ });\n/* harmony import */ var _validateLimitRateParams_validateLimitRateParams__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../validateLimitRateParams/validateLimitRateParams */ \"./node_modules/@emailjs/browser/es/utils/validateLimitRateParams/validateLimitRateParams.js\");\n\nconst getLeftTime = async (id, throttle, storage) => {\n    const lastTime = Number((await storage.get(id)) || 0);\n    return throttle - Date.now() + lastTime;\n};\nconst isLimitRateHit = async (defaultID, options, storage) => {\n    if (!options.throttle || !storage) {\n        return false;\n    }\n    (0,_validateLimitRateParams_validateLimitRateParams__WEBPACK_IMPORTED_MODULE_0__.validateLimitRateParams)(options.throttle, options.id);\n    const id = options.id || defaultID;\n    const leftTime = await getLeftTime(id, options.throttle, storage);\n    if (leftTime > 0) {\n        return true;\n    }\n    await storage.set(id, Date.now().toString());\n    return false;\n};\n\n\n//# sourceURL=webpack:///./node_modules/@emailjs/browser/es/utils/isLimitRateHit/isLimitRateHit.js?\n}");

/***/ }),

/***/ "./node_modules/@emailjs/browser/es/utils/validateBlockListParams/validateBlockListParams.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/utils/validateBlockListParams/validateBlockListParams.js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   validateBlockListParams: () => (/* binding */ validateBlockListParams)\n/* harmony export */ });\nconst validateBlockListParams = (list, watchVariable) => {\n    if (!Array.isArray(list)) {\n        throw 'The BlockList list has to be an array';\n    }\n    if (typeof watchVariable !== 'string') {\n        throw 'The BlockList watchVariable has to be a string';\n    }\n};\n\n\n//# sourceURL=webpack:///./node_modules/@emailjs/browser/es/utils/validateBlockListParams/validateBlockListParams.js?\n}");

/***/ }),

/***/ "./node_modules/@emailjs/browser/es/utils/validateForm/validateForm.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/utils/validateForm/validateForm.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   validateForm: () => (/* binding */ validateForm)\n/* harmony export */ });\nconst validateForm = (form) => {\n    if (!form || form.nodeName !== 'FORM') {\n        throw 'The 3rd parameter is expected to be the HTML form element or the style selector of the form';\n    }\n};\n\n\n//# sourceURL=webpack:///./node_modules/@emailjs/browser/es/utils/validateForm/validateForm.js?\n}");

/***/ }),

/***/ "./node_modules/@emailjs/browser/es/utils/validateLimitRateParams/validateLimitRateParams.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/utils/validateLimitRateParams/validateLimitRateParams.js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   validateLimitRateParams: () => (/* binding */ validateLimitRateParams)\n/* harmony export */ });\nconst validateLimitRateParams = (throttle, id) => {\n    if (typeof throttle !== 'number' || throttle < 0) {\n        throw 'The LimitRate throttle has to be a positive number';\n    }\n    if (id && typeof id !== 'string') {\n        throw 'The LimitRate ID has to be a non-empty string';\n    }\n};\n\n\n//# sourceURL=webpack:///./node_modules/@emailjs/browser/es/utils/validateLimitRateParams/validateLimitRateParams.js?\n}");

/***/ }),

/***/ "./node_modules/@emailjs/browser/es/utils/validateParams/validateParams.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/utils/validateParams/validateParams.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   validateParams: () => (/* binding */ validateParams)\n/* harmony export */ });\nconst validateParams = (publicKey, serviceID, templateID) => {\n    if (!publicKey || typeof publicKey !== 'string') {\n        throw 'The public key is required. Visit https://dashboard.emailjs.com/admin/account';\n    }\n    if (!serviceID || typeof serviceID !== 'string') {\n        throw 'The service ID is required. Visit https://dashboard.emailjs.com/admin';\n    }\n    if (!templateID || typeof templateID !== 'string') {\n        throw 'The template ID is required. Visit https://dashboard.emailjs.com/admin/templates';\n    }\n};\n\n\n//# sourceURL=webpack:///./node_modules/@emailjs/browser/es/utils/validateParams/validateParams.js?\n}");

/***/ }),

/***/ "./node_modules/@emailjs/browser/es/utils/validateTemplateParams/validateTemplateParams.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/utils/validateTemplateParams/validateTemplateParams.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   validateTemplateParams: () => (/* binding */ validateTemplateParams)\n/* harmony export */ });\nconst validateTemplateParams = (templateParams) => {\n    // eslint-disable-next-line @typescript-eslint/no-base-to-string\n    if (templateParams && templateParams.toString() !== '[object Object]') {\n        throw 'The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/';\n    }\n};\n\n\n//# sourceURL=webpack:///./node_modules/@emailjs/browser/es/utils/validateTemplateParams/validateTemplateParams.js?\n}");

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