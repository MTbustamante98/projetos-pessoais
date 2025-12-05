import React from "react";
import Close from "../../assets/close-modal.svg?react";
import styles from "./Modal.module.css";
import { UserContext } from "../../CreateUserContext";

const ImgCloseModal = () => {
  const { closeModal } = React.useContext(UserContext);

  return (
    <div
      className={styles.closeModal}
      aria-label="Fechar modal"
      onClick={() => closeModal()}
    >
      <Close />
    </div>
  );
};

export default ImgCloseModal;
