import Project from "./project";
export default class Storage {
  static saveProject(project) {
    if (localStorage.getItem("projectList")) {
    }

    localStorage.setItem(project.nameProject, JSON.stringify(project));
  }

  static getProjects() {}
}
