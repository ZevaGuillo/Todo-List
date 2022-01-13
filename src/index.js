const closeModal = document.getElementById("close");
const newProject = document.getElementById("newProject");
const modal = document.getElementById("modal");
const modalContainer = document.getElementById("modal-container");
const searchBook = document.getElementById("search-book");


newProject.addEventListener("click", (e) => {
  e.preventDefault();
  modalOpen();
});

function modalOpen(){
  modalContainer.style.opacity = "1";
  modalContainer.style.visibility = "visible";
  modal.classList.toggle("modal-close");
}

function modalClose() {
  modalContainer.style.opacity = "0";
  modalContainer.style.visibility = "hidden";
  modal.classList.toggle("modal-close");
  removeAlertForm();
}


closeModal.addEventListener("click", (e) => {
  modalClose();
});

window.addEventListener("click", (e) => {
  if (e.target === modalContainer) {
    modalClose();
  }
});