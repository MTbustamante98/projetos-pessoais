import React from "react";
import "../Componentes.css";
import "../Animations.css";
const Video = ({ source, className, onEnded }) => {
  return (
    <div className={`container-media-video animeLeft ${className || ""}`}>
      <video controls className="media-video" key={source} onEnded={onEnded}>
        <source src={source} type="video/mp4" />
        <track
          src="/legendas.vtt"
          kind="captions"
          srcLang="pt"
          label="Português"
          default
        />
        O teu navegador não suporta vídeo.
      </video>
    </div>
  );
};

export default Video;
