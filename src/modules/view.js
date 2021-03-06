import image from "../images/background.svg";
import Storage from "./storage";
import Modal from "./modal";
import Project from "./project";

Storage.initLocalStorage();

const listProjects = convertListProject(Storage.getListProject());
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
  Storage.addProject(todayProject);
  let storageToday = Storage.getProject("Today");
  todayProject.todosList = storageToday.todosList;
  initialMenu.appendChild(
    todayProject.renderProjectItem("today", "fa-calendar-week")
  );

  let somedayProject = new Project("Someday");
  Storage.addProject(somedayProject);
  let storageSomeday = Storage.getProject("Someday");
  somedayProject.todosList = storageSomeday.todosList;
  initialMenu.appendChild(
    somedayProject.renderProjectItem("someday", "fa-book")
  );

  renderListProject();
}

function renderListProject() {
  for (let p of listProjects) {
    listProject.appendChild(p.renderProjectItem("project", "fa-tasks"));
  }
}

function convertListProject(list) {
  let plist = [];
  for (let p of list) {
    let project = new Project(p.nameProject);
    project.todosList = p.todosList;
    plist.push(project);
  }
  return plist;
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
    Storage.addProject(project);
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
