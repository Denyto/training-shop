import { Link } from "react-router-dom";
import { DATA } from "../../constants/const";

function WomenBody() {
  const { women } = DATA;
  return (
    <ul className="women__group products-page" data-test-id="products-page-women">
      {women.map(({ discount, file, id, price, title }) => (
        <li key={id}>
          <Link to={`/women/${id}`} className="cards-item" data-test-id="clothes-card-women">
            <div className="women__group__foto">
              {discount > 0 ? (
                <div className="women__group__sale">-{discount}%</div>
              ) : null}
              <img
                alt={title}
                src={require(`../../assets/img/categories/women/${file}`)}
              ></img>
            </div>
            <p>{title}</p>
            <div className="women__group__price">
              <p>$ {price}.00</p>
              <div className="women__group__review">
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

export default WomenBody;
