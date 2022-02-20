// import React, { useRef,  useState} from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// import "swiper/css";
// import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Navigation } from "swiper";

export default function Slider() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide><img alt="banner" src={require("../../assets/img/banner.png")}></img></SwiperSlide>
        <SwiperSlide><img alt="banner" src={require("../../assets/img/banner.png")}></img></SwiperSlide>
        <SwiperSlide><img alt="banner" src={require("../../assets/img/banner.png")}></img></SwiperSlide>        
      </Swiper>
    </>
  );
}