import React from "react";
import "../Tipografia.css";
import styles from "./Header.module.css";

const Titulo = ({ children }) => {
  return (
    <h1 className={`${styles.title} titulo-header-typewriter`}>{children}</h1>
  );
};

export default Titulo;
