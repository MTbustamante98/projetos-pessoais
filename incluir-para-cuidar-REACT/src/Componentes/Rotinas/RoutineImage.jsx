import React from "react";

const RoutineImage = ({ src, alt, className }) => {
  return (
    <div className={className}>
      <img src={src} alt={alt} />
    </div>
  );
};

export default RoutineImage;
