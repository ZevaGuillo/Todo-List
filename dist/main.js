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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Modal)\n/* harmony export */ });\nclass Modal {\r\n  constructor(idModal, idModalContainer) {\r\n    this.modal = document.getElementById(idModal);\r\n    this.modalContainer = document.getElementById(idModalContainer);\r\n\r\n    this.closeModal = document.querySelector(`#${idModal} .close`);\r\n    this.closeModal.addEventListener(\"click\", (e) => {\r\n      this.modalClose();\r\n    });\r\n\r\n    window.addEventListener(\"click\", (e) => {\r\n      if (e.target === this.modalContainer) {\r\n        this.modalClose();\r\n      }\r\n    });\r\n\r\n    this.modalchildren = this.modal.children;\r\n    this.modalHeader = this.modalchildren[0];\r\n    this.modalForm = this.modalchildren[1];\r\n  }\r\n\r\n  formatModal() {\r\n    let formElements = this.modalForm.children[0];\r\n\r\n    for (let e of formElements) {\r\n      if (e.classList.toString() === \"field\") {\r\n        e.value = \"\";\r\n      }\r\n    }\r\n  }\r\n\r\n  modalOpen() {\r\n    this.modalContainer.style.opacity = \"1\";\r\n    this.modalContainer.style.visibility = \"visible\";\r\n    this.modal.classList.remove(\"modal-close\");\r\n  }\r\n\r\n  modalClose() {\r\n    this.modalContainer.style.opacity = \"0\";\r\n    this.modalContainer.style.visibility = \"hidden\";\r\n    this.modal.classList.add(\"modal-close\");\r\n    this.removeAlertForm();\r\n    this.formatModal();\r\n  }\r\n\r\n  alertForm() {\r\n    let div = document.createElement(\"div\");\r\n    div.classList.add(\"alert\");\r\n    div.innerText = \"Complete todos los campos\";\r\n\r\n    if (Array.from(this.modalchildren).length === 3) {\r\n      return;\r\n    } else {\r\n      this.modal.appendChild(div);\r\n    }\r\n  }\r\n\r\n  removeAlertForm() {\r\n    let div = this.modalchildren[1];\r\n    if (div.className !== \"form-container\") {\r\n      if (div.textContent === \"Complete todos los campos\") {\r\n        this.modal.removeChild(div);\r\n      }\r\n    }\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://todo-list/./src/modules/modal.js?");

/***/ }),

/***/ "./src/modules/project.js":
/*!********************************!*\
  !*** ./src/modules/project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Project)\n/* harmony export */ });\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ \"./src/modules/storage.js\");\n/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal */ \"./src/modules/modal.js\");\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo */ \"./src/modules/todo.js\");\n\r\n\r\n\r\nclass Project {\r\n  constructor(nameProject) {\r\n    this.nameProject = nameProject;\r\n    this.todosList = [];\r\n    this.todosElement;\r\n    this.contentElement = document.getElementById(\"main\");\r\n    this.contentElement.addEventListener(\"click\", (e) => {\r\n      this.removeTodo(e.target);\r\n    });\r\n    this.modal = new _modal__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"modal-todo\", \"modal-container-todo\");\r\n\r\n    this.inputTodoName = document.getElementById(\"todo-name\");\r\n    this.inputTodoDescription = document.getElementById(\"todo-descripcion\");\r\n    this.buttonAddTodo = document.getElementById(\"form-add-todo-btn\");\r\n    this.buttonAddTodo.addEventListener(\"click\", (e) => {\r\n      if (this.contentElement.firstChild.textContent === nameProject) {\r\n        if (this.validateForm()) {\r\n          this.todosElement.appendChild(this.createTodo().renderTodo());\r\n          this.modal.modalClose();\r\n          _storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].saveProject(Object.assign(this));\r\n        }\r\n      }\r\n    });\r\n  }\r\n\r\n  removeTodo(element) {\r\n    if (this.contentElement.firstChild.textContent === this.nameProject) {\r\n      if (element.classList.contains(\"fa-trash\")) {\r\n        this.todosElement.removeChild(element.parentNode.parentNode);\r\n        let name =\r\n          element.parentNode.parentNode.children[0].children[0].textContent;\r\n\r\n        this.todosList = this.todosList.filter((x) => x.nameTodo !== name);\r\n        _storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].saveProject(this);\r\n      }\r\n    }\r\n  }\r\n\r\n  renderProjectItem(class1, classFas) {\r\n    let div = document.createElement(\"div\");\r\n    div.classList.add(class1);\r\n    div.classList.add(\"menu-link\");\r\n    div.innerHTML = ` \r\n        <i class=\"fas ${classFas}\"></i>\r\n        <span class=\"link-text\">${this.nameProject}</span>\r\n        `;\r\n\r\n    div.addEventListener(\"click\", (e) => {\r\n      this.contentElement.textContent = \"\";\r\n      let h2 = document.createElement(\"h2\");\r\n      h2.textContent = this.nameProject;\r\n      this.contentElement.appendChild(h2);\r\n      this.contentElement.appendChild(this.renderAddTodoButton());\r\n      this.contentElement.appendChild(this.renderTodoList());\r\n    });\r\n    return div;\r\n  }\r\n\r\n  renderAddTodoButton() {\r\n    let div = document.createElement(\"div\");\r\n    div.classList.add(\"add-todo\");\r\n    div.innerHTML = `<button class=\"button\">Add Todo</button>`;\r\n    div.addEventListener(\"click\", (e) => {\r\n      this.modal.modalOpen();\r\n    });\r\n\r\n    return div;\r\n  }\r\n\r\n  validateForm() {\r\n    if (this.inputTodoName.value === \"\") {\r\n      this.modal.alertForm();\r\n      return false;\r\n    }\r\n    return true;\r\n  }\r\n\r\n  createTodo() {\r\n    const newTodo = new _todo__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this.inputTodoName.value, this);\r\n    newTodo.description = this.inputTodoDescription.value;\r\n    this.todosList.push(newTodo);\r\n    return newTodo;\r\n  }\r\n\r\n  renderTodoList() {\r\n    this.todosElement = document.createElement(\"div\");\r\n    this.todosElement.classList.add(\"todos\");\r\n\r\n    for (let todo of this.todosList) {\r\n      let nTodo = new _todo__WEBPACK_IMPORTED_MODULE_2__[\"default\"](todo.nameTodo, this);\r\n      nTodo.description = todo.description;\r\n      this.todosElement.appendChild(nTodo.renderTodo());\r\n    }\r\n\r\n    return this.todosElement;\r\n  }\r\n\r\n  reloadTodoList(name) {\r\n    if (this.contentElement.firstChild.textContent === name) {\r\n      this.contentElement.removeChild(this.contentElement.lastChild);\r\n      this.contentElement.appendChild(this.renderTodoList());\r\n    }\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://todo-list/./src/modules/project.js?");

/***/ }),

/***/ "./src/modules/storage.js":
/*!********************************!*\
  !*** ./src/modules/storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Storage)\n/* harmony export */ });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/modules/project.js\");\n\r\nclass Storage {\r\n  static initLocalStorage() {\r\n    if (localStorage.length === 0) {\r\n      localStorage.setItem(\"projects\", JSON.stringify([\"Home\"]));\r\n    }\r\n  }\r\n\r\n  static addProject(project) {\r\n    let listProject = JSON.parse(localStorage.getItem(\"projects\"));\r\n    if (!listProject.includes(project.nameProject)) {\r\n      listProject.push(project.nameProject);\r\n      localStorage.setItem(\"projects\", JSON.stringify(listProject));\r\n      localStorage.setItem(project.nameProject, JSON.stringify(project));\r\n    }\r\n  }\r\n\r\n  static removeProject(project) {\r\n    let listProject = JSON.parse(localStorage.getItem(\"projects\"));\r\n    if (listProject.includes(project.nameProject)) {\r\n      listProject.splice(listProject.indexOf(project.nameProject), 1);\r\n      localStorage.removeItem(project.nameProject);\r\n    }\r\n  }\r\n\r\n  static saveProject(project) {\r\n    let listProject = JSON.parse(localStorage.getItem(\"projects\"));\r\n    if (!listProject.includes(project.nameProject)) {\r\n      listProject.push(project.nameProject);\r\n    }\r\n\r\n    localStorage.setItem(\"projects\", JSON.stringify(listProject));\r\n    localStorage.setItem(project.nameProject, JSON.stringify(project));\r\n  }\r\n\r\n  static getProject(nameProject) {\r\n    let listProject = JSON.parse(localStorage.getItem(\"projects\"));\r\n\r\n    if (listProject.includes(nameProject)) {\r\n      return JSON.parse(localStorage.getItem(nameProject));\r\n    }\r\n    return null;\r\n  }\r\n\r\n  static getListProject() {\r\n    let listProject = [];\r\n    let listProjectNames = [];\r\n    let listProjectStorage = JSON.parse(localStorage.getItem(\"projects\"));\r\n    listProjectNames = listProjectStorage.filter(\r\n      (x) => x !== \"Home\" && x !== \"Today\" && x !== \"Someday\"\r\n    );\r\n\r\n    for (let p of listProjectNames) {\r\n      listProject.push(JSON.parse(localStorage.getItem(p)));\r\n    }\r\n    return listProject;\r\n  }\r\n\r\n  static getTodoList(nameProject) {\r\n    let listProjectNames = JSON.parse(localStorage.getItem(\"projects\"));\r\n\r\n    if (listProjectNames.includes(nameProject)) {\r\n      let project = JSON.parse(localStorage.getItem(nameProject));\r\n    }\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://todo-list/./src/modules/storage.js?");

/***/ }),

/***/ "./src/modules/todo.js":
/*!*****************************!*\
  !*** ./src/modules/todo.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Todo)\n/* harmony export */ });\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ \"./src/modules/storage.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ \"./src/modules/project.js\");\n/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal */ \"./src/modules/modal.js\");\n\r\n\r\n\r\nclass Todo {\r\n  constructor(nameTodo, project) {\r\n    let object = JSON.parse(JSON.stringify(project));\r\n    this.project = new _project__WEBPACK_IMPORTED_MODULE_1__[\"default\"](object.nameProject);\r\n    this.project.todosList = object.todosList;\r\n    this.nameTodo = nameTodo;\r\n    this.description = \"\";\r\n    this.clickEdit;\r\n    this.context;\r\n    this.modal = new _modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\"modal-todo-edit\", \"modal-container-todo-edit\");\r\n    this.saveTodoButton = document.getElementById(\"form-save-todo-btn\");\r\n    this.saveTodoButton.addEventListener(\"click\", (e) => {\r\n      if (this.context === project.nameProject) {\r\n        this.saveTodo(e);\r\n\r\n        this.project.reloadTodoList(this.project.nameProject);\r\n        this.modal.modalClose();\r\n        _storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].saveProject(this.project);\r\n      }\r\n    });\r\n  }\r\n\r\n  renderTodo() {\r\n    let div = document.createElement(\"div\");\r\n    div.classList.add(\"todo\");\r\n    div.innerHTML = `\r\n        <div class=\"todo-content\">\r\n          <h3>${this.nameTodo}</h3>\r\n          <p>${this.description}</p>\r\n        </div>\r\n      `;\r\n    let divButtons = document.createElement(\"div\");\r\n\r\n    divButtons.appendChild(this.createCheckButton());\r\n    divButtons.appendChild(this.createEditButton());\r\n    divButtons.appendChild(this.createDeleteButton());\r\n    div.appendChild(divButtons);\r\n\r\n    return div;\r\n  }\r\n\r\n  createCheckButton() {\r\n    let i = document.createElement(\"i\");\r\n    i.classList.add(\"fas\", \"fa-check-double\");\r\n    i.addEventListener(\"click\", (e) => {\r\n      e.target.parentNode.parentNode.classList.toggle(\"check\");\r\n    });\r\n    return i;\r\n  }\r\n\r\n  createEditButton() {\r\n    let i = document.createElement(\"i\");\r\n    i.classList.add(\"fas\", \"fa-edit\");\r\n    i.addEventListener(\"click\", (e) => {\r\n      this.editTodo(e);\r\n    });\r\n    return i;\r\n  }\r\n\r\n  createDeleteButton() {\r\n    let i = document.createElement(\"i\");\r\n    i.classList.add(\"fas\", \"fa-trash\");\r\n    return i;\r\n  }\r\n\r\n  editTodo(e) {\r\n    this.modal.modalOpen();\r\n    let inputs = this.takeInputs();\r\n\r\n    this.context =\r\n      e.target.parentNode.parentNode.parentNode.parentNode.children[0].textContent;\r\n    this.clickEdit =\r\n      e.target.parentNode.parentNode.children[0].children[0].textContent;\r\n    inputs[0].value = this.nameTodo;\r\n    inputs[1].value = this.description;\r\n  }\r\n\r\n  takeInputs() {\r\n    let elemts = this.modal.modalForm.children[0];\r\n    let inputs = [];\r\n    for (let ele of elemts) {\r\n      if (ele.classList.toString() === \"field\") {\r\n        inputs.push(ele);\r\n      }\r\n    }\r\n    return inputs;\r\n  }\r\n\r\n  saveTodo(e) {\r\n    let lis = this.takeInputs();\r\n\r\n    this.project.todosList = _storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getProject(\r\n      this.project.nameProject\r\n    ).todosList;\r\n    let todoListproject = this.project.todosList.filter((x) => {\r\n      if (x.nameTodo === this.nameTodo) {\r\n        return x;\r\n      }\r\n    });\r\n\r\n    todoListproject[0].nameTodo = lis[0].value;\r\n    todoListproject[0].description = lis[1].value;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://todo-list/./src/modules/todo.js?");

/***/ }),

/***/ "./src/modules/view.js":
/*!*****************************!*\
  !*** ./src/modules/view.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_background_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/background.svg */ \"./src/images/background.svg\");\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage */ \"./src/modules/storage.js\");\n/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal */ \"./src/modules/modal.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project */ \"./src/modules/project.js\");\n\r\n\r\n\r\n\r\n\r\n_storage__WEBPACK_IMPORTED_MODULE_1__[\"default\"].initLocalStorage();\r\n\r\nconst listProjects = convertListProject(_storage__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getListProject());\r\nconst newProject = document.getElementById(\"newProject\");\r\n\r\nconst addProjectBtn = document.getElementById(\"form-addProject-btn\");\r\nconst nameProject = document.getElementById(\"nameProject\");\r\n/* Project */\r\nconst initialMenu = document.getElementById(\"initial-menu\");\r\nconst contentElement = document.getElementById(\"main\");\r\nconst homeElement = initialMenu.children[0];\r\nhomeElement.addEventListener(\"click\", (e) => {\r\n  renderHome();\r\n});\r\nconst listProject = document.getElementById(\"list-project\");\r\n/* Search */\r\nconst inputSearch = document.getElementById(\"input-search\");\r\ninputSearch.addEventListener(\"keyup\", filterTodo);\r\ninputSearch.addEventListener(\"blur\", (e) => (e.target.value = \"\"));\r\n\r\n/* ----Init -----*/\r\n\r\nfunction renderHome() {\r\n  contentElement.textContent = \"\";\r\n  let h2 = document.createElement(\"h2\");\r\n  h2.textContent = \"TO-DO List\";\r\n  let img = document.createElement(\"img\");\r\n  let url = _images_background_svg__WEBPACK_IMPORTED_MODULE_0__;\r\n  img.setAttribute(\"src\", url);\r\n  contentElement.appendChild(h2);\r\n  contentElement.appendChild(img);\r\n}\r\n\r\nfunction initMenu() {\r\n  renderHome();\r\n  let todayProject = new _project__WEBPACK_IMPORTED_MODULE_3__[\"default\"](\"Today\");\r\n  _storage__WEBPACK_IMPORTED_MODULE_1__[\"default\"].addProject(todayProject);\r\n  let storageToday = _storage__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getProject(\"Today\");\r\n  todayProject.todosList = storageToday.todosList;\r\n  initialMenu.appendChild(\r\n    todayProject.renderProjectItem(\"today\", \"fa-calendar-week\")\r\n  );\r\n\r\n  let somedayProject = new _project__WEBPACK_IMPORTED_MODULE_3__[\"default\"](\"Someday\");\r\n  _storage__WEBPACK_IMPORTED_MODULE_1__[\"default\"].addProject(somedayProject);\r\n  let storageSomeday = _storage__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getProject(\"Someday\");\r\n  somedayProject.todosList = storageSomeday.todosList;\r\n  initialMenu.appendChild(\r\n    somedayProject.renderProjectItem(\"someday\", \"fa-book\")\r\n  );\r\n\r\n  renderListProject();\r\n}\r\n\r\nfunction renderListProject() {\r\n  for (let p of listProjects) {\r\n    listProject.appendChild(p.renderProjectItem(\"project\", \"fa-tasks\"));\r\n  }\r\n}\r\n\r\nfunction convertListProject(list) {\r\n  let plist = [];\r\n  for (let p of list) {\r\n    let project = new _project__WEBPACK_IMPORTED_MODULE_3__[\"default\"](p.nameProject);\r\n    project.todosList = p.todosList;\r\n    plist.push(project);\r\n  }\r\n  return plist;\r\n}\r\n\r\n/* ---- MODAL ----- */\r\nconst modal = new _modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\"modal\", \"modal-container\");\r\n\r\nnewProject.addEventListener(\"click\", (e) => {\r\n  e.preventDefault();\r\n  modal.modalOpen();\r\n});\r\n\r\naddProjectBtn.addEventListener(\"click\", (e) => {\r\n  if (nameProject.value === \"\") {\r\n    modal.alertForm();\r\n  } else {\r\n    let project = new _project__WEBPACK_IMPORTED_MODULE_3__[\"default\"](nameProject.value);\r\n    listProjects.push(project);\r\n    _storage__WEBPACK_IMPORTED_MODULE_1__[\"default\"].addProject(project);\r\n    listProject.appendChild(project.renderProjectItem(\"project\", \"fa-tasks\"));\r\n    modal.modalClose();\r\n  }\r\n});\r\n\r\nfunction filterTodo(e) {\r\n  let filterValue = e.target.value;\r\n  let namesTodos = document.querySelectorAll(\".todo-content h3\");\r\n  Array.from(namesTodos).forEach((i) => {\r\n    if (\r\n      i.textContent\r\n        .toLocaleLowerCase()\r\n        .trim()\r\n        .indexOf(filterValue.toLocaleLowerCase()) === -1\r\n    ) {\r\n      i.parentNode.parentNode.style.display = \"none\";\r\n    } else {\r\n      i.parentNode.parentNode.style.display = \"\";\r\n    }\r\n  });\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initMenu);\r\n\n\n//# sourceURL=webpack://todo-list/./src/modules/view.js?");

/***/ }),

/***/ "./src/images/background.svg":
/*!***********************************!*\
  !*** ./src/images/background.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"10a9edda67b9434478c9.svg\";\n\n//# sourceURL=webpack://todo-list/./src/images/background.svg?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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