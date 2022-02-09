import Project from "./project";
export default class Storage {
  static initLocalStorage() {
    if (localStorage.length === 0) {
      localStorage.setItem("projects", JSON.stringify(["Home"]));
    }
  }

  static addProject(project) {
    let listProject = JSON.parse(localStorage.getItem("projects"));
    if (!listProject.includes(project.nameProject)) {
      listProject.push(project.nameProject);
      localStorage.setItem("projects", JSON.stringify(listProject));
      localStorage.setItem(project.nameProject, JSON.stringify(project));
    }
  }

  static removeProject(project) {
    let listProject = JSON.parse(localStorage.getItem("projects"));
    if (listProject.includes(project.nameProject)) {
      listProject.splice(listProject.indexOf(project.nameProject), 1);
      localStorage.removeItem(project.nameProject);
    }
  }

  static saveProject(project) {
    let listProject = JSON.parse(localStorage.getItem("projects"));
    if (!listProject.includes(project.nameProject)) {
      listProject.push(project.nameProject);
    }

    localStorage.setItem("projects", JSON.stringify(listProject));
    localStorage.setItem(project.nameProject, JSON.stringify(project));
  }

  static getProject(nameProject) {
    let listProject = JSON.parse(localStorage.getItem("projects"));

    if (listProject.includes(nameProject)) {
      return JSON.parse(localStorage.getItem(nameProject));
    }
    return null;
  }

  static getListProject() {
    let listProject = [];
    let listProjectNames = [];
    let listProjectStorage = JSON.parse(localStorage.getItem("projects"));
    listProjectNames = listProjectStorage.filter(
      (x) => x !== "Home" && x !== "Today" && x !== "Someday"
    );

    for (let p of listProjectNames) {
      listProject.push(JSON.parse(localStorage.getItem(p)));
    }
    return listProject;
  }

  static getTodoList(nameProject) {
    let listProjectNames = JSON.parse(localStorage.getItem("projects"));

    if (listProjectNames.includes(nameProject)) {
      let project = JSON.parse(localStorage.getItem(nameProject));
    }
  }
}
