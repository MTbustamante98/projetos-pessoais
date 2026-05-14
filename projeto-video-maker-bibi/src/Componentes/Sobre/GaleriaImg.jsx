import React from "react";
import ImgGaleria1 from "../../assets/bibi-sobremim-galeria.jpg";
import ImgGaleria2 from "../../assets/bibi-sobremim-galeria-2.jpg";
import ImgGaleria3 from "../../assets/bibi-sobremim-galeria-3.jpg";
import ImgGaleria4 from "../../assets/bibi-sobremim-galeria-4.jpg";
import ImgGaleria5 from "../../assets/bibi-sobremim-galeria-5.jpg";
import ImgGaleriaGrid1Xl from "../../assets/bibi-sobremim-grid-500.jpg";
import ImgGaleriaGrid2Xl from "../../assets/bibi-sobremim-grid-1200.jpg";
import ImgGaleriaGrid3Xl from "../../assets/bibi-sobremim-grid-mid.jpg";
import ImgGaleriaGrid4Xl from "../../assets/bibi-sobremim-grid-mid-2-400.jpg";
import ImgGaleriaGrid5Xl from "../../assets/bibi-sobremim-grid-2-500.jpg";
import useMedia from "../../Hooks/useMedia";

const GaleriaImg = () => {
  const galeriaMobile = useMedia("(max-width: 63.938rem)");

  if (galeriaMobile) {
    return (
      <>
        {galeriaMobile && (
          <div className="flex flex-col justify-center gap-2.5 pr-4 pl-4 pb-10">
            <img src={ImgGaleria1} alt="" />
            <img src={ImgGaleria2} alt="" />
            <img src={ImgGaleria3} alt="" />
            <img src={ImgGaleria4} alt="" />
            <img src={ImgGaleria5} alt="" />
          </div>
        )}
      </>
    );
  }

  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(100px,230px))] min-[1200px]:grid-cols-[repeat(auto-fit,minmax(100px,280px))] min-[1568px]:grid-cols-[repeat(auto-fit,minmax(100px,380px))] auto-rows-[240px] min-[1200px]:auto-rows-[280px] min-[1568px]:auto-rows-[360px] gap-4 justify-center">
      <img
        className="object-cover h-[65.7%] min-[1200px]:h-[67%] min-[1568px]:h-[68%] row-span-3"
        src={ImgGaleriaGrid1Xl}
        alt=""
      />
      <img
        className="col-start-2 row-start-2 col-span-2"
        src={ImgGaleriaGrid2Xl}
        alt=""
      />
      <img src={ImgGaleriaGrid3Xl} alt="" />
      <img className="justify-self-end" src={ImgGaleriaGrid4Xl} alt="" />
      <img
        className="object-cover h-[65.7%] min-[1200px]:h-[67%] min-[1568px]:h-[68%] row-span-3"
        src={ImgGaleriaGrid5Xl}
        alt=""
      />
    </div>
  );
};

export default GaleriaImg;
