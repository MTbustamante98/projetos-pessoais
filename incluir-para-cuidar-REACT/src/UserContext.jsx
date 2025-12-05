import React from "react";
import { UserContext } from "./CreateUserContext";
import { useLocation } from "react-router-dom";

export const UserStorage = ({ children }) => {
  const [currentVideo, setCurrentVideo] = React.useState(
    "/videos/apresentacao.mp4"
  );
  const [modifyTitle, setModifyTitle] = React.useState("Menu Inicial");
  const [activeModal, setOpenModal] = React.useState(false);
  const { pathname } = useLocation();

  function changeVideo(path) {
    if (!path) return;
    setCurrentVideo(path);
  }

  const modifierValueTitle = React.useCallback((value) => {
    setModifyTitle(value);
  }, []);

  function openModal() {
    setOpenModal((activeModal) => {
      const newState = !activeModal;
      return newState;
    });
  }

  const closeModal = React.useCallback(() => setOpenModal(false), []);

  React.useEffect(() => {
    setOpenModal(false);
  }, [pathname]);

  return (
    <UserContext.Provider
      value={{
        changeVideo,
        currentVideo,
        modifyTitle,
        modifierValueTitle,
        activeModal,
        openModal,
        closeModal,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
