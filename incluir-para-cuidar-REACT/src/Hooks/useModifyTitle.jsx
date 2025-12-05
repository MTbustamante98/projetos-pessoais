import React from "react";
import { useLocation } from "react-router-dom";
import { UserContext } from "../CreateUserContext";

const routesObj = {
  "/bancoDeImagens": {
    title: "Menu Inicial",
  },
  "/rotina-mao": {
    title: "Rotina Mão",
  },
  "/rotina-cranio": {
    title: "Rotina Crânio",
  },
  "/rotina-abdome": {
    title: "Rotina Abdome",
  },
  "/rotina-torax": {
    title: "Rotina Tórax",
  },
};

const useModifyTitle = () => {
  const { pathname } = useLocation();
  const { modifierValueTitle } = React.useContext(UserContext);
  const typeRoute = routesObj[pathname];

  React.useEffect(() => {
    if (!typeRoute) modifierValueTitle("");

    if (typeRoute) modifierValueTitle(routesObj[pathname].title);
  }, [pathname, modifierValueTitle]);

  return typeRoute;
};

export default useModifyTitle;
