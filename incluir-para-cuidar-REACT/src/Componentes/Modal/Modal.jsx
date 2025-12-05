import React from "react";
import styles from "./Modal.module.css";
import ModalLink from "./ModalLink";
import ImgCloseModal from "./ImgCloseModal";
import { UserContext } from "../../CreateUserContext";
import useClass from "../../Hooks/useClass";

const Modal = () => {
  const { closeModal, activeModal } = React.useContext(UserContext);
  const refModal = React.useRef();
  const anime = useClass();

  React.useEffect(() => {
    if (!activeModal) return;

    function closeModalHandler(e) {
      if (refModal.current && !refModal.current.contains(e.target))
        closeModal();
    }

    function handleKey(e) {
      if (e.key === "Escape") closeModal();
    }

    document.addEventListener("pointerdown", closeModalHandler);
    document.addEventListener("keydown", handleKey);

    return () => {
      document.removeEventListener("pointerdown", closeModalHandler);
      document.removeEventListener("keydown", handleKey);
    };
  }, [closeModal, activeModal]);

  return (
    <section
      className={`${styles.modal} ${anime}`}
      aria-modal="true"
      aria-labelledby="modal-title"
      ref={refModal}
    >
      <ImgCloseModal />
      <div className={styles.linkModalsContainer}>
        <ModalLink to="/rotina-mao" label="Mão" />
        <ModalLink to="/rotina-cranio" label="Crânio" />
        <ModalLink to="/rotina-abdome" label="Abdome" />
        <ModalLink to="/rotina-torax" label="Tórax" />
      </div>
    </section>
  );
};

export default Modal;
