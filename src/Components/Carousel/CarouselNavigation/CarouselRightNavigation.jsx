import React from "react";
import { useSwiper } from "swiper/react";
import Right from "../../../Assets/Right.png";

function CarouselRightNavigation() {
  const swiper = useSwiper();

  return (
    <div
      onClick={() => {
        swiper.slideNext();
      }}
      style={{
        position: "absolute",
        top: "40%",
        right: 0,
        zIndex: 10,
        transform: "translateY(-50%)",
      }}
    >
      <img src={Right} alt="logo" style={{ cursor: "pointer" }} />
    </div>
  );
}

export default CarouselRightNavigation;
