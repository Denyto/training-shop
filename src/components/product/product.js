import { Link, useParams } from "react-router-dom";
import { DATA } from "../../constants/const";
import Header from "../header/header";
import Footer from "../footer/footer";

function Product({ type }) {
  const { id } = useParams();
  const { men, women } = DATA;
  console.log();
  return (
    <>
      <Header></Header>
      <div className="wrapper">
        <div className="product__route">
          <div className="product__route__name">
            <p>
              <Link to="/">Home</Link>
            </p>
            ►
            <p>
              <Link to={`/${type}`}>
                {type
                  .split("")
                  .map((el, index) => (index === 0 ? el.toUpperCase() : el))
                  .join("")}
              </Link>
            </p>
            ►<p>{type === "men" ? men[+id - 1].title : women[+id - 1].title}</p>
          </div>
          <div className="product__route__share">
            <img alt="share" src={require("../../assets/img/share.png")}></img>
            <p>Share</p>
          </div>
        </div>
        <h2 className="product__title">
          {type === "men" ? men[+id - 1].title : women[+id - 1].title}
        </h2>
        <div className="product__review">
          <div className="product__review__block">
            <div className="product__review__star">
              <img
                alt="review"
                src={require("../../assets/img/star.png")}
              ></img>
            </div>
            <div className="product__review__star">
              <img
                alt="review"
                src={require("../../assets/img/star.png")}
              ></img>
            </div>
            <div className="product__review__star">
              <img
                alt="review"
                src={require("../../assets/img/star.png")}
              ></img>
            </div>
            <div className="product__review__star">
              <img
                alt="review"
                src={require("../../assets/img/star.png")}
              ></img>
            </div>
            <div className="product__review__star">
              <img
                alt="review"
                src={require("../../assets/img/star.png")}
              ></img>
            </div>
            <p>2 Reviews</p>
          </div>
          <div className="product__review__block">
            <p>
              SKU: <span>777</span>
            </p>
            <p>
              Availability: <span>In Stock</span>
            </p>
          </div>
        </div>
        <div
          className="product__main page-product"
          data-test-id={`page-product-${type}`}
        >
          <div className="product__main__item">
            <div className="product__main__item__1">
              <div className="product__main__item__foto">
                <div className="product__main__item__arrow">
                  <img
                    alt="arrow"
                    src={require("../../assets/img/arrowup.png")}
                  ></img>
                </div>
                <div className="product__main__item__arrow">
                  <img
                    alt="arrow"
                    src={require("../../assets/img/arrowdown.png")}
                  ></img>
                </div>
              </div>
              <div className="product__main__item__foto">
                <img
                  alt={men[+id - 1].title}
                  src={require("../../assets/img/categories/women/shirt.png")}
                ></img>
              </div>
              <div className="product__main__item__foto">
                <img
                  alt={men[+id - 1].title}
                  src={require("../../assets/img/categories/women/women1.png")}
                ></img>
              </div>
              <div className="product__main__item__foto">
                <img
                  alt={men[+id - 1].title}
                  src={require("../../assets/img/categories/women/women2.png")}
                ></img>
              </div>
              <div className="product__main__item__foto">
                <img
                  alt={men[+id - 1].title}
                  src={require("../../assets/img/categories/women/women3.png")}
                ></img>
              </div>
            </div>
            <div className="product__main__item__2">
              <img
                alt={men[+id - 1].title}
                src={require(`../../assets/img/categories/${
                  type === "men"
                    ? "men/" + men[+id - 1].file
                    : "women/" + women[+id - 1].file
                }`)}
              ></img>
              <div className="product__main__item__2__slider">
                <div className="product__main__item__2__arrow">
                  <img
                    alt="arrow"
                    src={require("../../assets/img/arrowup.png")}
                  ></img>
                </div>
                <div className="product__main__item__2__arrow">
                  <img
                    alt="arrow"
                    src={require("../../assets/img/arrowdown.png")}
                  ></img>
                </div>
              </div>
            </div>
          </div>
          <div className="product__main__item product__main__description">
            <p>
              COLOR: <span>Blue</span>
            </p>
            <div className="product__main__description__flex">
              <div className="product__main__description__foto">
                <img
                  alt={men[+id - 1].title}
                  src={require("../../assets/img/categories/women/small1.png")}
                ></img>
              </div>
              <div className="product__main__description__foto">
                <img
                  alt={men[+id - 1].title}
                  src={require("../../assets/img/categories/women/small2.png")}
                ></img>
              </div>
              <div className="product__main__description__foto">
                <img
                  alt={men[+id - 1].title}
                  src={require("../../assets/img/categories/women/small3.png")}
                ></img>
              </div>
              <div className="product__main__description__foto">
                <img
                  alt={men[+id - 1].title}
                  src={require("../../assets/img/categories/women/small4.png")}
                ></img>
              </div>
            </div>
            <p>
              SIZE: <span>S</span>
            </p>
            <div className="product__main__description__flex">
              <div className="product__main__description__size">XS</div>
              <div className="product__main__description__size">S</div>
              <div className="product__main__description__size">M</div>
              <div className="product__main__description__size">L</div>
            </div>
            <div className="product__main__description__flex">
              <div className="product__main__description__sizeguide">
                <img
                  alt="hanger"
                  src={require("../../assets/img/hanger.png")}
                ></img>
              </div>
              <p>Size guide</p>
            </div>
            <hr></hr>
            <div className="product__main__description__flex">
              <div className="product__main__description__price">
                $ {type === "men" ? men[+id - 1].price : women[+id - 1].price}
              </div>
              <button>ADD TO CARD</button>
              <div className="product__main__description__name">
                <img
                  alt="like"
                  src={require("../../assets/img/like.png")}
                ></img>
              </div>
              <div className="product__main__description__name">
                <img
                  alt="scales"
                  src={require("../../assets/img/scales.png")}
                ></img>
              </div>
            </div>
            <hr></hr>
            <div className="product__main__description__ship">
              <img
                alt="truck"
                src={require("../../assets/img/truck 1.png")}
              ></img>
              <p>Shipping & Delivery</p>
              <img
                alt="refresh"
                src={require("../../assets/img/refresh 1.png")}
              ></img>
              <p>Shipping & Delivery</p>
              <img
                alt="mail"
                src={require("../../assets/img/mail 1.png")}
              ></img>
              <p>Shipping & Delivery</p>
            </div>
            <div className="product__main__description__guarant">
              <p>GUARANTEED SAFE CHECKOUT</p>
              <hr></hr>
            </div>

            <div className="product__main__description__payments">
              <div>
                <img
                  alt="Stripe"
                  src={require("../../assets/img/Stripe_x42.png")}
                ></img>
              </div>
              <div>
                <img
                  alt="aes"
                  src={require("../../assets/img/AES256_x42.png")}
                ></img>
              </div>
              <div>
                <img
                  alt="paypal"
                  src={require("../../assets/img/paypal_2_x42.png")}
                ></img>
              </div>
              <div>
                <img
                  alt="visa"
                  src={require("../../assets/img/visa_x42.png")}
                ></img>
              </div>
              <div>
                <img
                  alt="mastercard"
                  src={require("../../assets/img/mastercard_x42.png")}
                ></img>
              </div>
              <div>
                <img
                  alt="discover"
                  src={require("../../assets/img/discover_x42.png")}
                ></img>
              </div>
              <div>
                <img
                  alt="american-express"
                  src={require("../../assets/img/american-express_x42.png")}
                ></img>
              </div>
            </div>
          </div>

          <div className="product__main__item"></div>
          <div className="product__main__item product__main__info">
            <hr></hr>
            <p>DESCRIPTION</p>
            <hr></hr>
            <h4>ADDITIONAL INFORMATION</h4>
            <p>
              <span>Color:</span>&nbsp;Blue, White, Black, Grey
            </p>
            <p>
              <span>Size:</span>&nbsp;XS, S, M, L
            </p>
            <p>
              <span>Material:</span>&nbsp;100% Polyester
            </p>
            <hr></hr>
            <h4>REVIEWS</h4>
            <div className="product__main__info__element">
              <div className="product__review__block">
                <div className="product__review__star">
                  <img
                    alt="review"
                    src={require("../../assets/img/star.png")}
                  ></img>
                </div>
                <div className="product__review__star">
                  <img
                    alt="review"
                    src={require("../../assets/img/star.png")}
                  ></img>
                </div>
                <div className="product__review__star">
                  <img
                    alt="review"
                    src={require("../../assets/img/star.png")}
                  ></img>
                </div>
                <div className="product__review__star">
                  <img
                    alt="review"
                    src={require("../../assets/img/star.png")}
                  ></img>
                </div>
                <div className="product__review__star">
                  <img
                    alt="review"
                    src={require("../../assets/img/star.png")}
                  ></img>
                </div>
                <p>2 Reviews</p>
              </div>
              <div>Write a review</div>
            </div>
            <div className="product__main__info__element">
              <h4>Oleh Chabanov</h4>
              <div className="product__review__block">
                <div className="product__review__star">
                  <img
                    alt="review"
                    src={require("../../assets/img/star.png")}
                  ></img>
                </div>
                <div className="product__review__star">
                  <img
                    alt="review"
                    src={require("../../assets/img/star.png")}
                  ></img>
                </div>
                <div className="product__review__star">
                  <img
                    alt="review"
                    src={require("../../assets/img/star.png")}
                  ></img>
                </div>
                <div className="product__review__star">
                  <img
                    alt="review"
                    src={require("../../assets/img/star.png")}
                  ></img>
                </div>
                <div className="product__review__star">
                  <img
                    alt="review"
                    src={require("../../assets/img/star.png")}
                  ></img>
                </div>
              </div>
            </div>
            <p>
              On the other hand, we denounce with righteous indignation and like
              men who are so beguiled and demoralized by the charms of pleasure
              of the moment
            </p>
            <div className="product__main__info__element">
              <h4>ShAmAn design</h4>
              <div className="product__review__block">
                <div className="product__review__star">
                  <img
                    alt="review"
                    src={require("../../assets/img/star.png")}
                  ></img>
                </div>
                <div className="product__review__star">
                  <img
                    alt="review"
                    src={require("../../assets/img/star.png")}
                  ></img>
                </div>
                <div className="product__review__star">
                  <img
                    alt="review"
                    src={require("../../assets/img/star.png")}
                  ></img>
                </div>
                <div className="product__review__star">
                  <img
                    alt="review"
                    src={require("../../assets/img/star.png")}
                  ></img>
                </div>
                <div className="product__review__star">
                  <img
                    alt="review"
                    src={require("../../assets/img/star.png")}
                  ></img>
                </div>
              </div>
            </div>
            <p>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti
            </p>
            <hr></hr>
          </div>
        </div>
        <div className="product__related">
          <div>
            <h2>RELATED PRODUCTS</h2>
          </div>
          <div className="product__related__arrows">
            <img
              alt="arrow"
              src={require("../../assets/img/arrowup.png")}
            ></img>

            <img
              alt="arrow"
              src={require("../../assets/img/arrowdown.png")}
            ></img>
          </div>
        </div>
        <ul className="men__group">
          {men.map(({ discount, file, id, price, title }, index) =>
            index < 4 ? (
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
            ) : null
          )}
        </ul>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Product;
