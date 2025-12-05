import React from "react";

const useRoutines = (list) => {
  const [index, setIndex] = React.useState(0);
  const currentList = list[index];

  function nextStep() {
    setIndex((prev) => (prev + 1) % list.length);
  }

  return {
    index,
    currentList,
    nextStep,
  };
};

export default useRoutines;
