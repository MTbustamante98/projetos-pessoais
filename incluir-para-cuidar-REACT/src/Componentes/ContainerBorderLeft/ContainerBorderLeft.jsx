import React from "react";
import styles from "./ContainerBorderLeft.module.css";
import icoDuasMaos from "../../assets/ico-duas-maos-inicio.png";
import icoApresentacao from "../../assets/ico-mao-apresentacao.png";
import icoLegenda from "../../assets/ico-legenda.png";
import icoInfo from "../../assets/ico-info.png";
import icoRotinas from "../../assets/ico-rotinas.png";
import { Link, useLocation } from "react-router-dom";
import MenuIcon from "../DivToggleDrops/MenuIcon";
import { UserContext } from "../../CreateUserContext";
import useModifyTitle from "../../Hooks/useModifyTitle";

const ContainerBorderLeft = () => {
  const { changeVideo, modifierValueTitle, openModal } =
    React.useContext(UserContext);
  const typeRoute = useModifyTitle();
  const { pathname } = useLocation();

  function modifyVideoAndTitle({ target }) {
    switch (target.innerText) {
      case "Apresentação":
        changeVideo("/videos/apresentacao.mp4");
        break;
      case "Legenda":
        changeVideo("/videos/legenda.mp4");
        break;
      case "Informação":
        changeVideo("/videos/info.mp4");
        break;
      case "Rotinas":
        openModal();
    }

    modifierValueTitle(target.innerText);
  }

  React.useEffect(() => {
    document.body.className = "";
    document.body.classList.add(`route-${pathname.replace("/", "")}`);
  }, [pathname]);

  return (
    <section className={`${styles.containerBorderLeft} animeUp`}>
      <Link to="/">
        <MenuIcon src={icoDuasMaos} alt="Ícone de início" title="Início" />
      </Link>
      <MenuIcon
        src={icoApresentacao}
        alt="Ícone de início"
        title="Apresentação"
        onClickAction={modifyVideoAndTitle}
      />
      <MenuIcon
        src={icoLegenda}
        alt="Ícone de início"
        title="Legenda"
        onClickAction={modifyVideoAndTitle}
      />
      <MenuIcon
        src={icoInfo}
        alt="Ícone de início"
        title="Informação"
        onClickAction={modifyVideoAndTitle}
      />
      {!typeRoute && (
        <MenuIcon
          src={icoRotinas}
          alt="Ícone de início"
          title="Rotinas"
          onClickAction={modifyVideoAndTitle}
        />
      )}
    </section>
  );
};

export default ContainerBorderLeft;
