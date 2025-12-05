import React from "react";
import styles from "./Footer.module.css";
import ImgNext from "../assets/avancar-prox-pagina.png";
import ImgPrev from "../assets/img-prev.png";
import { Link, useLocation } from "react-router";

const Footer = ({ next, prev }) => {
  const { pathname } = useLocation();

  return (
    <footer className={styles.footer}>
      <Link to={next} aria-label="Avançar para a próxima página">
        <img
          className={styles.imgNext}
          src={ImgNext}
          alt="Ícone para clicar e avançar"
        />
      </Link>
      {pathname !== "/" && (
        <Link to={prev} aria-label="Avançar para a próxima página">
          <img
            className={styles.imgPrev}
            src={ImgPrev}
            alt="Ícone para clicar e avançar"
          />
        </Link>
      )}
    </footer>
  );
};

export default Footer;
