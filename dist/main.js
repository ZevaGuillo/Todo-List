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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/view */ \"./src/modules/view.js\");\n\r\n\r\n(0,_modules_view__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/modal.js":
/*!******************************!*\
  !*** ./src/modules/modal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Modal)\n/* harmony export */ });\nclass Modal {\r\n  constructor(idModal, idModalContainer) {\r\n    this.modal = document.getElementById(idModal);\r\n    this.modalContainer = document.getElementById(idModalContainer);\r\n\r\n    this.closeModal = document.querySelector(`#${idModal} .close`);\r\n    this.closeModal.addEventListener(\"click\", (e) => {\r\n      this.modalClose();\r\n    });\r\n\r\n    window.addEventListener(\"click\", (e) => {\r\n      if (e.target === this.modalContainer) {\r\n        this.modalClose();\r\n      }\r\n    });\r\n\r\n    this.modalchildren = this.modal.children;\r\n    this.modalHeader = this.modalchildren[0];\r\n    this.modalForm = this.modalchildren[1];\r\n  }\r\n\r\n  formatModal() {\r\n    let formElements = this.modalForm.children[0];\r\n\r\n    for (let e of formElements) {\r\n      if (e.classList.toString() === \"field\") {\r\n        e.value = \"\";\r\n      }\r\n    }\r\n  }\r\n\r\n  modalOpen() {\r\n    this.modalContainer.style.opacity = \"1\";\r\n    this.modalContainer.style.visibility = \"visible\";\r\n    this.modal.classList.remove(\"modal-close\");\r\n  }\r\n\r\n  modalClose() {\r\n    this.modalContainer.style.opacity = \"0\";\r\n    this.modalContainer.style.visibility = \"hidden\";\r\n    this.modal.classList.add(\"modal-close\");\r\n    this.formatModal();\r\n    this.removeAlertForm();\r\n  }\r\n\r\n  alertForm() {\r\n    let div = document.createElement(\"div\");\r\n    div.classList.add(\"alert\");\r\n    div.innerText = \"Complete todos los campos\";\r\n\r\n    if (Array.from(this.modalchildren).length === 3) {\r\n      return;\r\n    } else {\r\n      this.modal.insertBefore(div, this.modalForm);\r\n    }\r\n  }\r\n\r\n  removeAlertForm() {\r\n    let div = this.modalchildren[1];\r\n    if (div !== undefined) {\r\n      if (div.textContent === \"Complete todos los campos\") {\r\n        this.modal.removeChild(div);\r\n      }\r\n    }\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://todo-list/./src/modules/modal.js?");

/***/ }),

/***/ "./src/modules/project.js":
/*!********************************!*\
  !*** ./src/modules/project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Project)\n/* harmony export */ });\n/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ \"./src/modules/modal.js\");\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ \"./src/modules/todo.js\");\n\r\n\r\nclass Project {\r\n  constructor(nameProject) {\r\n    this.nameProject = nameProject;\r\n    this.todosList = [];\r\n    this.contentElement = document.getElementById(\"main\");\r\n    this.modal = new _modal__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"modal-todo\", \"modal-container-todo\");\r\n\r\n    this.inputTodoName = document.getElementById(\"todo-name\");\r\n    this.inputTodoDescription = document.getElementById(\"todo-descripcion\");\r\n    this.buttonAddTodo = document.getElementById(\"form-add-todo-btn\");\r\n    this.buttonAddTodo.addEventListener(\"click\", (e) => {\r\n      if (this.validateForm()) {\r\n        if (this.contentElement.firstChild.textContent === nameProject) {\r\n          this.createTodo();\r\n          this.contentElement.appendChild(this.renderTodoList());\r\n        }\r\n      }\r\n    });\r\n  }\r\n\r\n  removeTodo() {}\r\n\r\n  renderProjectItem(class1, classFas) {\r\n    let div = document.createElement(\"div\");\r\n    div.classList.add(class1);\r\n    div.classList.add(\"menu-link\");\r\n    div.innerHTML = ` \r\n        <i class=\"fas ${classFas}\"></i>\r\n        <span class=\"link-text\">${this.nameProject}</span>\r\n        `;\r\n\r\n    div.addEventListener(\"click\", (e) => {\r\n      console.log(this.nameProject, this.todosList);\r\n      this.contentElement.textContent = \"\";\r\n      let h2 = document.createElement(\"h2\");\r\n      h2.textContent = this.nameProject;\r\n      this.contentElement.appendChild(h2);\r\n      this.contentElement.appendChild(this.renderAddTodoButton());\r\n      this.contentElement.appendChild(this.renderTodoList());\r\n    });\r\n    return div;\r\n  }\r\n\r\n  renderAddTodoButton() {\r\n    let div = document.createElement(\"div\");\r\n    div.classList.add(\"add-todo\");\r\n    div.innerHTML = `<button class=\"button\">Add Todo ${this.nameProject}</button>`;\r\n    div.addEventListener(\"click\", (e) => {\r\n      this.modal.modalOpen();\r\n    });\r\n\r\n    return div;\r\n  }\r\n\r\n  validateForm() {\r\n    if (this.inputTodoName.value === \"\") {\r\n      this.modal.alertForm();\r\n      return false;\r\n    }\r\n    return true;\r\n  }\r\n\r\n  createTodo() {\r\n    const newTodo = new _todo__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.inputTodoName.value);\r\n    newTodo.description = this.inputTodoDescription.value;\r\n    this.todosList.push(newTodo);\r\n  }\r\n\r\n  renderTodoList() {\r\n    let div = document.createElement(\"div\");\r\n    div.classList.add(\"todos\");\r\n\r\n    for (let todo of this.todosList) {\r\n      div.appendChild(todo.renderTodo());\r\n    }\r\n\r\n    return div;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://todo-list/./src/modules/project.js?");

/***/ }),

/***/ "./src/modules/todo.js":
/*!*****************************!*\
  !*** ./src/modules/todo.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Todo)\n/* harmony export */ });\n/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ \"./src/modules/modal.js\");\n\r\nclass Todo {\r\n  constructor(nameTodo) {\r\n    this.nameTodo = nameTodo;\r\n    this.description = \"\";\r\n    this.clickEdit;\r\n    this.modal = new _modal__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"modal-todo-edit\", \"modal-container-todo-edit\");\r\n    this.saveTodoButton = document.getElementById(\"form-save-todo-btn\");\r\n    this.saveTodoButton.addEventListener(\"click\", (e) => {\r\n      this.saveTodo(e);\r\n    });\r\n  }\r\n\r\n  renderTodo() {\r\n    let div = document.createElement(\"div\");\r\n    div.classList.add(\"todo\");\r\n    div.innerHTML = `\r\n        <h3>${this.nameTodo}</h3>\r\n        <p>${this.description}</p>\r\n        \r\n      `;\r\n    div.appendChild(this.createCheckButton());\r\n    div.appendChild(this.createEditButton());\r\n    div.appendChild(this.createDeleteButton());\r\n\r\n    return div;\r\n  }\r\n\r\n  createCheckButton() {\r\n    let i = document.createElement(\"i\");\r\n    i.classList.add(\"fas\", \"fa-check-double\");\r\n    i.addEventListener(\"click\", (e) => {\r\n      console.log(\"Hecho\");\r\n    });\r\n    return i;\r\n  }\r\n\r\n  createEditButton() {\r\n    let i = document.createElement(\"i\");\r\n    i.classList.add(\"fas\", \"fa-edit\");\r\n    i.addEventListener(\"click\", (e) => {\r\n      this.editTodo(e);\r\n    });\r\n    return i;\r\n  }\r\n\r\n  createDeleteButton() {\r\n    let i = document.createElement(\"i\");\r\n    i.classList.add(\"fas\", \"fa-trash\");\r\n    i.addEventListener(\"click\", (e) => {\r\n      console.log(\"eliminando\");\r\n    });\r\n    return i;\r\n  }\r\n\r\n  editTodo(e) {\r\n    this.modal.modalOpen();\r\n    let inputs = this.takeInputs();\r\n\r\n    this.clickEdit = e.target.parentNode.children[0].textContent;\r\n    inputs[0].value = this.nameTodo;\r\n    inputs[1].value = this.description;\r\n  }\r\n\r\n  takeInputs() {\r\n    let elemts = this.modal.modalForm.children[0];\r\n    let inputs = [];\r\n    for (let ele of elemts) {\r\n      if (ele.classList.toString() === \"field\") {\r\n        inputs.push(ele);\r\n      }\r\n    }\r\n\r\n    return inputs;\r\n  }\r\n\r\n  saveTodo(e) {\r\n    if (this.clickEdit === this.nameTodo) {\r\n      let inputs = this.takeInputs();\r\n\r\n      this.nameTodo = inputs[0].value;\r\n      this.description = inputs[1].value;\r\n    }\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://todo-list/./src/modules/todo.js?");

/***/ }),

/***/ "./src/modules/view.js":
/*!*****************************!*\
  !*** ./src/modules/view.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ \"./src/modules/modal.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ \"./src/modules/project.js\");\n\r\n\r\nconst listProjects = [];\r\nconst newProject = document.getElementById(\"newProject\");\r\n\r\nconst addProjectBtn = document.getElementById(\"form-addProject-btn\");\r\nconst nameProject = document.getElementById(\"nameProject\");\r\n/* Project */\r\nconst initialMenu = document.getElementById(\"initial-menu\");\r\nconst listProject = document.getElementById(\"list-project\");\r\n\r\n/* ----Init -----*/\r\n\r\nfunction initMenu() {\r\n  let todayProject = new _project__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"Today\");\r\n  initialMenu.appendChild(\r\n    todayProject.renderProjectItem(\"today\", \"fa-calendar-week\")\r\n  );\r\n\r\n  let somedayProject = new _project__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"Someday\");\r\n  initialMenu.appendChild(\r\n    somedayProject.renderProjectItem(\"someday\", \"fa-book\")\r\n  );\r\n\r\n  console.log(todayProject.todosList == somedayProject.todosList);\r\n}\r\n\r\n/* ---- MODAL ----- */\r\nconst modal = new _modal__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"modal\", \"modal-container\");\r\n\r\nnewProject.addEventListener(\"click\", (e) => {\r\n  e.preventDefault();\r\n  modal.modalOpen();\r\n});\r\n\r\naddProjectBtn.addEventListener(\"click\", (e) => {\r\n  console.log(nameProject.value);\r\n\r\n  if (nameProject.value === \"\") {\r\n    modal.alertForm();\r\n  } else {\r\n    let project = new _project__WEBPACK_IMPORTED_MODULE_1__[\"default\"](nameProject.value);\r\n    listProjects.push(project);\r\n\r\n    console.log(listProjects);\r\n    listProject.appendChild(project.renderProjectItem(\"project\", \"fa-tasks\"));\r\n    modal.modalClose();\r\n  }\r\n});\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initMenu);\r\n\n\n//# sourceURL=webpack://todo-list/./src/modules/view.js?");

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