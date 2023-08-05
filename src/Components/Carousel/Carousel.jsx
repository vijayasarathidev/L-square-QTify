import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import CarouselLeftNavigation from "./CarouselNavigation/CarouselLeftNavigation";
import CarouselRightNavigation from "./CarouselNavigation/CarouselRightNavigation";

function Carousel({ data, renderComponent }) {
  return (
    <Swiper
      grabCursor
      spaceBetween={40}
      slidesPerView={"auto"}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <CarouselLeftNavigation />
      {data.map((ele) => (
        <SwiperSlide> {renderComponent(ele)}</SwiperSlide>
      ))}
      <CarouselRightNavigation />
    </Swiper>
  );
}

export default Carousel;
