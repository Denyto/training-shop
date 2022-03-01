import { Link } from 'react-router-dom';
import { PRODUCTS } from '../../constants/products';

function WomenBody({ data }) {
  return (
    <ul
      className="women__group products-page"
      data-test-id="products-page-women"
    >
      {PRODUCTS.women
        .filter((item) => item.particulars[data])
        .map(({ discount, id, price, name, images }) => (
          <li key={id}>
            <Link
              to={`/women/${id}`}
              className="cards-item"
              data-test-id="clothes-card-women"
            >
              <div className="women__group__foto">
                {discount > 0 ? (
                  <div className="women__group__sale">-{discount}%</div>
                ) : null}
                <img
                  alt={name}
                  src={`https://training.cleverland.by/shop${images[0].url}`}
                ></img>
              </div>
              <p>{name}</p>
              <div className="women__group__price">
                <p>
                  $ {price}
                  <span>
                    {discount
                      ? `$ ${(price / (1 - discount / 100)).toFixed()}.00`
                      : ''}
                  </span>
                </p>
                <div className="women__group__review">
                  <img
                    alt="review"
                    src={require('../../assets/img/stars-review.png')}
                  ></img>
                </div>
              </div>
            </Link>
          </li>
        ))}
    </ul>
  );
}

export default WomenBody;
