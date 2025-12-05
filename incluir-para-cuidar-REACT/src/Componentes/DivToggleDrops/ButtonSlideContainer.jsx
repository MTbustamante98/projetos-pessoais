import React from "react";
import styles from "./MenuIcons.module.css";
const ButtonSlideContainer = ({ children, ...props }) => {
  return (
    <button {...props} className={`${styles.ButtonSlideContainer} slide-button-font`}>
      {children}
    </button>
  );
};

export default ButtonSlideContainer;
