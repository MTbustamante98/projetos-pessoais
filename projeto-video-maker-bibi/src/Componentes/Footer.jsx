import React from "react";
import { useLocation } from "react-router-dom";
import useMedia from "../Hooks/useMedia";
import Logo from "../Logo";
import RedesSociais from "./RedesSociais";
import ImgGradePequena from "../assets/grade-cinza-pq.svg";
import ShortVideo from "./ShortVideo";
import useScrollTop from "../Hooks/useScrollTop";
import useValidRoute from "../Hooks/useValidRoute";

const Footer = () => {
  const { pathname } = useLocation();
  const videoByRoute = {
    "/": "/videos/video-deixemever.mov",
    "/portfolio": "/videos/video-espelho.mov",
    "/sobre": "/videos/video-super-coffe.mov",
  };
  const SourceShortVideo = videoByRoute[pathname] ?? "/videos/video-paleto.mov";
  const responsive = useMedia("(max-width: 70.625rem)");
  const scrollTop = useScrollTop();
  const isNotFound = useValidRoute();

  if (isNotFound) return null;
  if (responsive) {
    return (
      <footer className="pt-20 pb-20 bg-red-2">
        <div className="flex flex-col justify-center items-center min-w-full">
          <div className="flex flex-col items-center">
            <h1 className="uppercase text-lg text-neutral-5 font-regular mb-2 decFooterMobile">
              contato
            </h1>
            <ul className="*:text-neutral-4 *:text-sm *:font-light flex flex-col items-center gap-2">
              <li>+55 51 9999-9999</li>
              <li>bibiana_bustamante@hotmail.com</li>
              <li>Rua Guadalajara, 433 - Jardim Sabará</li>
              <li>Porto Alegre - RS</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center min-w-full">
          <div className="flex flex-col items-center mt-10">
            <h1 className="uppercase text-lg text-neutral-5 font-regular mb-2 decFooterMobile">
              navegação
            </h1>
            <ul className="*:text-neutral-4 *:text-sm *:font-light flex flex-col items-center gap-2 *:hover:underline">
              <li>
                <a href="/portfolio">Portfólio</a>
              </li>
              <li>
                <a href="/sobre">Sobre mim</a>
              </li>
              <li>
                <a href="/contato">Contato</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center min-w-full mt-10">
          <Logo className="w-72 h-16" />
          <RedesSociais />
          <p className="text-neutral-4 text-xs tracking-wide mt-8">
            Bibiana Bustamante © Alguns direitos reservados
          </p>
          <p
            onClick={scrollTop}
            className="underline text-neutral-3 mt-12 font-semibold cursor-pointer"
          >
            Retornar ao topo
          </p>
        </div>
      </footer>
    );
  }
  return (
    <>
      <footer className="laptop:h-60 h-75 bg-red-2 relative flex lg:items-center justify-center min-[1325px]:justify-start min-[2000px]:justify-center">
        <div className="flex gap-[min(7vw,30rem)] xl:pl-4 min-[1536px]:ml-30 min-[2000px]:ml-0 min-[2000px]:gap-60">
          <div className="place-items-center">
            <Logo className="w-72 h-16" />
            <RedesSociais />
            <p className="text-neutral-4 text-xs tracking-wide mt-8">
              Bibiana Bustamante © Alguns direitos reservados
            </p>
          </div>
          <div>
            <h1 className="uppercase text-lg text-neutral-5 font-regular mb-4 xl:place-self-auto">
              contato
            </h1>
            <ul className="flex flex-col gap-3 *:xl:place-self-auto *:text-neutral-4 *:text-sm *:font-light">
              <li>+55 51 9999-9999</li>
              <li>bibiana_bustamante@hotmail.com</li>
              <span className="bg-neutral-3 w-full h-px"></span>
              <li>Rua Guadalajara, 433 - Jardim Sabará</li>
              <li>Porto Alegre - RS</li>
            </ul>
          </div>
          <div>
            <h1 className="uppercase text-lg text-neutral-5 font-regular mb-4 xl:place-self-auto">
              navegação
            </h1>
            <ul className="flex flex-col gap-4 *:text-neutral-4 *:text-sm *:font-light *:hover:underline *:xl:place-self-auto">
              <li>
                <a href="/portfolio">Portfólio</a>
              </li>
              <li>
                <a href="/sobre">Sobre mim</a>
              </li>
              <li>
                <a href="/contato">Contato</a>
              </li>
            </ul>
          </div>
          {!responsive && (
            <div className="min-[1131px]:hidden min-[1325px]:block absolute top-0 right-0">
              <img className="laptop:h-60" src={ImgGradePequena} alt="" />
              <ShortVideo
                className="w-100 h-50 lg:w-80 xl:absolute top-[17%] laptop:top-6 left-[-10%]"
                source={SourceShortVideo}
              />
            </div>
          )}
        </div>
      </footer>
    </>
  );
};

export default Footer;
