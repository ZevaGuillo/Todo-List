export default class Modal {
  constructor(idModal, idModalContainer) {
    this.modal = document.getElementById(idModal);
    this.modalContainer = document.getElementById(idModalContainer);

    this.closeModal = document.querySelector(`#${idModal} .close`);
    this.closeModal.addEventListener("click", (e) => {
      this.modalClose();
    });

    window.addEventListener("click", (e) => {
      if (e.target === this.modalContainer) {
        this.modalClose();
      }
    });

    this.modalchildren = this.modal.children;
    this.modalHeader = this.modalchildren[0];
    this.modalForm = this.modalchildren[1];
  }

  formatModal() {
    let formElements = this.modalForm.children[0];

    for (let e of formElements) {
      if (e.classList.toString() === "field") {
        e.value = "";
      }
    }
  }

  modalOpen() {
    this.modalContainer.style.opacity = "1";
    this.modalContainer.style.visibility = "visible";
    this.modal.classList.remove("modal-close");
  }

  modalClose() {
    this.modalContainer.style.opacity = "0";
    this.modalContainer.style.visibility = "hidden";
    this.modal.classList.add("modal-close");
    this.removeAlertForm();
    this.formatModal();
  }

  alertForm() {
    let div = document.createElement("div");
    div.classList.add("alert");
    div.innerText = "Complete todos los campos";

    if (Array.from(this.modalchildren).length === 3) {
      return;
    } else {
      this.modal.appendChild(div);
    }
  }

  removeAlertForm() {
    let div = this.modalchildren[1];
    if (div.className !== "form-container") {
      if (div.textContent === "Complete todos los campos") {
        this.modal.removeChild(div);
      }
    }
  }
}
