import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

export default function SliderRelated({ data }) {
  
  return (
    <>
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: '.btn-related-next',
          prevEl: '.btn-related-prev',
          disabledClass: 'disable',
        }}
        breakpoints={{
          405: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          605: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          905: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        className="mySwiper"
        data-test-id="related-slider"
      >
        {data.map(({ discount, id, price, name, images }) => (
          <SwiperSlide key={id}>
            <li key={id}>
              <Link
                to={`/${data[0].category}/${id}`}
                className="cards-item"
                data-test-id="clothes-card-men"
              >
                <div className="men__group__foto">
                  {discount > 0 ? (
                    <div className="men__group__sale">-{discount}%</div>
                  ) : null}
                  <img
                    alt={name}
                    src={`https://training.cleverland.by/shop${images[0].url}`}
                  ></img>
                </div>
                <p>{name}</p>

                <div className="men__group__price">
                  <p>
                    $ {price}.00
                    <span>
                      {discount
                        ? `$ ${(price / (1 - discount / 100)).toFixed()}.00`
                        : ''}
                    </span>
                  </p>
                  <div className="men__group__review">
                    <img
                      alt="review"
                      src={require('../../assets/img/stars-review.png')}
                    ></img>
                  </div>
                </div>
              </Link>
            </li>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
