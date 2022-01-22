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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/view */ \"./src/modules/view.js\");\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/modal.js":
/*!******************************!*\
  !*** ./src/modules/modal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Modal)\n/* harmony export */ });\nclass Modal {\r\n  constructor(modal, modalContainer) {\r\n    this.modal = modal;\r\n    this.modalContainer = modalContainer;\r\n\r\n    this.modalchildren = this.modal.children;\r\n    this.modalHeader = modalContainer[0];\r\n    this.modalForm = modalContainer[1];\r\n  }\r\n\r\n  modalOpen() {\r\n    this.modalContainer.style.opacity = \"1\";\r\n    this.modalContainer.style.visibility = \"visible\";\r\n    this.modal.classList.toggle(\"modal-close\");\r\n  }\r\n\r\n  modalClose() {\r\n    this.modalContainer.style.opacity = \"0\";\r\n    this.modalContainer.style.visibility = \"hidden\";\r\n    this.modal.classList.toggle(\"modal-close\");\r\n    this.removeAlertForm();\r\n  }\r\n\r\n  alertForm() {\r\n    let div = document.createElement(\"div\");\r\n    div.classList.add(\"alert\");\r\n    div.innerText = \"Complete todos los campos\";\r\n\r\n    if (form.children[0].textContent === \"Complete todos los campos\") {\r\n      return;\r\n    }\r\n\r\n    if (Array.from(this.modalchildren).length === 3) {\r\n      console.log(Array.from(this.modalchildren).length);\r\n      return;\r\n    } else {\r\n      this.modal.insertBefore(div, this.modalHeader);\r\n    }\r\n  }\r\n\r\n  removeAlertForm() {\r\n    let div = this.modalchildren[2];\r\n    console.log(div);\r\n    if (div !== undefined) {\r\n      if (div.textContent === \"Complete todos los campos\") {\r\n        this.modal.removeChild(div);\r\n      }\r\n    }\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://todo-list/./src/modules/modal.js?");

/***/ }),

/***/ "./src/modules/project.js":
/*!********************************!*\
  !*** ./src/modules/project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Project)\n/* harmony export */ });\nclass Project {\r\n  constructor(nameProject) {\r\n    this.nameProject = nameProject;\r\n    this.todosList = [];\r\n  }\r\n\r\n  addTodo() {}\r\n\r\n  removeTodo() {}\r\n\r\n  renderProjectItem() {\r\n    let div = document.createElement(\"div\");\r\n    div.classList.add(\"project\");\r\n    div.classList.add(\"menu-link\");\r\n    div.innerHTML = ` \r\n        <i class=\"fas fa-tasks\"></i>\r\n        <span class=\"link-text\">${this.nameProject}</span>\r\n        `;\r\n\r\n    return div;\r\n  }\r\n\r\n\r\n\r\n}\r\n\n\n//# sourceURL=webpack://todo-list/./src/modules/project.js?");

/***/ }),

/***/ "./src/modules/view.js":
/*!*****************************!*\
  !*** ./src/modules/view.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ \"./src/modules/modal.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ \"./src/modules/project.js\");\n\r\n\r\nconst closeModal = document.getElementById(\"close\");\r\nconst newProject = document.getElementById(\"newProject\");\r\nconst modalNode = document.getElementById(\"modal\");\r\nconst modalContainer = document.getElementById(\"modal-container\");\r\nconst addProjectBtn = document.getElementById('form-addProject-btn');\r\nconst nameProject = document.getElementById('nameProject');\r\n/* Project */\r\nconst listProject = document.getElementById('list-project');\r\n\r\n\r\n/* ---- MODAL ----- */\r\nconst modal = new _modal__WEBPACK_IMPORTED_MODULE_0__[\"default\"](modalNode, modalContainer);\r\n\r\nnewProject.addEventListener(\"click\", (e) => {\r\n  e.preventDefault();\r\n  modal.modalOpen();\r\n});\r\n\r\ncloseModal.addEventListener(\"click\", (e) => {\r\n  modal.modalClose();\r\n});\r\n\r\nwindow.addEventListener(\"click\", (e) => {\r\n  if (e.target === modalContainer) {\r\n    modal.modalClose();\r\n  }\r\n});\r\n\r\naddProjectBtn.addEventListener('click',(e)=>{\r\n    console.log(nameProject.value)\r\n   \r\n\r\n    if(nameProject.value === ''){\r\n    \r\n        modal.alertForm();\r\n    }else{\r\n        \r\n        let project = new _project__WEBPACK_IMPORTED_MODULE_1__[\"default\"](nameProject.value);\r\n        console.log(project);\r\n        listProject.appendChild(project.renderProjectItem());\r\n        modal.modalClose();\r\n    }\r\n})\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/modules/view.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;