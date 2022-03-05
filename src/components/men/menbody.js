import { Link } from 'react-router-dom';
import { PRODUCTS } from '../../constants/products';
import Rating from '../rating/rating';

function MenBody({ particular }) {
  return (
    <ul className="men__group products-page" data-test-id="products-page-men">
      {particular
        ? PRODUCTS.men
            .filter((item) => item.particulars[particular])
            .map(({ discount, id, price, name, images, rating }) => (
              <li key={id}>
                <Link
                  to={`/men/${id}`}
                  className="cards-item"
                  data-test-id="clothes-card-men"
                >
                  <div className="men__group__foto">
                    {discount ? (
                      <div className="men__group__sale">{discount}</div>
                    ) : null}
                    <img
                      alt={name}
                      src={`https://training.cleverland.by/shop${images[0].url}`}
                    ></img>
                  </div>
                  <p>{name}</p>

                  <div className="men__group__price">
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
                    <div className="men__group__review">
                      <Rating rating={rating}></Rating>
                    </div>
                  </div>
                </Link>
              </li>
            ))
        : PRODUCTS.men.map(({ discount, id, price, name, images, rating }) => (
            <li key={id}>
              <Link
                to={`/men/${id}`}
                className="cards-item"
                data-test-id="clothes-card-men"
              >
                <div className="men__group__foto">
                  {discount ? (
                    <div className="men__group__sale">{discount}</div>
                  ) : null}
                  <img
                    alt={name}
                    src={`https://training.cleverland.by/shop${images[0].url}`}
                  ></img>
                </div>
                <p>{name}</p>

                <div className="men__group__price">
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
                  <div className="men__group__review">
                    <Rating rating={rating}></Rating>
                  </div>
                </div>
              </Link>
            </li>
          ))}
    </ul>
  );
}

export default MenBody;
