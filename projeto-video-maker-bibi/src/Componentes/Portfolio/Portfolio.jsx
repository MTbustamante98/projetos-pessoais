import React from "react";
import Titulo from "../Titulo";
import GaleriaVideo from "./GaleriaVideo";
import Head from "../Helper/Head";

const Portfolio = () => {
  return (
    <>
      <Head title="Portfólio | Bibiana Bustamante Filmmaker" />
      <section className="max-[1439px]:max-w-300 min-[1440px]:max-w-350 pt-30 lg:pt-40 xl:pt-20 mx-auto">
        <div className="grid ml-3">
          <span className="w-15 h-1 bg-red-3 relative -bottom-1 lg:-bottom-4 xl:lg:-bottom-5 2xl:lg:-bottom-6"></span>
          <Titulo className="max-[375px]:text-xl text-[clamp(1.5rem,5vw,5rem)] text-neutral-5 font-serif font-bold">
            captação & edição & direção
          </Titulo>
        </div>
        <span className="w-[97%] h-1 bg-neutral-5 block ml-1.5 mt-6 mb-12"></span>
        <GaleriaVideo />
      </section>
      <section className="pt-15 md:pt-30">
        <div className="w-full grid grid-cols-1 grid-rows-1 items-center justify-items-center">
          <div className="z-10 flex flex-col md:flex-row col-start-1 row-start-1 gap-48 md:gap-80 lg:gap-120 xl:gap-160 2xl:gap-200">
            <Titulo className="text-[clamp(2.125rem,5vw,4rem)] text-neutral-4 font-serif font-medium italic max-w-[7ch]">
              onde ideias incríveis
            </Titulo>
            <Titulo className="text-[clamp(2.125rem,5vw,4rem)] text-neutral-4 font-serif font-medium italic max-w-[8ch]">
              se tornam vídeos incríveis
            </Titulo>
          </div>
          <video
            preload="auto"
            autoPlay
            muted
            loop
            playsInline
            className="object-cover h-[clamp(15rem,60vh,40rem)] w-full col-start-1 row-start-1"
          >
            <source src="./videos/video-comprido.mov" type="video/mp4" />
            <track
              src="/legendas.vtt"
              kind="captions"
              srcLang="pt"
              label="Português"
              default
            />
            O seu navegador não suporta vídeo.
          </video>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
