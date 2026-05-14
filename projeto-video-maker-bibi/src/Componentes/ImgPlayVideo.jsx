import React from "react";
import ImgPlay from "../assets/play-video.svg";
const ImgPlayVideo = ({ onClick, active, className }) => {
  return (
    <>
      {!active && (
        <img
          onClick={onClick}
          className={className}
          src={ImgPlay}
          alt="Ícone representando um botão de reprodução"
        />
      )}
    </>
  );
};

export default React.memo(ImgPlayVideo);
