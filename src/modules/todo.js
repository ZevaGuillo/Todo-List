import Modal from "./modal";
export default class Todo {
  constructor(nameTodo) {
    this.nameTodo = nameTodo;
    this.description = "";
  }

  renderTodo() {
    let div = document.createElement("div");
    div.classList.add("todo");
    div.innerHTML = `
        <h3>${this.nameTodo}</h3>
        <p>${this.description}</p>
        
      `;
    div.appendChild(this.createCheckButton());
    div.appendChild(this.createEditButton());
    div.appendChild(this.createDeleteButton());

    return div;
  }

  createCheckButton() {
    let i = document.createElement("i");
    i.classList.add("fas", "fa-check-double");
    i.addEventListener("click", (e) => {
      console.log("Hecho");
    });
    return i;
  }

  createEditButton() {
    let i = document.createElement("i");
    i.classList.add("fas", "fa-edit");
    i.addEventListener("click", (e) => {
      this.editTodo();
    });
    return i;
  }

  createDeleteButton() {
    let i = document.createElement("i");
    i.classList.add("fas", "fa-trash");
    i.addEventListener("click", (e) => {
      console.log("eliminando");
    });
    return i;
  }

  editTodo() {
    let modal = new Modal("modal-todo", "modal-container-todo");
    modal.modalOpen();
    let elemts = modal.modalForm.children[0];
    let inputs = [];
    for (let e of elemts) {
      if (e.classList.toString() === "field") {
        inputs.push(e);
      }
    }
    inputs[0].value = this.nameTodo;
    inputs[1].value = this.description;
  }
}
