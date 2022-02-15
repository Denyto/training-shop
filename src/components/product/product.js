import { Link, useParams } from "react-router-dom";
import { DATA } from "../../constants/const";
import Header from "../header/header";
import Footer from "../footer/footer";

function Product({type}) {
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
              <Link to={`/${type}`}>{type}</Link>
            </p>
            ►<p>{type === 'men' ? men[+id - 1].title : women[+id - 1].title}</p>
          </div>
          <div className="product__route__share">
            <Link to="#"></Link>
            <p>Share</p>
          </div>
        </div>
        <h2 className="product__title">
          {type === 'men' ? men[+id - 1].title : women[+id - 1].title}
        </h2>
        <div className="product__review">
          <div className="product__review__block">
            <div className="product__review__star">
              <img
                alt="review"
                src={require('../../assets/img/star.png')}
              ></img>
            </div>
            <div className="product__review__star">
              <img
                alt="review"
                src={require('../../assets/img/star.png')}
              ></img>
            </div>
            <div className="product__review__star">
              <img
                alt="review"
                src={require('../../assets/img/star.png')}
              ></img>
            </div>
            <div className="product__review__star">
              <img
                alt="review"
                src={require('../../assets/img/star.png')}
              ></img>
            </div>
            <div className="product__review__star">
              <img
                alt="review"
                src={require('../../assets/img/star.png')}
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
        <div className="product__main page-product" data-test-id={`page-product-${type}`}>
          <div className="product__main__item">
            <div className="product__main__item__1">
              <div className="product__main__item__foto">
                <div className="product__main__item__arrow">
                  <img
                    alt="arrow"
                    src={require('../../assets/img/arrowup.png')}
                  ></img>
                </div>
                <div className="product__main__item__arrow">
                  <img
                    alt="arrow"
                    src={require('../../assets/img/arrowdown.png')}
                  ></img>
                </div>
              </div>
              <div className="product__main__item__foto">
                <img
                  alt={men[+id - 1].title}
                  src={require('../../assets/img/categories/women/shirt.png')}
                ></img>
              </div>
              <div className="product__main__item__foto">
                <img
                  alt={men[+id - 1].title}
                  src={require('../../assets/img/categories/women/women1.png')}
                ></img>
              </div>
              <div className="product__main__item__foto">
                <img
                  alt={men[+id - 1].title}
                  src={require('../../assets/img/categories/women/women2.png')}
                ></img>
              </div>
              <div className="product__main__item__foto">
                <img
                  alt={men[+id - 1].title}
                  src={require('../../assets/img/categories/women/women3.png')}
                ></img>
              </div>
            </div>
            <div className="product__main__item__2">
              <img
                alt={men[+id - 1].title}
                src={require(`../../assets/img/categories/${
                  type === 'men'
                    ? 'men/' + men[+id - 1].file
                    : 'women/' + women[+id - 1].file
                }`)}
              ></img>
              <div className="product__main__item__2__slider">
                <div className="product__main__item__2__arrow">
                  <img
                    alt="arrow"
                    src={require('../../assets/img/arrowup.png')}
                  ></img>
                </div>
                <div className="product__main__item__2__arrow">
                  <img
                    alt="arrow"
                    src={require('../../assets/img/arrowdown.png')}
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
                  src={require('../../assets/img/categories/women/small1.png')}
                ></img>
              </div>
              <div className="product__main__description__foto">
                <img
                  alt={men[+id - 1].title}
                  src={require('../../assets/img/categories/women/small2.png')}
                ></img>
              </div>
              <div className="product__main__description__foto">
                <img
                  alt={men[+id - 1].title}
                  src={require('../../assets/img/categories/women/small3.png')}
                ></img>
              </div>
              <div className="product__main__description__foto">
                <img
                  alt={men[+id - 1].title}
                  src={require('../../assets/img/categories/women/small4.png')}
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
                  alt='hanger'
                  src={require('../../assets/img/hanger.png')}
                ></img>
              </div>
              <p>Size guide</p>
            </div>
            <hr></hr>
            <div className="product__main__description__flex">
              <div className="product__main__description__price">$ 379.99</div>
              <div className="product__main__description__name">eqary</div>
              <div className="product__main__description__name">erqty</div>
              <div className="product__main__description__name">et</div>
            </div>
          </div>

          <div className="product__main__item">3</div>
          <div className="product__main__item">4</div>
        </div>
      </div>
      <Footer></Footer>
    </>    
  );
}

export default Product;
