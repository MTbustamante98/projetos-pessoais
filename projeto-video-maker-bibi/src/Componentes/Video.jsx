import React from "react";
const Video = ({
  className,
  source,
  active,
  onEnded,
  setActiveVideo,
  id,
  poster,
}) => {
  const videoRef = React.useRef(null);

  React.useEffect(() => {
    if (!videoRef.current) return;
    active ? videoRef.current.play() : videoRef.current.load();
  }, [active]);

  function handleClick() {
    if (!active) videoRef.current.play();
  }

  function handlePlay() {
    if (!active) setActiveVideo(id);
    videoRef.current.controlsList = "nodownload";
  }

  function handlePause() {
    if (!active) setActiveVideo(null);
  }

  return (
    <div>
      <video
        preload="none"
        poster={poster}
        controls={active}
        onClick={handleClick}
        onPlay={handlePlay}
        onPause={handlePause}
        onEnded={onEnded}
        ref={videoRef}
        className={className}
      >
        <source src={source} type="video/mp4" />
        <track
          src="/legendas.vtt"
          kind="captions"
          srcLang="pt"
          label="Português"
          default
        />
        O seu navegador não suporta vídeo.
      </video>
    </div>
  );
};

export default React.memo(Video);
