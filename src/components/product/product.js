import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';
import { PRODUCTS } from '../../constants/products';
import Rating from '../rating/rating';
import SliderProduct from '../slider/sliderProduct';
import SliderRelated from '../slider/sliderRelated';
import { connect } from 'react-redux';
import { addProduct } from '../redux/actions';

function Product({ type, addProduct }) {
  const { id } = useParams();
  const { name, price, images, reviews, rating, material, sizes } = PRODUCTS[type].filter(
    (elem) => elem.id === id
  )[0];

  let uniqueColors = [];
  let uniqueImages = [];

  images.forEach((el) => {
    if (!uniqueColors.includes(el.color)) {
      uniqueColors.push(el.color);
      uniqueImages.push(el);
    }
  });

  const [color, setColor] = useState(uniqueColors[0]);
  const [size, setSize] = useState(sizes[0]);

  function selectColor(e) {
    setColor(e.target.getAttribute('alt'));
  }

  function selectSize(e) {
    setSize(e.target.innerText);
  }

  function changeState() {
    addProduct({
      name: name,
      price: price,
      sizes: size,
      id: Date.now(),
      color: color,
      image: images.find((el) => el.color === color),
      quantity: 1,
    });
  }

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
              COLOR: <span>{color}</span>
            </p>
            <div className="product__main__description__flex">
              {uniqueImages.map((elem, index) => (
                <div
                  className={
                    index === 0
                      ? 'product__main__description__foto selected'
                      : 'product__main__description__foto'
                  }
                  key={elem.id}
                  onClick={(e) => {
                    selectColor(e);
                    document
                      .querySelectorAll('.product__main__description__foto')
                      .forEach((el) => el.classList.remove('selected'));
                    e.currentTarget.classList.add('selected');
                  }}
                >
                  <img
                    alt={elem.color}
                    src={`https://training.cleverland.by/shop${elem.url}`}
                  ></img>
                </div>
              ))}
            </div>
            <p>
              SIZE: <span>{size}</span>
            </p>
            <div className="product__main__description__flex">
              {sizes.map((el, index) => (
                <div
                  className={
                    index === 0
                      ? 'product__main__description__size selected'
                      : 'product__main__description__size'
                  }
                  key={el}
                  onClick={(e) => {
                    selectSize(e);
                    document
                      .querySelectorAll('.product__main__description__size')
                      .forEach((el) => el.classList.remove('selected'));
                    e.currentTarget.classList.add('selected');
                  }}
                >
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
              <button onClick={changeState}>ADD TO CARD</button>
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
    </>
  );
}

const mapDispatchToProp = { addProduct };

export default connect(null, mapDispatchToProp)(Product);
