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
        <p>>${this.description}</p>
        <i class="fas fa-check-double"></i>
        <i class="fas fa-edit"></i>
        <i class="fas fa-trash"></i>
      `;
    return div;
  }
}
