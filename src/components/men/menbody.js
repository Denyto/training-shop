import { Link } from "react-router-dom";
import { DATA } from "../../constants/const";

function MenBody() {
  const { men } = DATA;
  return (
    <ul className="men__group products-page" data-test-id="products-page-men">
      {men.map(({ discount, file, id, price, title }) => (
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
                $ {price}.00<span>{discount ? `$ ${(price / (1 - discount / 100)).toFixed()}.00` : ""}</span>
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
      ))}
    </ul>
  );
}

export default MenBody;
