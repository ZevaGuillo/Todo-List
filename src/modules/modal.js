export default class Modal {
  constructor(modal, modalContainer) {
    this.modal = modal;
    this.modalContainer = modalContainer;

    this.modalchildren = this.modal.children;
    this.modalHeader = modalContainer[0];
    this.modalForm = modalContainer[1];
  }

  modalOpen() {
    this.modalContainer.style.opacity = "1";
    this.modalContainer.style.visibility = "visible";
    this.modal.classList.toggle("modal-close");
  }

  modalClose() {
    this.modalContainer.style.opacity = "0";
    this.modalContainer.style.visibility = "hidden";
    this.modal.classList.toggle("modal-close");
    this.removeAlertForm();
  }

  alertForm() {
    let div = document.createElement("div");
    div.classList.add("alert");
    div.innerText = "Complete todos los campos";

    if (form.children[0].textContent === "Complete todos los campos") {
      return;
    }

    if (Array.from(this.modalchildren).length === 3) {
      console.log(Array.from(this.modalchildren).length);
      return;
    } else {
      this.modal.insertBefore(div, this.modalHeader);
    }
  }

  removeAlertForm() {
    let div = this.modalchildren[2];
    if (div !== undefined) {
      if (div.textContent === "Complete todos los campos") {
        this.modal.removeChild(div);
      }
    }
  }
}
