import { Link } from 'react-router-dom';
import { PRODUCTS } from '../../constants/products';
import Rating from '../rating/rating';

function WomenBody({ data }) {
  return (
    <ul
      className="women__group products-page"
      data-test-id="products-page-women"
    >
      {PRODUCTS.women
        .filter((item) => item.particulars[data])
        .map(({ discount, id, price, name, images, rating }) => (
          <li key={id}>
            <Link
              to={`/women/${id}`}
              className="cards-item"
              data-test-id="clothes-card-women"
            >
              <div className="women__group__foto">
                {discount ? (
                  <div className="women__group__sale">{discount}</div>
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
                      ? `$ ${(
                          price /
                          (1 - Math.abs(parseInt(discount)) / 100)
                        ).toFixed()}.00`
                      : ''}
                  </span>
                </p>
                <div className="women__group__review">
                  <Rating rating={rating}></Rating>
                </div>
              </div>
            </Link>
          </li>
        ))}
    </ul>
  );
}

export default WomenBody;
