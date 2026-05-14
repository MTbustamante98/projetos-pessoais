import React from "react";

const TextoDigitacao = (frase) => {
  const [textoExibido, setTextoExibido] = React.useState("");
  const fraseCompletaRef = React.useRef(frase);
  const indiceRef = React.useRef(0);
  const intervalRef = React.useRef(null);

  React.useEffect(() => {
    indiceRef.current = 0;

    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      const indiceAtual = indiceRef.current;
      const frase = fraseCompletaRef.current;

      if (indiceAtual < frase.length) {
        const novoCaractere = frase[indiceAtual];
        setTextoExibido((prev) => prev + novoCaractere);
        indiceRef.current++;
      } else {
        clearInterval(intervalRef.current);
      }
    }, 80);

    return () => {
      clearInterval(intervalRef.current);
      indiceRef.current = 0;
    };
  }, [frase]);
  
  return textoExibido;
};

export default TextoDigitacao;
