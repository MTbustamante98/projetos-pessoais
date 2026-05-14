const ShortVideo = ({ source, className }) => {
  return (
    <div>
      <video autoPlay muted loop playsInline className={className} key={source}>
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

export default ShortVideo;
