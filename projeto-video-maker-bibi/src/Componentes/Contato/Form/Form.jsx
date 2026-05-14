import React from "react";
import Input from "./Input";
import Button from "../../Button";
import Titulo from "../../Titulo";
import useForm from "../../../Hooks/useForm";
import TextArea from "./TextArea";
import emailjs from "@emailjs/browser";

const Form = () => {
  const userTelefone = useForm("telefone");
  const userEmail = useForm("email");
  const userNome = useForm("nome");
  const userTextArea = useForm("textArea");
  const userSobreNome = useForm("sobrenome");
  const [loading, setLoading] = React.useState(false);

  function handlePhoneChange({ target }) {
    const value = target.value;
    const cleanPhoneFormated = cleanPhone(value);
    userTelefone.setValue(cleanPhoneFormated);
  }

  function cleanPhone(phoneNumber) {
    let cleanPhoneNumber = phoneNumber.replace(/\D/g, "");
    cleanPhoneNumber = cleanPhoneNumber.slice(0, 11);

    const ddd = cleanPhoneNumber.slice(0, 2);
    const firstFiveNumbers = cleanPhoneNumber.slice(2, 7);
    const lastFourNumbers = cleanPhoneNumber.slice(7, 11);

    let cleanValueFormated = "";
    if (cleanPhoneNumber.length > 0) {
      cleanValueFormated += `(${ddd}`;
    }

    if (cleanPhoneNumber.length >= 2) {
      cleanValueFormated += `)`;
    }

    if (cleanPhoneNumber.length > 2) {
      cleanValueFormated += ` ${firstFiveNumbers}`;
    }

    if (cleanPhoneNumber.length > 7) {
      cleanValueFormated += `-${lastFourNumbers}`;
    }

    return cleanValueFormated;
  }

  React.useEffect(() => {
    emailjs.init("HCx6rMs_iWtgOYGdG");
  }, []);

  function clearValue(...userInput) {
    userInput.forEach((user) => user.setValue(""));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (
      userTelefone.validate() &&
      userEmail.validate() &&
      userNome.validate() &&
      userTextArea.validate()
    ) {
      setLoading(true);
      try {
        await emailjs.send("service_bx02iai", "template_fxdvbbi", {
          name: userNome.value,
          lastname: userSobreNome.value,
          email: userEmail.value,
          contact: userTelefone.value,
          message: userTextArea.value,
        });
        alert("formulário enviado com sucesso!");
        clearValue(
          userTelefone,
          userEmail,
          userNome,
          userSobreNome,
          userTextArea,
        );
      } catch (e) {
        alert(`Dados incorretos, ${e.message}`);
      } finally {
        setLoading(false);
      }
      return true;
    }
  }

  return (
    <section className="md:max-w-xl lg:max-w-xl 2xl:max-w-2xl md:mx-auto *:pr-4 *:pl-4">
      <div>
        <Titulo className="w-screen font-serif font-normal text-neutral-5 text-[clamp(2rem,5vw,4rem)] mb-2">
          Entre em contato!
        </Titulo>
        <p className="font-serif font-normal text-neutral-5 text-[clamp(0.875rem,3vw,1rem)] mb-4">
          Preencha o formulário abaixo, para que possamos trabalhar juntos.
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col xl:grid xl:grid-cols-2 text-form gap-2"
      >
        <Input
          {...userNome}
          label="Primeiro Nome"
          type="text"
          id="nome"
          name="nome"
          className="w-full py-3 bg-neutral-5 text-neutral-1 rounded-md border focus:border-red-2 focus:bg-neutral-4 focus:ring-2 focus:ring-red-2 hover:bg-neutral-4 focus:outline-none"
        />
        <Input
          {...userSobreNome}
          label="Sobrenome"
          type="text"
          id="sobrenome"
          name="sobrenome"
          className="w-full py-3 bg-neutral-5 text-neutral-1 rounded-md border focus:border-red-2 focus:bg-neutral-4 focus:ring-2 focus:ring-red-2 hover:bg-neutral-4 focus:outline-none"
        />
        <Input
          {...userEmail}
          label="Email"
          type="email"
          id="email"
          name="email"
          className="w-full py-3 bg-neutral-5 text-neutral-1 rounded-md border focus:border-red-2 focus:bg-neutral-4 focus:ring-2 focus:ring-red-2 hover:bg-neutral-4 focus:outline-none"
        />
        <Input
          {...userTelefone}
          onChange={handlePhoneChange}
          placeholder="Ex: (DDD) 99999-9999"
          label="Telefone"
          type="text"
          id="phone"
          name="phone"
          className="w-full py-3 bg-neutral-5 text-neutral-1 rounded-md border focus:border-red-2 focus:bg-neutral-4 focus:ring-2 focus:ring-red-2 hover:bg-neutral-4 focus:outline-none placeholder:pl-2"
        />
        <TextArea
          {...userTextArea}
          label="Conte-nos sobre o seu projeto"
          type="text"
          id="textarea"
          name="textarea"
        />
        {loading ? (
          <Button
            disabled
            className="w-full bg-linear-to-t from-red to-red-2 text-[clamp(1.25rem,4vw,1.875rem)] text-nuetral-5 uppercase py-2 rounded-xs mt-4 col-span-2 cursor-wait"
          >
            Carregando...
          </Button>
        ) : (
          <Button className="w-full bg-linear-to-t from-red to-red-2 text-[clamp(1.25rem,4vw,1.875rem)] text-nuetral-5 uppercase py-2 rounded-xs mt-4 col-span-2 cursor-pointer">
            Enviar
          </Button>
        )}
      </form>
    </section>
  );
};

export default Form;
