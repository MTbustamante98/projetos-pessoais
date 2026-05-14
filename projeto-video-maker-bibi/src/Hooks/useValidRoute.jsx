import React from "react";
import { useLocation } from "react-router-dom";

const useValidRoute = () => {
  const { pathname } = useLocation();
  
  const isValidRoutes = ["/", "/sobre", "/contato", "/portfolio"];
  const isNotFound = !isValidRoutes.includes(pathname);

  return isNotFound;
};

export default useValidRoute;
