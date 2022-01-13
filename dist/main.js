/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const closeModal = document.getElementById(\"close\");\r\nconst newProject = document.getElementById(\"newProject\");\r\nconst modal = document.getElementById(\"modal\");\r\nconst modalContainer = document.getElementById(\"modal-container\");\r\nconst searchBook = document.getElementById(\"search-book\");\r\n\r\n\r\nnewProject.addEventListener(\"click\", (e) => {\r\n  e.preventDefault();\r\n  modalOpen();\r\n});\r\n\r\nfunction modalOpen(){\r\n  modalContainer.style.opacity = \"1\";\r\n  modalContainer.style.visibility = \"visible\";\r\n  modal.classList.toggle(\"modal-close\");\r\n}\r\n\r\nfunction modalClose() {\r\n  modalContainer.style.opacity = \"0\";\r\n  modalContainer.style.visibility = \"hidden\";\r\n  modal.classList.toggle(\"modal-close\");\r\n  removeAlertForm();\r\n}\r\n\r\n\r\ncloseModal.addEventListener(\"click\", (e) => {\r\n  modalClose();\r\n});\r\n\r\nwindow.addEventListener(\"click\", (e) => {\r\n  if (e.target === modalContainer) {\r\n    modalClose();\r\n  }\r\n});\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;