import { Link, useParams } from 'react-router-dom';
import { PRODUCTS } from '../../constants/products';
import Footer from '../footer/footer';
import Rating from '../rating/rating';
import SliderProduct from '../slider/sliderProduct';
import SliderRelated from '../slider/sliderRelated';

function Product({ type }) {
  const { id } = useParams();
  const { name, price, images, reviews, rating, material, sizes } = PRODUCTS[type].filter(
    (elem) => elem.id === id
  )[0];
  console.log(PRODUCTS[type].filter((elem) => elem.id === id)[0]);
  return (
    <>
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
                  .split('')
                  .map((el, index) => (index === 0 ? el.toUpperCase() : el))
                  .join('')}
              </Link>
            </p>
            ►<p>{name}</p>
          </div>
          <div className="product__route__share">
            <img alt="share" src={require('../../assets/img/share.png')}></img>
            <p>Share</p>
          </div>
        </div>
        <h2 className="product__title">{name}</h2>
        <div className="product__review">
          <div className="product__review__block">
            <Rating rating={rating}></Rating>
            <p>{reviews.length} Reviews</p>
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
        <div className="product__main page-product" data-test-id={`page-product-${type}`}>
          <div className="product__main__item product__slider">
            <SliderProduct data={images}></SliderProduct>
            <div className="product__main__item__2__slider">
              <div className="product__main__item__2__arrow btn-product-prev">
                <img alt="arrow" src={require('../../assets/img/arrowup.png')}></img>
              </div>
              <div className="product__main__item__2__arrow btn-product-next">
                <img alt="arrow" src={require('../../assets/img/arrowdown.png')}></img>
              </div>
            </div>
          </div>
          <div className="product__main__item product__main__description">
            <p>
              COLOR: <span>Blue</span>
            </p>
            <div className="product__main__description__flex">
              <div className="product__main__description__foto">
                <img alt={name} src={require('../../assets/img/categories/women/small1.png')}></img>
              </div>
              <div className="product__main__description__foto">
                <img alt={name} src={require('../../assets/img/categories/women/small2.png')}></img>
              </div>
              <div className="product__main__description__foto">
                <img alt={name} src={require('../../assets/img/categories/women/small3.png')}></img>
              </div>
              <div className="product__main__description__foto">
                <img alt={name} src={require('../../assets/img/categories/women/small4.png')}></img>
              </div>
            </div>
            <p>SIZE:</p>
            <div className="product__main__description__flex">
              {sizes.map((el) => (
                <div className="product__main__description__size" key={el}>
                  {el}
                </div>
              ))}
            </div>
            <div className="product__main__description__flex">
              <div className="product__main__description__sizeguide">
                <img alt="hanger" src={require('../../assets/img/hanger.png')}></img>
              </div>
              <p>Size guide</p>
            </div>
            <hr></hr>
            <div className="product__main__description__flex">
              <div className="product__main__description__price">$ {price}</div>
              <button>ADD TO CARD</button>
              <div className="product__main__description__name">
                <img alt="like" src={require('../../assets/img/like.png')}></img>
              </div>
              <div className="product__main__description__name">
                <img alt="scales" src={require('../../assets/img/scales.png')}></img>
              </div>
            </div>
            <hr></hr>
            <div className="product__main__description__ship">
              <img alt="truck" src={require('../../assets/img/truck 1.png')}></img>
              <p>Shipping & Delivery</p>
              <img alt="refresh" src={require('../../assets/img/refresh 1.png')}></img>
              <p>Shipping & Delivery</p>
              <img alt="mail" src={require('../../assets/img/mail 1.png')}></img>
              <p>Shipping & Delivery</p>
            </div>
            <div className="product__main__description__guarant">
              <p>GUARANTEED SAFE CHECKOUT</p>
              <hr></hr>
            </div>

            <div className="product__main__description__payments">
              <div>
                <img alt="Stripe" src={require('../../assets/img/Stripe_x42.png')}></img>
              </div>
              <div>
                <img alt="aes" src={require('../../assets/img/AES256_x42.png')}></img>
              </div>
              <div>
                <img alt="paypal" src={require('../../assets/img/paypal_2_x42.png')}></img>
              </div>
              <div>
                <img alt="visa" src={require('../../assets/img/visa_x42.png')}></img>
              </div>
              <div>
                <img alt="mastercard" src={require('../../assets/img/mastercard_x42.png')}></img>
              </div>
              <div>
                <img alt="discover" src={require('../../assets/img/discover_x42.png')}></img>
              </div>
              <div>
                <img
                  alt="american-express"
                  src={require('../../assets/img/american-express_x42.png')}
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
              <span>Color:</span>&nbsp;
              {new Set(images.map((el, index) => (index > 0 ? `, ${el.color}` : `${el.color}`)))}
            </p>
            <p>
              <span>Size:</span>&nbsp;
              {sizes.map((el, index) => (index > 0 ? `, ${el}` : `${el}`))}
            </p>
            <p>
              <span>Material:</span>&nbsp;{material}
            </p>
            <hr></hr>
            <h4>REVIEWS</h4>
            <div className="product__main__info__element">
              <div className="product__review__block">
                <Rating rating={rating}></Rating>
                <p>{reviews.length} Reviews</p>
              </div>
              <div>Write a review</div>
            </div>
            {reviews.map((el) => (
              <div key={el.id}>
                <div className="product__main__info__element">
                  <h4>{el.name}</h4>
                  <div className="product__review__block">
                    <Rating rating={el.rating}></Rating>
                  </div>
                </div>
                <p>{el.text}</p>
              </div>
            ))}
            <hr></hr>
          </div>
        </div>
        <div className="product__related">
          <div>
            <h2>RELATED PRODUCTS</h2>
          </div>
          <div className="product__related__arrows">
            <div className="btn-related-prev">
              <img alt="arrow" src={require('../../assets/img/arrowup.png')}></img>
            </div>
            <div className="btn-related-next">
              <img alt="arrow" src={require('../../assets/img/arrowdown.png')}></img>
            </div>
          </div>
        </div>
        <ul className="men__group">
          <SliderRelated data={PRODUCTS[type]}></SliderRelated>
        </ul>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Product;
