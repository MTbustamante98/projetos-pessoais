import ImgBibianaSobreMimMd from "../../assets/bibi-sobremim-1024.jpg";
import ImgBibianaSobreMim from "../../assets/bibi-sobremim-1920.jpg";
import ImgBibianaSobreMim2 from "../../assets/bibi-sobremim-1500.jpg";
import ImgBibianaSobreMimMobile from "../../assets/bibi-sobremim-mobile.jpg";
import ImgTiktok from "../../assets/tiktok-40.svg?react";
import ImgThreads from "../../assets/threds-40.svg?react";
import ImgInstagram from "../../assets/instagram-40.svg?react";
import Titulo from "../Titulo";
import GaleriaImg from "./GaleriaImg";
import Head from "../Helper/Head";

const Sobre = () => {
  return (
    <>
      <Head title="Sobre | Bibiana Bustamante Filmmaker" />
      <section className="max-[1568px]:max-w-300 min-[1600px]:max-w-400 mx-auto">
        <div className="flex justify-center max-sm:mt-20 sm:mt-20 lg:mt-28 xl:mt-0 p-4 lg:mb-30">
          <picture>
            <source
              media="(max-width: 499px)"
              srcSet={ImgBibianaSobreMimMobile}
            />
            <source media="(max-width: 1024px)" srcSet={ImgBibianaSobreMimMd} />
            <source media="(max-width: 1599px)" srcSet={ImgBibianaSobreMim2} />
            <img src={ImgBibianaSobreMim} alt="" />
          </picture>
        </div>
        <div className="grid grid-cols-1 pl-4 mt-8 mb-8 lg:mb-30">
          <div className="w-1.5 h-full rounded-xs bg-red-3 col-start-1 row-start-1"></div>
          <div className="flex flex-col gap-4 col-start-1 row-start-1 *:text-neutral-5 max-[500px]:max-w-[36ch] min-[500px]:max-w-[60ch] md:max-w-[67ch] lg:max-w-[95ch] ml-3">
            <Titulo className="font-display text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-semibold uppercase">
              Sobre mim
            </Titulo>
            <p className="text-[clamp(0.625rem,4vw,1.25rem)] font-serif">
              {" "}
              Iniciei como fotógrafa aprendendo a descobrir movimentos quase
              imperceptíveis no recorte estático de um momento, aprendizado que
              transferi plenamente para a produção audiovisual - hoje, mais que
              trabalho, um enorme prazer.
            </p>
            <p className="text-[clamp(0.625rem,4vw,1.25rem)] font-serif">
              Juntamente com a técnica, requisito óbvio na atividade de uma
              filmaker, atuo com elementos próprios da minha natureza: percepção
              estética, capacidade de tomar decisões rápidas e sensibilidade
              para produzir imagens. Ah, sim, e uma ”chatíssima” revisão
              crítica. Frame por frame
            </p>
            <p className="text-[clamp(0.625rem,4vw,1.25rem)] font-serif">
              {" "}
              Iniciei como fotógrafa aprendendo a descobrir movimentos quase
              imperceptíveis no recorte estático de um momento, aprendizado que
              transferi plenamente para a produção audiovisual - hoje, mais que
              trabalho, um enorme prazer.
            </p>
            <p className="text-[clamp(0.625rem,4vw,1.25rem)] font-serif">
              Juntamente com a técnica, requisito óbvio na atividade de uma
              filmaker, atuo com elementos próprios da minha natureza: percepção
              estética, capacidade de tomar decisões rápidas e sensibilidade
              para produzir imagens. Ah, sim, e uma ”chatíssima” revisão
              crítica. Frame por frame
            </p>
            <p className="text-[clamp(0.625rem,4vw,1.25rem)] font-serif">
              Mas chega de falar de mim – vamos falar de você – entre em contato
              e me conte tudo sobre seu grande dia. Mal posso esperar para saber
              mais sobre isso!
            </p>
          </div>
        </div>

        {/* Galeria imagens mobile, md, lg e telas maiores. */}
        <GaleriaImg />
        <div className="flex flex-col lg:flex-row items-center pb-15 lg:pb-40 lg:-mt-32 lg:gap-60 xl:gap-90 2xl:gap-120 lg:ml-8">
          <div className="lg:grid lg:grid-cols-1 lg:max-w-[15ch] mb-3">
            <span className="w-1.5 h-full rounded-xs bg-red-3 col-start-1 row-start-1"></span>
            <Titulo className="max-[374px]:text-3xl text-[clamp(2rem,5vw,5rem)] text-neutral-5 font-serif font-bold lg:leading-14 xl:leading-18 lg:col-start-1 lg:row-start-1 lg:pl-4">
              vamos nos conectar!
            </Titulo>
          </div>
          <div className="flex items-center flex-col gap-3 lg:items-start">
            <p className="max-[374px]:text-xl font-serif text-[clamp(1.5rem,3vw,2.2rem)] text-neutral-5 font-bold">
              trabalho & colaboração
            </p>
            <span className="relative text-sm text-neutral-5 after:absolute after:w-full after:h-0.5 after:bg-neutral-5 after:-bottom-0.5 after:left-0">
              bibiana_bustamante@hotmail.com
            </span>
            <div className="flex items-center gap-8 mt-5 font-medium">
              <a
                href="https://www.instagram.com/bibianabustamante"
                rel="noopener noreferrer"
                target="_blank"
              >
                <ImgInstagram />
              </a>
              <a
                href="https://www.tiktok.com/@bibianabustamantes?_r=1&_t=ZS-93R58KeuNWi"
                rel="noopener noreferrer"
                target="_blank"
              >
                <ImgTiktok />
              </a>
              <a
                href="https://www.threads.com/@bibianabustamante?igshid=NTc4MTIwNjQ2YQ%3D%3D"
                rel="noopener noreferrer"
                target="_blank"
              >
                <ImgThreads />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sobre;
