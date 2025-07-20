import { openModal, closeModal, imgCloseModalAndConfigs } from "./modalFunction.js"
import { modalLinks, imgClose } from "./modalElements.js";

export default function registerModalEvents() {
  document.addEventListener("click", closeModal);
  modalLinks.forEach((el) => el.addEventListener("click", openModal));
  imgClose.forEach((el) => el.addEventListener("click", imgCloseModalAndConfigs));
}
