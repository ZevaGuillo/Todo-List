export default class Project {
  constructor(nameProject) {
    this.nameProject = nameProject;
    this.todosList = [];
  }

  addTodo() {}

  removeTodo() {}

  renderProjectItem() {
    let div = document.createElement("div");
    div.classList.add("project");
    div.classList.add("menu-link");
    div.innerHTML = ` 
        <i class="fas fa-tasks"></i>
        <span class="link-text">${this.nameProject}</span>
        `;

    return div;
  }



}
