import Storage from "./storage";
import Project from "./project";
import Modal from "./modal";
export default class Todo {
  constructor(nameTodo, project) {
    let object = JSON.parse(JSON.stringify(project));
    this.project = new Project(object.nameProject);
    this.project.todosList = object.todosList;
    this.nameTodo = nameTodo;
    this.description = "";
    this.clickEdit;
    this.context;
    this.modal = new Modal("modal-todo-edit", "modal-container-todo-edit");
    this.saveTodoButton = document.getElementById("form-save-todo-btn");
    this.saveTodoButton.addEventListener("click", (e) => {
      if (this.context === project.nameProject) {
        this.saveTodo(e);

        this.project.reloadTodoList(this.project.nameProject);
        this.modal.modalClose();
        Storage.saveProject(this.project);
      }
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
    return i;
  }

  editTodo(e) {
    this.modal.modalOpen();
    let inputs = this.takeInputs();

    this.context =
      e.target.parentNode.parentNode.parentNode.parentNode.children[0].textContent;
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
    let lis = this.takeInputs();

    this.project.todosList = Storage.getProject(
      this.project.nameProject
    ).todosList;
    let todoListproject = this.project.todosList.filter((x) => {
      if (x.nameTodo === this.nameTodo) {
        return x;
      }
    });

    todoListproject[0].nameTodo = lis[0].value;
    todoListproject[0].description = lis[1].value;
  }
}
