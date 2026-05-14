import React from "react";
import logo from "./assets/logo-bibi-3.png";

const Logo = ({ className }) => {
  return (
    <picture>
      <img
        src={logo}
        className={className}
        alt="Logo da marca Bibiana Bustamante da Silva"
      />
    </picture>
  );
};

export default Logo;
