import React from "react";
import Video from "../Video";
import { VideoListPortfolio } from "../../VideoListHome&Portfolio.jsx";
import ImgPlayVideo from "../ImgPlayVideo";

const GaleriaVideo = () => {
  const [activeVideo, setActiveVideo] = React.useState(null);
  return (
    <section className="overflow-y-hidden flex flex-col xl:flex-row xl:flex-wrap gap-8">
      {VideoListPortfolio &&
        VideoListPortfolio.map((item, i) => (
          <div
            className="grid grid-cols-1 grid-rows-1 items-center pl-4 pr-4 relative"
            key={item.id}
          >
            <Video
              id={i}
              setActiveVideo={setActiveVideo}
              source={item.src}
              poster={item.thumbNailSrc}
              onEnded={() => setActiveVideo(null)}
              active={activeVideo === i}
              className="col-start-1 row-start-1 w-150 min-[700px]:w-250 min-[1050px]:w-280 min-[1200px]:w-330 min-[1440px]:w-160 h-80 min-[700px]:h-180 min-[1440px]:h-150 object-cover cursor-pointer"
            />
            <ImgPlayVideo
              className="absolute col-start-1 row-start-1 justify-self-center cursor-pointer"
              active={activeVideo === i}
              onClick={() => setActiveVideo(i)}
            />
            <div className="flex flex-col mt-4">
              <span className="row-start-1 mb-2 text-red">
                <strong>Projeto:</strong>{" "}
                <span className="text-neutral-5 italic">{item.projeto}</span>
              </span>
              <span className="row-start-1 mb-2 text-red">
                <strong>Cliente:</strong>{" "}
                <span className="text-neutral-5 italic">{item.cliente}</span>
              </span>
            </div>
          </div>
        ))}
    </section>
  );
};

export default GaleriaVideo;
