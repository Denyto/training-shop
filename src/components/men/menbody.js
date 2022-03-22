import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Rating from '../rating/rating';

function MenBody({ particular, color, size, brand, price }) {
  const PRODUCTS = useSelector((state) => state.fetchProducts.fetchProducts.products);

  let filter = PRODUCTS.men;

  if (color && color.length > 0) {
    filter = PRODUCTS.men.filter(
      (elem) =>
        elem.images.filter((em) => {
          if (color.includes(em.color)) {
            return em;
          } else return false;
        }).length > 0
    );
  }

  if (size && size.length > 0) {
    filter = filter.filter(
      (elem) =>
        elem.sizes.filter((em) => {
          if (size.includes(em)) {
            return em;
          } else return false;
        }).length > 0
    );
  }

  if (brand && brand.length > 0) {
    filter = filter.filter((elem) => brand.includes(elem.brand));
  }

  if (price && price.length > 0) {
    let selectedPrices = [];
    price.forEach((element) => {
      switch (element) {
        case '$0-$50':
          selectedPrices.push([0, 50]);
          break;
        case '$50-$100':
          selectedPrices.push([50, 100]);
          break;
        case '$100-$150':
          selectedPrices.push([100, 150]);
          break;
        case '$150-$200':
          selectedPrices.push([150, 200]);
          break;
        case '$200-$250':
          selectedPrices.push([200, 250]);
          break;
        case '$250+':
          selectedPrices.push([250, 10000]);
          break;
        default:
      }
    });

    filter = filter.filter(
      (elem) =>
        selectedPrices.filter((em) => {
          if (elem.price > em[0] && elem.price < em[1]) {
            return elem;
          } else {
            return false;
          }
        }).length > 0
    );
  }

  return (
    <>
      {!particular && (
        <div className="men__selected">
          <p>
            {filter.length === 1 ? `${filter.length} item found` : `${filter.length} items found`}
          </p>
          {size && size.length > 0 ? size.map((el) => <p key={el}>Size: {el}</p>) : ''}
          {color && color.length > 0 ? color.map((el) => <p key={el}>Color: {el}</p>) : ''}
          {price && price.length > 0 ? price.map((el) => <p key={el}>Price: {el}</p>) : ''}
          {brand && brand.length > 0 ? brand.map((el) => <p key={el}>Brand: {el}</p>) : ''}
        </div>
      )}
      <ul className="men__group products-page" data-test-id="products-page-men">
        {particular
          ? PRODUCTS.men
              .filter((item) => item.particulars[particular])
              .map(({ discount, id, price, name, images, rating }) => (
                <li key={id}>
                  <Link to={`/men/${id}`} className="cards-item" data-test-id="clothes-card-men">
                    <div className="men__group__foto">
                      {discount ? <div className="men__group__sale">{discount}</div> : null}
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
                            ? `$ ${(price / (1 - Math.abs(parseInt(discount)) / 100)).toFixed()}.00`
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
          : filter.map(({ discount, id, price, name, images, rating }) => (
              <li key={id}>
                <Link to={`/men/${id}`} className="cards-item" data-test-id="clothes-card-men">
                  <div className="men__group__foto">
                    {discount ? <div className="men__group__sale">{discount}</div> : null}
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
                          ? `$ ${(price / (1 - Math.abs(parseInt(discount)) / 100)).toFixed()}.00`
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
    </>
  );
}

export default MenBody;
