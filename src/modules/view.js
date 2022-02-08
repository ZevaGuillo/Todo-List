import image from "../images/background.svg";
import Storage from "./storage";
import Modal from "./modal";
import Project from "./project";
const listProjects = [];
const newProject = document.getElementById("newProject");

const addProjectBtn = document.getElementById("form-addProject-btn");
const nameProject = document.getElementById("nameProject");
/* Project */
const initialMenu = document.getElementById("initial-menu");
const contentElement = document.getElementById("main");
const homeElement = initialMenu.children[0];
homeElement.addEventListener("click", (e) => {
  renderHome();
});
const listProject = document.getElementById("list-project");
/* Search */
const inputSearch = document.getElementById("input-search");
inputSearch.addEventListener("keyup", filterTodo);
inputSearch.addEventListener("blur", (e) => (e.target.value = ""));

/* ----Init -----*/

function renderHome() {
  contentElement.textContent = "";
  let h2 = document.createElement("h2");
  h2.textContent = "TO-DO List";
  let img = document.createElement("img");
  let url = image;
  img.setAttribute("src", url);
  contentElement.appendChild(h2);
  contentElement.appendChild(img);
}

function initMenu() {
  renderHome();
  let todayProject = new Project("Today");
  initialMenu.appendChild(
    todayProject.renderProjectItem("today", "fa-calendar-week")
  );

  let somedayProject = new Project("Someday");
  initialMenu.appendChild(
    somedayProject.renderProjectItem("someday", "fa-book")
  );

  let newProject = new Project("Projects");
  listProject.appendChild(newProject.renderProjectItem("project", "fa-tasks"));
}

/* ---- MODAL ----- */
const modal = new Modal("modal", "modal-container");

newProject.addEventListener("click", (e) => {
  e.preventDefault();
  modal.modalOpen();
});

addProjectBtn.addEventListener("click", (e) => {
  if (nameProject.value === "") {
    modal.alertForm();
  } else {
    let project = new Project(nameProject.value);
    listProjects.push(project);
    Storage.saveProject(project);
    listProject.appendChild(project.renderProjectItem("project", "fa-tasks"));
    modal.modalClose();
  }
});

function filterTodo(e) {
  let filterValue = e.target.value;
  let namesTodos = document.querySelectorAll(".todo-content h3");
  Array.from(namesTodos).forEach((i) => {
    if (
      i.textContent
        .toLocaleLowerCase()
        .trim()
        .indexOf(filterValue.toLocaleLowerCase()) === -1
    ) {
      i.parentNode.parentNode.style.display = "none";
    } else {
      i.parentNode.parentNode.style.display = "";
    }
  });
}

export default initMenu;
