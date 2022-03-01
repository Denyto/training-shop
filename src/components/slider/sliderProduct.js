import React, { useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import { FreeMode, Navigation, Thumbs } from 'swiper';

export default function SliderProduct({ data }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);  

  return (
    <>
      <Swiper
        direction={'vertical'}
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
              src={require('../../assets/img/arrowup.png')}
            ></img>
          </div>
          <div className="product__main__item__arrow btn-product-next">
            <img
              alt="arrow"
              src={require('../../assets/img/arrowdown.png')}
            ></img>
          </div>
        </div>
        {data.map((elem) => (
          <SwiperSlide key={elem.id}>
            <img
              alt="product"
              src={`https://training.cleverland.by/shop${elem.url}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        navigation={{
          nextEl: '.btn-product-next',
          prevEl: '.btn-product-prev',
          disabledClass: 'disable',
        }}
        className="product__main__item__2"
        data-test-id="product-slider"
      >
        {data.map((elem) => (
          <SwiperSlide key={elem.id}>
            <img
              alt="product"
              src={`https://training.cleverland.by/shop${elem.url}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
