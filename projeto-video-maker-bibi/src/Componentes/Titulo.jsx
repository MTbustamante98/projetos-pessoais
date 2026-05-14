import React from "react";

const Titulo = ({ children, className, ref }) => {
  return (
    <h1 ref={ref} className={className}>
      {children}
    </h1>
  );
};

export default Titulo;
