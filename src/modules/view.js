import Modal from "./modal";
import Project from "./project";
const listProjects = [];
const newProject = document.getElementById("newProject");

const addProjectBtn = document.getElementById("form-addProject-btn");
const nameProject = document.getElementById("nameProject");
/* Project */
const initialMenu = document.getElementById("initial-menu");
const listProject = document.getElementById("list-project");

/* ----Init -----*/

function initMenu() {
  let todayProject = new Project("Today");
  initialMenu.appendChild(
    todayProject.renderProjectItem("today", "fa-calendar-week")
  );

  let somedayProject = new Project("Someday");
  initialMenu.appendChild(
    somedayProject.renderProjectItem("someday", "fa-book")
  );

  console.log(todayProject.todosList == somedayProject.todosList);
}

/* ---- MODAL ----- */
const modal = new Modal("modal", "modal-container");

newProject.addEventListener("click", (e) => {
  e.preventDefault();
  modal.modalOpen();
});

addProjectBtn.addEventListener("click", (e) => {
  console.log(nameProject.value);

  if (nameProject.value === "") {
    modal.alertForm();
  } else {
    let project = new Project(nameProject.value);
    listProjects.push(project);

    console.log(listProjects);
    listProject.appendChild(project.renderProjectItem("project", "fa-tasks"));
    modal.modalClose();
  }
});

export default initMenu;
