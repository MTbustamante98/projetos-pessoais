import React from "react";
import { useLocation } from "react-router-dom";

const useClass = () => {
  const [anime, setAnime] = React.useState("");
  const { pathname } = useLocation();

  React.useEffect(() => {
    setAnime("");

    const frameId = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setAnime("animeUp");
      });
    });

    return () => cancelAnimationFrame(frameId);
  }, [pathname]);

  return anime;
};

export default useClass;
