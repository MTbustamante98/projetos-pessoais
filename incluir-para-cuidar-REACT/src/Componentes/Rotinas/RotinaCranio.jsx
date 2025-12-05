import React from "react";
import styleBoxRoutine from "./RoutineBox.module.css";
import ContainerBorderLeft from "../ContainerBorderLeft/ContainerBorderLeft";
import Footer from "../Footer";
import Head from "../Helper/Head";
import { ROTINA_CRANIO } from "../../TypeRoutine";
import useRoutines from "../../Hooks/useRoutines";
import RoutineImage from "./RoutineImage";
import Video from "../Video";

const RotinaCranio = () => {
  const { currentList, nextStep, index } = useRoutines(ROTINA_CRANIO);

  return (
    <section className={styleBoxRoutine.parentContainer}>
      <Head title="Rotina Crânio | Incluir para cuidar" />
      <ContainerBorderLeft />
      <Footer next="/sugestoes" prev="/banco-de-imagens" />
      {currentList && (
        <>
          <RoutineImage
            className={styleBoxRoutine.containerImgRoutine}
            src={currentList.img}
            alt="Figura que ilustra o tipo da rotina."
          />
          <RoutineImage
            className={styleBoxRoutine.positionPuppet}
            src={currentList.boneco}
            alt="Figura que ilustra o tipo da rotina."
          />
        </>
      )}
      <p className={`${styleBoxRoutine.informativeParagraph} font-instruction`}>
        Avance o vídeo para mudar o posicionamento.
      </p>
      {ROTINA_CRANIO.slice(0, index + 1).map((item, i) => (
        <div
          style={{ top: `calc(${i} * 140px)` }}
          className={styleBoxRoutine.numberingRoutines}
        >
          <img key={i} src={item.balao} />
        </div>
      ))}
      {currentList && (
        <Video
          className={styleBoxRoutine.videoRoutine}
          source={currentList.video}
          onEnded={nextStep}
        />
      )}
    </section>
  );
};

export default RotinaCranio;
