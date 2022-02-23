import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// import "swiper/css";
// import "swiper/css/free-mode";
import "swiper/css/navigation";
// import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";

export default function SliderProduct({ type }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        direction={"vertical"}
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="productSlider"
        data-test-id="product-slider"
      >
        <div className="product__main__item__foto">
          <div className="product__main__item__arrow btn-product-prev">
            <img
              alt="arrow"
              src={require("../../assets/img/arrowup.png")}
            ></img>
          </div>
          <div className="product__main__item__arrow btn-product-next">
            <img
              alt="arrow"
              src={require("../../assets/img/arrowdown.png")}
            ></img>
          </div>
        </div>
        <SwiperSlide>
          <img
            alt="product"
            src={require("../../assets/img/categories/men/men-4.jpg")}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            alt="product"
            src={require("../../assets/img/categories/men/men-4.jpg")}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            alt="product"
            src={require("../../assets/img/categories/men/men-4.jpg")}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            alt="product"
            src={require("../../assets/img/categories/men/men-4.jpg")}
          />
        </SwiperSlide>
      </Swiper>

      <Swiper
        spaceBetween={10}
        // navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        navigation={{
          nextEl: ".btn-product-next",
          prevEl: ".btn-product-prev",
          disabledClass: "disable",
        }}
        className="product__main__item__2"
        data-test-id="product-slider"
      >
        
        <SwiperSlide>
          <img
            alt="product"
            src={require("../../assets/img/categories/men/men-4.jpg")}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            alt="product"
            src={require("../../assets/img/categories/men/men-4.jpg")}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            alt="product"
            src={require("../../assets/img/categories/men/men-4.jpg")}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            alt="product"
            src={require("../../assets/img/categories/men/men-4.jpg")}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
