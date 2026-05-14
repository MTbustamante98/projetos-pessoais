import React from "react";
import Titulo from "../Titulo";
import { Link, NavLink } from "react-router-dom";
import ShortVideo from "../ShortVideo";
import { ShortVideosList } from "../../ShortVideosListContato";

const SlideShowVideos = () => {
  const VideoRef = React.useRef(null);
  const [videoWidth, setVideoWidth] = React.useState(0);
  const [slideAtual, setSlideAtual] = React.useState(1);
  const [transitionWillActive, setTransitionWillActive] = React.useState(true);
  const [isResetting, setIsResetting] = React.useState(false);

  const ITEMS_VISIBLE = 4;
  const GAP = 8;
  const newArrayShortVideoList = React.useMemo(() => {
    const clonesInicio = ShortVideosList.slice(-ITEMS_VISIBLE);
    const clonesFim = ShortVideosList.slice(0, ITEMS_VISIBLE);
    return [...clonesInicio, ...ShortVideosList, ...clonesFim];
  }, []);

  React.useLayoutEffect(() => {
    if (!VideoRef.current) return;

    const updateSlideWidth = () => {
      const shortRef = VideoRef.current.children[0];
      if (shortRef) setVideoWidth(shortRef.clientWidth);
    };
    updateSlideWidth();
    const RO = new ResizeObserver(updateSlideWidth);
    RO.observe(VideoRef.current);

    return () => RO.disconnect();
  }, []);

  React.useEffect(() => {
    if (isResetting) return;
    const timeOut = setTimeout(() => {
      setTransitionWillActive(true);
      setSlideAtual((prev) => prev + 1);
    }, 5000);

    return () => clearTimeout(timeOut);
  }, [isResetting, slideAtual]);

  function modifyTransition() {
    const TOTAL_SLIDES = ShortVideosList.length;

    if (slideAtual >= TOTAL_SLIDES) {
      setIsResetting(true);
      setTransitionWillActive(false);
      setSlideAtual(1);
    }

    if (slideAtual <= 0) {
      setIsResetting(true);
      setTransitionWillActive(false);
      setSlideAtual(TOTAL_SLIDES);
    }
  }

  React.useEffect(() => {
    if (!transitionWillActive) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setTransitionWillActive(true);
          setIsResetting(false);
        });
      });
    }
  }, [transitionWillActive, isResetting]);

  return (
    <section className="pb-30">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 ml-6 md:ml-2 mb-6 md:pl-2 md:pr-2">
        <Titulo className="text-[clamp(1.75rem,4vw,4rem)] text-neutral-5 font-semibold font-serif">
          veja meu trabalho
        </Titulo>
        <NavLink to="/portfolio">
          <p className="text-neutral-5 text-sm font-semibold underline tracking-wide 2xl:pr-6">
            acessar portfólio
          </p>
        </NavLink>
      </div>
      <div className="overflow-hidden">
        <div
          ref={VideoRef}
          className="flex gap-2 esteiraSlides cursor-pointer"
          style={{
            transform: `translateX(-${slideAtual * (videoWidth + GAP)}px)`,
            transition: transitionWillActive
              ? "transform 1s ease-in-out"
              : "none",
          }}
          onTransitionEnd={modifyTransition}
        >
          {newArrayShortVideoList &&
            newArrayShortVideoList.map((item, i) => (
              <div
                key={i}
                className="shrink-0 even:py-2"
              >
                <Link to="/portfolio">
                  <ShortVideo
                    source={item.src}
                    className="h-60 w-full md:w-100 lg:w-80 lg:h-100 object-cover"
                  />
                </Link>
                <span className="font-serif text-neutral-5 text-xs ml-1">
                  {item.titulo}
                </span>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default SlideShowVideos;
