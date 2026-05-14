import React from "react";
import Titulo from "../Titulo";
import Logo from "../../Logo";
import Button from "../Button";
import RedesSociais from "../RedesSociais";
import { Link } from "react-router-dom";

const PaginaConvidativa = () => {
  const [textoExibido, setTextoExibido] = React.useState("");
  const fraseCompletaRef = React.useRef("Bibiana Bustamante da Silva");
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
    }, 60);

    return () => {
      clearInterval(intervalRef.current);
      indiceRef.current = 0;
    };
  }, []);

  return (
    <section className="flex justify-center items-center lg:grid lg:grid-cols-[1fr_1fr] min-h-[95vh]">
      <div className="flex flex-col items-center gap-4 lg:w-180 lg:col-start-2 lg:place-self-center 2xl:mr-50 xl:mr-25">
        <Titulo className="text-[2.5rem] xl:text-[4rem] lg:text-[3rem] font-semibold italic font-display text-white tracking-wide uppercase">
          {textoExibido}
        </Titulo>
        <p className="font-sans uppercase text-[1rem] xl:text-[1.25rem] text-white">
          Filmmaker/Director
        </p>
        <Logo />
        <Link to="/home">
          <Button className="py-3 px-5 bg-white text-red-5 rounded-[0.313rem] uppercase font-sans text-lg font-semibold cursor-pointer mt-4 hover:bg-[rgba(0,0,0,0.9)] hover:text-white border hover:border-red lg:py-4 lg:px-8">
            Acessar website
          </Button>
        </Link>
        <RedesSociais />
      </div>
    </section>
  );
};

export default PaginaConvidativa;
