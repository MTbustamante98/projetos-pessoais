import emailjs from "@emailjs/browser";
import { form, textarea, inputName } from "./elements";

const sendEmailJS = () => {
  emailjs.init("S7MmKe84IxrIf2XJK");

  function sendEmail(e) {
    e.preventDefault();

    const inputValue = inputName.value.trim();
    const textValue = textarea.value.trim();

    if (!textValue || !inputValue) return false;

    emailjs
      .send("service_4s0cv2p", "template_7aen7un", {
        name: inputValue,
        message: textValue,
      })
      .then(() => {
        alert("Sugestão enviada com sucesso!");
        form.reset();
      })
      .catch((error) => alert("Erro, tente novamente!", error));
  }

  if (form)
    form.addEventListener("submit", sendEmail);
};

export default sendEmailJS;
