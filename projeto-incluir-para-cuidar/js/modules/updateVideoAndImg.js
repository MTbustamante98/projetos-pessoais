import {
  video,
  source,
  sliderImg,
  imgPerson,
  imgNumeracao,
  active,
} from "./elements";

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
        video: "./videos/torax-pa.mp4",
      },
      { img: "./img/abdome-orts-ap.png", video: "./videos/abdome-orts-ap.mp4" },
      { img: "./img/abdome-rub-dle.png", video: "./videos/abdome-rub-dle.mp4" },
      { img: "./img/abdome-dle.png", video: "./videos/abdome-dle.mp4" },
    ],
    torax: [
      { img: "./img/torax-pa.png", video: "./videos/torax-pa.mp4" },
      { img: "./img/torax-pe.png", video: "./videos/torax-pe.mp4" },
    ],
  };

  const pagina = document.body.id.replace("rotina-", "");
  if (!pagina) return;

  const listaAtual = rotinas[pagina];
  
  //Índice da imagem/vídeo atual
  let currentIndex = 0;

  //Guarda o próximo item a ser usado
  let nextItem = null;

  if (listaAtual && listaAtual.length) {
    nextItem = listaAtual[currentIndex]; //Apenas a primeira atribuição, definindo o ponto de partida do slider.
    sliderImg.src = listaAtual[currentIndex].img;
    source.src = listaAtual[currentIndex].video;
    video.load();
    updatePuppetInroutines();
  }

  function updatePuppetInroutines() {
    if (!nextItem) return;
    if (!imgPerson) return;

    if (
      nextItem.img.includes("abdome-rub-dle.png") ||
      nextItem.img.includes("abdome-dle.png")
    ) {
      imgPerson.setAttribute("src", "./img/boneco-deitado.png");
    } else if (nextItem.img.includes("torax-pe.png")) {
      imgPerson.setAttribute("src", "./img/boneco-perfil.png");
    } else {
      imgPerson.setAttribute("src", "./img/boneco-em-pe.png");
    }
  }

  function updateSliderAndMediaVideo() {
    const nextIndex = (currentIndex + 1) % listaAtual.length;
    
    if (nextIndex === 0) {
      imgNumeracao.forEach((img) => img.classList.remove(active));
    } else {
      const balloonIndex = nextIndex - 1;
      const balloon = imgNumeracao[balloonIndex];
      if (balloon) balloon.classList.add(active);
    }

    //Aqui ele é reatribuído com o elemento correspondente ao novo índice, após o cálculo.
    currentIndex = nextIndex;
    
    nextItem = listaAtual[currentIndex];
    sliderImg.src = nextItem.img;
    source.src = nextItem.video;
    video.load();

    updatePuppetInroutines();
  }

  if (video && source)
    video.addEventListener("ended", updateSliderAndMediaVideo);
};

export default updateVideoImg;
