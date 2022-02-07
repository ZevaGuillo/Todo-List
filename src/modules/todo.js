import Modal from "./modal";
export default class Todo {
  constructor(nameTodo, project) {
    this.project = project;
    this.nameTodo = nameTodo;
    this.description = "";
    this.clickEdit;
    this.modal = new Modal("modal-todo-edit", "modal-container-todo-edit");
    this.saveTodoButton = document.getElementById("form-save-todo-btn");
    this.saveTodoButton.addEventListener("click", (e) => {
      this.saveTodo(e);
      this.project.reloadTodoList(this.project.nameProject);
      this.modal.modalClose();
    });
  }

  renderTodo() {
    let div = document.createElement("div");
    div.classList.add("todo");
    div.innerHTML = `
        <div class="todo-content">
          <h3>${this.nameTodo}</h3>
          <p>${this.description}</p>
        </div>
      `;
    let divButtons = document.createElement("div");

    divButtons.appendChild(this.createCheckButton());
    divButtons.appendChild(this.createEditButton());
    divButtons.appendChild(this.createDeleteButton());
    div.appendChild(divButtons);

    return div;
  }

  createCheckButton() {
    let i = document.createElement("i");
    i.classList.add("fas", "fa-check-double");
    i.addEventListener("click", (e) => {
      e.target.parentNode.parentNode.classList.toggle("check");
    });
    return i;
  }

  createEditButton() {
    let i = document.createElement("i");
    i.classList.add("fas", "fa-edit");
    i.addEventListener("click", (e) => {
      this.editTodo(e);
    });
    return i;
  }

  createDeleteButton() {
    let i = document.createElement("i");
    i.classList.add("fas", "fa-trash");
    i.addEventListener("click", (e) => {
      this.project.todosList.splice(this.project.todosList.indexOf(), 1);
    });
    return i;
  }

  editTodo(e) {
    this.modal.modalOpen();
    let inputs = this.takeInputs();

    this.clickEdit =
      e.target.parentNode.parentNode.children[0].children[0].textContent;
    inputs[0].value = this.nameTodo;
    inputs[1].value = this.description;
  }

  takeInputs() {
    let elemts = this.modal.modalForm.children[0];
    let inputs = [];
    for (let ele of elemts) {
      if (ele.classList.toString() === "field") {
        inputs.push(ele);
      }
    }

    return inputs;
  }

  saveTodo(e) {
    if (this.clickEdit === this.nameTodo) {
      let inputs = this.takeInputs();

      this.nameTodo = inputs[0].value;
      this.description = inputs[1].value;
    }
  }
}
