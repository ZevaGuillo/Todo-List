import Modal from "./modal";
import Project from "./project";
const closeModal = document.getElementById("close");
const newProject = document.getElementById("newProject");
const modalNode = document.getElementById("modal");
const modalContainer = document.getElementById("modal-container");
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
}

/* ---- MODAL ----- */
const modal = new Modal(modalNode, modalContainer);

newProject.addEventListener("click", (e) => {
  e.preventDefault();
  modal.modalOpen();
});

closeModal.addEventListener("click", (e) => {
  modal.modalClose();
});

window.addEventListener("click", (e) => {
  if (e.target === modalContainer) {
    modal.modalClose();
  }
});

addProjectBtn.addEventListener("click", (e) => {
  console.log(nameProject.value);

  if (nameProject.value === "") {
    modal.alertForm();
  } else {
    let project = new Project(nameProject.value);
    console.log(project);
    listProject.appendChild(project.renderProjectItem("project", "fa-tasks"));
    modal.modalClose();
  }
});

export default initMenu;
