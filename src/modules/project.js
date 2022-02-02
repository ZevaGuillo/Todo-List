import Modal from "./modal";
import Todo from "./todo";
export default class Project {
  constructor(nameProject) {
    this.nameProject = nameProject;
    this.todosList = [];
    this.contentElement = document.getElementById("main");
    this.modal = new Modal("modal-todo", "modal-container-todo");

    this.inputTodoName = document.getElementById("todo-name");
    this.inputTodoDescription = document.getElementById("todo-descripcion");
    this.buttonAddTodo = document.getElementById("form-add-todo-btn");
    this.buttonAddTodo.addEventListener("click", (e) => {
      if (this.validateForm()) {
        if (this.contentElement.firstChild.textContent === nameProject) {
          this.createTodo();
          this.contentElement.appendChild(this.renderTodoList());
        }
      }
    });
  }

  addTodo() {}

  removeTodo() {}

  renderProjectItem(class1, classFas) {
    let div = document.createElement("div");
    div.classList.add(class1);
    div.classList.add("menu-link");
    div.innerHTML = ` 
        <i class="fas ${classFas}"></i>
        <span class="link-text">${this.nameProject}</span>
        `;

    div.addEventListener("click", (e) => {
      console.log(this.nameProject, this.todosList);
      this.contentElement.textContent = "";
      let h2 = document.createElement("h2");
      h2.textContent = this.nameProject;
      this.contentElement.appendChild(h2);
      this.contentElement.appendChild(this.renderAddTodoButton());
      this.contentElement.appendChild(this.renderTodoList());
    });
    return div;
  }

  renderAddTodoButton() {
    let div = document.createElement("div");
    div.classList.add("add-todo");
    div.innerHTML = `<button class="button">Add Todo ${this.nameProject}</button>`;
    div.addEventListener("click", (e) => {
      this.modal.modalOpen();
    });

    return div;
  }

  validateForm() {
    if (this.inputTodoName.value === "") {
      this.modal.alertForm();
      return false;
    }
    return true;
  }

  createTodo() {
    const newTodo = new Todo(this.inputTodoName.value);
    newTodo.description = this.inputTodoDescription.value;
    this.todosList.push(newTodo);
  }

  renderTodoList() {
    let div = document.createElement("div");
    div.classList.add("todos");

    for (let todo of this.todosList) {
      div.appendChild(todo.renderTodo());
    }

    return div;
  }
}
