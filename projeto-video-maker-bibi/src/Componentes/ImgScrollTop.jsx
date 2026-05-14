import React from "react";
import ArrowTop from "../assets/arrowTop.svg";
import useScrollTop from "../Hooks/useScrollTop";
import useValidRoute from "../Hooks/useValidRoute";

const ImgScrollTop = () => {
  const scrollTop = useScrollTop();
  const isNotFound = useValidRoute();

  if (isNotFound) return null;
  return (
    <img
      onClick={scrollTop}
      className="fixed left-2 top-2/4 z-50 h-12 w-12 opacity-30 cursor-pointer"
      src={ArrowTop}
      alt="Voltar ao topo da página."
    />
  );
};

export default ImgScrollTop;
