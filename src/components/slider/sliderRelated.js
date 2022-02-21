import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

export default function SliderRelated({ data }) {
  return (
    <>
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".btn-related-next",
          prevEl: ".btn-related-prev",
          disabledClass: "disable",
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
      >
        {data.map(({ discount, file, id, price, title }) => (
          <SwiperSlide key={id}>
            <li key={id}>
              <Link
                to={`/men/${id}`}
                className="cards-item"
                data-test-id="clothes-card-men"
              >
                <div className="men__group__foto">
                  {discount > 0 ? (
                    <div className="men__group__sale">-{discount}%</div>
                  ) : null}
                  <img
                    alt={title}
                    src={require(`../../assets/img/categories/men/${file}`)}
                  ></img>
                </div>
                <p>{title}</p>

                <div className="men__group__price">
                  <p>
                    $ {price}.00
                    <span>
                      {discount
                        ? `$ ${(price / (1 - discount / 100)).toFixed()}.00`
                        : ""}
                    </span>
                  </p>
                  <div className="men__group__review">
                    <img
                      alt="review"
                      src={require("../../assets/img/stars-review.png")}
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
