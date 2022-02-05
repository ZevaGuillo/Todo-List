import Modal from "./modal";
import Todo from "./todo";
export default class Project {
  constructor(nameProject) {
    this.nameProject = nameProject;
    this.todosList = [];
    this.todosElement;
    this.contentElement = document.getElementById("main");
    this.modal = new Modal("modal-todo", "modal-container-todo");

    this.inputTodoName = document.getElementById("todo-name");
    this.inputTodoDescription = document.getElementById("todo-descripcion");
    this.buttonAddTodo = document.getElementById("form-add-todo-btn");
    this.buttonAddTodo.addEventListener("click", (e) => {
      if (this.validateForm()) {
        if (this.contentElement.firstChild.textContent === nameProject) {
          this.todosElement.appendChild(this.createTodo().renderTodo());
        }
      }
    });
  }

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
    div.innerHTML = `<button class="button">Add Todo</button>`;
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
    const newTodo = new Todo(this.inputTodoName.value, this);
    newTodo.description = this.inputTodoDescription.value;
    this.todosList.push(newTodo);
    return newTodo;
  }

  renderTodoList() {
    this.todosElement = document.createElement("div");
    this.todosElement.classList.add("todos");

    for (let todo of this.todosList) {
      this.todosElement.appendChild(todo.renderTodo());
    }

    return this.todosElement;
  }

  reloadTodoList(name) {
    if (this.contentElement.firstChild.textContent === name) {
      this.contentElement.removeChild(this.contentElement.lastChild);
      this.contentElement.appendChild(this.renderTodoList());
    }
  }
}
