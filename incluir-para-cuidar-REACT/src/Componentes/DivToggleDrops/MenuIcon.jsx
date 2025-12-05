import React from "react";
import styles from "./MenuIcons.module.css";
import ButtonSlideContainer from "./ButtonSlideContainer";
import { useLocation } from "react-router-dom";

const MenuIcon = ({ src, alt, title, onClickAction }) => {
  const [slideMenu, setSlideMenu] = React.useState(false);
  const { pathname } = useLocation();

  React.useEffect(() => {
    setTimeout(() => {
      setSlideMenu(true);
      setTimeout(() => {
        setSlideMenu(false);
      }, 2000);
    }, 1000);
  }, []);

  function OnSlideActive() {
    setSlideMenu(true);
  }

  function OnSlideInactive() {
    setSlideMenu(false);
  }

  return (
    <div className={styles.menuIcons}>
      <div
        onMouseEnter={OnSlideActive}
        onMouseLeave={OnSlideInactive}
        className={styles.dropWrapper}
      >
        <div className={styles.activeDropChoose}>
          <img src={src} alt={alt} />
        </div>
        {pathname === "/banco-de-imagens" && slideMenu && (
          <ButtonSlideContainer onClick={onClickAction}>
            {title}
          </ButtonSlideContainer>
        )}
      </div>
    </div>
  );
};

export default MenuIcon;
