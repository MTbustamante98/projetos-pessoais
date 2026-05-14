import React from "react";

const types = {
  email: {
    regex:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: "Preencha um email válido!",
  },
  telefone: {
    regex: /(\(?\d{2}\)?\s)?(\d{4,5}-\d{4})/,
    message: "Digite um telefone válido!",
  },
  nome: {
    regex: /^[A-Za-zà-úÀ-Ú\s]+$/,
    message: "Preencha um nome válido!",
  },
  sobrenome: {
    regex: /^[A-Za-zà-úÀ-Ú\s]+$/,
    message: "Preencha um sobrenome válido!",
  },
  textArea: {
    regex: /^.{20,300}$/,
    message: "O campo de texto deve possuir entre 20 e 300 caracteres.",
  },
};

const useForm = (type) => {
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState(null);

  function onChange({ target }) {
    if (error) validate(target.value);
    setValue(target.value);
  }

  function validate(value) {
    if (type === false) return true;

    if (value.length === 0) {
      setError("Preencha um valor");
    } else if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].message);
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  return {
    value,
    setValue,
    error,
    setError,
    onChange,
    validate: () => validate(value),
    onBlur: () => validate(value),
  };
};

export default useForm;
