import React from "react";

const useScrollTop = () => {
  return () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
};

export default useScrollTop;
