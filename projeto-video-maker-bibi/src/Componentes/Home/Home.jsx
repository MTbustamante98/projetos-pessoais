import React from "react";
import Titulo from "../Titulo";
import Video from "../Video";
import ContainerDescricaoWorks from "./ContainerDescricaoWorks";
import ImgPlayVideo from "../ImgPlayVideo";
import ImgGradeMaior from "../../assets/grade-cinza-desktop.svg";
import BibianaSobreMimHome from "../../assets/bibi-sobremim-home.jpg";
import BibianaSobreMimHome2 from "../../assets/bibi-sobremim-home-md.jpeg";
import BibianaSobreMimHome3 from "../../assets/bibi-sobremim-home-pq.jpeg";
import setaDec1 from "../../assets/seta-dec.svg";
import setaDec2 from "../../assets/seta-dec-2.svg";
import ImgVideoPaper from "../../assets/poster-video.png";
import { NavLink } from "react-router-dom";
import useMedia from "../../Hooks/useMedia";
import ShortVideo from "../ShortVideo";
import { VideoListHome } from "../../VideoListHome&Portfolio";
import Head from "../Helper/Head";

const Home = () => {
  const [activeVideo, setActiveVideo] = React.useState(null);
  const [videoReady, setVideoReady] = React.useState(false);
  const responsiveMobile = useMedia("(max-width: 28.75rem)");
  const responsiveXl = useMedia("(max-width: 79.938rem)");

  const imagens = {
    mobile: {
      src: BibianaSobreMimHome3,
    },
    tablet: {
      src: BibianaSobreMimHome2,
    },
    desktop: {
      src: BibianaSobreMimHome,
      className: "w-[clamp(10rem,50vw,80rem)] h-[clamp(10rem,50vw,80rem)]",
    },
  };

  const device = responsiveMobile
    ? "mobile"
    : responsiveXl
      ? "tablet"
      : "desktop";

  return (
    <>
      <Head title="Home | Bibiana Bustamante Filmmaker" />
      {/* Primeira seção home, imagem e título */}
      <section className="grid grid-cols-1 grid-rows-1 pt-20 xl:pt-0">
        <img
          className={`col-start-1 row-start-1 size-full object-cover transition-opacity duration-300 ${
            videoReady ? "opacity-0" : "opacity-100"
          }`}
          src={ImgVideoPaper}
          alt=""
        />
        <video
          className={`col-start-1 row-start-1 size-full object-cover transition-opacity duration-300 ${
            videoReady ? "opacity-100" : "opacity-0"
          }`}
          autoPlay
          muted
          loop
          playsInline
          src="/videos/compilado-2.mp4"
          onCanPlay={() => setVideoReady(true)}
        ></video>
        <div className="col-start-1 row-start-1 z-10 flex flex-col items-center gap-10 mt-12">
          <Titulo className="max-[356px]:text-2xl max-md:text-center text-neutral-4 font-serif italic text-[clamp(2rem,4vw,4rem)]">
            tô nesse mundo pra viver. experimentar. criar
          </Titulo>
        </div>
      </section> 

      {/* Segunda seção home, vídeos de trabalho */}
      <section className="flex flex-col items-center bg-red-2 pb-6 lg:pb-14 lg:pr-6 lg:pl-6">
        <Titulo className="text-center mt-10 2xl:mt-18 mb-8 md:mb-14 lg:mb-18  text-neutral-5 font-serif italic text-3xl text-[clamp(1.875rem,4vw,4rem)]">
          veja alguns dos meus trabalhos
        </Titulo>
        <div className="flex flex-col lg:grid lg:grid-cols-3 md:gap-6 xl:gap-14 items-center">
          {VideoListHome &&
            VideoListHome.slice(0, 6).map((item) => (
              <div
                key={item.id}
                className="relative grid grid-cols-1 grid-rows-1"
              >
                <Video
                  id={item.id}
                  source={item.src}
                  poster={item.thumbNailSrc}
                  setActiveVideo={setActiveVideo}
                  onEnded={() => setActiveVideo(null)}
                  active={activeVideo === item.id}
                  className="w-screen h-[70vw] lg:h-[40vw] col-start-1 row-start-1 object-cover cursor-pointer mb-4"
                />
                <ImgPlayVideo
                  className="absolute col-start-1 row-start-1 justify-self-center self-center cursor-pointer"
                  active={activeVideo === item.id}
                  onClick={() => setActiveVideo(item.id)}
                />
                <ContainerDescricaoWorks
                  spanOne={item.spanOne}
                  spanTwo={item.spanTwo}
                />
              </div>
            ))}
        </div>
        <NavLink
          className="mt-10 pb-4 lg:pb-0 md:mt-24 lg:mt-24"
          to="/portfolio"
        >
          <p className="text-neutral-5 text-xs font-medium underline tracking-wide">
            clique aqui e veja meu portfólio completo
          </p>
        </NavLink>
      </section>

      {/* Terceira seção home, Sobre mim resumido */}
      <section className="bg-red-3">
        <article className="flex flex-col xl:flex-row">
          <div>
            <img
              src={imagens[device].src}
              alt="Fotografia de Bibiana, piscando e segurando sua câmera."
              className={imagens[device].className}
            />
          </div>
          <div className="flex flex-col items-center xl:items-start xl:justify-center mt-8 xl:pl-10 2xl:pl-30 relative">
            <img
              className="max-md:hidden md:absolute md:left-3 xl:left-2 2xl:left-6 md:-top-5 xl:-top-4 2xl:-top-4"
              src={setaDec1}
              alt=""
            />
            <p className="font-regular text-red-5 text-2xl mb-3">Prazer,</p>
            <Titulo className="font-serif font-semibold text-white text-3xl lg:text-4xl">
              Bibiana Bustamante,
            </Titulo>
            <p className="font-regular text-red-5 text-2xl mt-3">
              Sua Filmmaker
            </p>
            <p className="text-neutral-4 text-sm lg:text-base mt-4 pl-8 pr-8 xl:p-0 max-w-[45ch] min-[650px]:max-w-[68ch] lg:max-w-[60ch] decAspasSobreHome">
              Iniciei como fotógrafa aprendendo a descobrir movimentos quase
              imperceptíveis no recorte estático de um momento, aprendizado que
              transferi plenamente para a produção audiovisual - hoje, mais que
              trabalho, um enorme prazer.
            </p>
            <p className="text-neutral-4 text-sm lg:text-base mt-4 mb-6 pl-8 pr-8 xl:p-0 max-w-[45ch] min-[650px]:max-w-[68ch] lg:max-w-[60ch] decAspasSobreHome-2">
              Juntamente com a técnica, requisito óbvio na atividade de uma
              filmaker, atuo com elementos próprios da minha natureza: percepção
              estética, capacidade de tomar decisões rápidas e sensibilidade
              para produzir imagens. Ah, sim, e uma ”chatíssima” revisão
              crítica. Frame por frame.
            </p>
            <NavLink
              to="/sobre"
              className="text-xs lg:text-base text-red-5 font-semibold py-3 px-9 rounded-sm bg-white mt-4 mb-8 xl:mt-0 xl:mb-0 hover:bg-red-6 hover:text-white hover:font-black"
            >
              Leia mais sobre mim
            </NavLink>
            <img
              className="max-md:hidden md:absolute md:right-3 xl:right-0 2xl:-right-30 md:bottom-2 xl:bottom-2 2xl:bottom-5"
              src={setaDec2}
              alt=""
            />
          </div>
        </article>
      </section>

      {/* quarta seção home, ready? */}
      <section className="bg-neutral-1 relative max-[1024px]:pb-18 overflow-hidden">
        <div className="h-130 grid grid-cols-1 max-[1024px]:place-items-center lg:grid-cols-[1fr_1fr] lg:h-full">
          <img className="hidden lg:block" src={ImgGradeMaior} alt="" />
          <div className="min-h-content grid grid-cols-1 lg:self-center lg:pl-12">
            <div className="max-md:hidden min-[700px]:block w-2 h-[85%] rounded-xs bg-red-3 col-start-1 row-start-1 self-center min-[601px]:ml-4 lg:ml-0 mt-4"></div>
            <Titulo className="col-start-1 row-start-1 lg:pl-6 xl:pl-6 text-[clamp(2.2rem,5vw,4.5rem)] text-center 2xl:max-w-[15ch] lg:text-left font-serif text-neutral-5 font-semibold max-sm:pt-12 sm:pt-6 min-[519px]:max-w-[20ch]">
              PRONTOS PARA CRIAR ALGO SENSACIONAL JUNTOS?
            </Titulo>
          </div>
          <ShortVideo
            className="mt-16 min-[900px]:mt-6 h-[clamp(20rem,32vw,25rem)] lg:absolute min-[1024px]:top-42 min-[1100px]:top-46 2xl:top-48 lg:left-22 2xl:left-35"
            source="/videos/short-home.mp4"
          />
        </div>
      </section>
    </>
  );
};

export default Home;
