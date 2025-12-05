import React from "react";
import Footer from "./Footer";
import styles from "./Introducao.module.css";
import imgInicial from "../assets/img-pg-inicial.png";
import imgInicialMedio from "../assets/img-pg-inicial-medio.png";
import Video from "./Video";
import Head from "./Helper/Head";

const Home = () => {
  return (
    <section className={styles.initialContainer}>
      <Head
        title="Incluir para Cuidar | Home"
        description="Home do site, com o video inicial."
      />
      <div className={`${styles.initialContainerImg} opacityAnime `}>
        <picture>
          <source
            media="(max-width: 90rem)"
            srcSet={imgInicialMedio}
            type="image/png"
          />
          <img
            src={imgInicial}
            alt="Imagem ilustrativa do projeto Incluir para Cuidar"
            style={{ aspectRatio: "1100 / 650" }}
          />
        </picture>
      </div>
      <Video source="/videos/video-apresentacao-inicial.mp4" />
      <Footer next="/banco-de-imagens" />
    </section>
  );
};

export default Home;
