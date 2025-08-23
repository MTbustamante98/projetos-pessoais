import { video, source, sliderImg } from "./elements";

const updateVideoImg = () => {
  const rotinas = {
    mao: [
      { img: "./img/mao-pa.png", video: "./videos/mao-pa.mp4" },
      { img: "./img/mao-ob.png", video: "./videos/mao-ob.mp4" },
      { img: "./img/mao-pe.png", video: "./videos/mao-pe.mp4" },
    ],
    cranio: [
      { img: "./img/cranio-pa.png", video: "./videos/cranio-pa.mp4" },
      { img: "./img/cranio-waters.png", video: "./videos/cranio-waters.mp4" },
      { img: "./img/cranio-ap.png", video: "./videos/cranio-ap.mp4" },
      { img: "./img/cranio-pe.png", video: "./videos/cranio-pe.mp4" },
    ],
    abdome: [
      {
        img: "./img/abdome-1.png",
        video: "./videos/rotina-abdome-1.mp4",
      },
      { img: "./img/abdome-orts-ap.png", video: "./videos/abdome-orts-ap.mp4" },
      { img: "./img/abdome-rub-dle.png", video: "./videos/abdome-rub-dle.mp4" },
      { img: "./img/abdome-dle.png", video: "./videos/abdome-dle.m  p4" },
    ],
    torax: [
      { img: "./img/torax-pa.png", video: "./videos/torax-pa.mp4" },
      { img: "./img/torax-pe.png", video: "./videos/torax-pe.mp4" },
    ],
  };

  const pagina = document.body.id.replace("rotina-", "");
  const listaAtual = rotinas[pagina];
  let currentIndex = 0;

  if (listaAtual && listaAtual.length) {
    sliderImg.src = listaAtual[currentIndex].img;
    source.src = listaAtual[currentIndex].video;
    video.load();
  }

  function updateSliderAndMediaVideo() {
    currentIndex++;
    if (currentIndex >= listaAtual.length) currentIndex = 0;

    const nextItem = listaAtual[currentIndex];

    sliderImg.src = nextItem.img;
    source.src = nextItem.video;
    video.load();
  }

  video.addEventListener("ended", updateSliderAndMediaVideo);
};

export default updateVideoImg;
