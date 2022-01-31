import Modal from "./modal";
export default class Project {
  constructor(nameProject) {
    this.nameProject = nameProject;
    this.todosList = [];
    this.contentElement = document.getElementById("main");
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
      this.contentElement.textContent = "";
      let div = document.createElement("h2");
      div.textContent = this.nameProject;
      this.contentElement.appendChild(div);
      this.contentElement.appendChild(this.renderAddTodoButton());
      this.contentElement.appendChild(this.renderTodoList());
    });
    return div;
  }

  renderAddTodoButton() {
    let div = document.createElement("div");
    div.classList.add("add-todo");
    div.innerHTML = `<button class="button">Add Todo</button>`;
    let modal = new Modal("modal-todo", "modal-container-todo");
    div.addEventListener("click", (e) => {
      modal.modalOpen();
    });

    return div;
  }

  renderTodoList() {
    let div = document.createElement("div");
    div.classList.add("todos");
    div.innerHTML = `
      <div class="todo">
      <h3>Nombre</h3>
      <p>Descripcion</p>
      <i class="fas fa-check-double"></i>
      <i class="fas fa-edit"></i>
      <i class="fas fa-trash"></i>
      </div>`;
    return div;
  }
}
