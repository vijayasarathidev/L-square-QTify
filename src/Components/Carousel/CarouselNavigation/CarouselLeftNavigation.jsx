import React from "react";
import { useSwiper } from "swiper/react";
import Left from "../../../Assets/Left.png";

function CarouselLeftNavigation() {
  const swiper = useSwiper();

  return (
    <div
      onClick={() => {
        swiper.slidePrev();
      }}
      style={{
        position: "absolute",
        top: "40%",
        left: 0,
        zIndex: 10,
        transform: "translateY(-50%)",
      }}
    >
      <img src={Left} alt="logo" style={{ cursor: "pointer" }} />
    </div>
  );
}

export default CarouselLeftNavigation;
