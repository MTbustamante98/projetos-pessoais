import React from "react";
import ContainerBorderLeft from "../ContainerBorderLeft/ContainerBorderLeft";
import styles from "./BancoDeImagens.module.css";
import Video from "../Video";
import Head from "../Helper/Head";
import { UserContext } from "../../CreateUserContext";
import Modal from "../Modal/Modal";

const BancoDeImagens = () => {
  const [activeVideo, setActiveVideo] = React.useState(true);
  const { currentVideo, modifierValueTitle, activeModal } =
    React.useContext(UserContext);

  React.useEffect(() => {
    modifierValueTitle("Menu Inicial");
  }, [modifierValueTitle]);

  React.useEffect(() => {
    if (activeModal) {
      setActiveVideo(false);
    } else {
      setActiveVideo(true);
      modifierValueTitle("Menu Inicial");
    }
  }, [activeModal, modifierValueTitle]);

  return (
    <>
      <Head title="Banco de Imagens | Incluir para cuidar" />
      <ContainerBorderLeft />

      {activeVideo && (
        <>
          <Video className={styles.videoBankPosition} source={currentVideo} />
          <p className={`${styles.informativeParagraph} font-instruction`}>
            Selecione uma opção do menu para visualizar um vídeo tutorial
            diferente.
          </p>
        </>
      )}
      {activeModal && <Modal />}
    </>
  );
};

export default BancoDeImagens;
