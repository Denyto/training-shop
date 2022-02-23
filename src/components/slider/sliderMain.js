import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

export default function SliderMain({ type }) {

  return (
    <>
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".btn-next",
          prevEl: ".btn-prev",
          disabledClass: "disable",
        }}
        className="mySwiper"
        data-test-id="main-slider"
      >
        {type.map((item, index) => (
          <SwiperSlide key={index}>
            <img alt="banner" src={require(`../../assets/img/${item}`)}></img>
          </SwiperSlide>
        ))}       
      </Swiper>
    </>
  );
}
