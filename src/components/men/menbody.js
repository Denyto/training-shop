import { Link } from "react-router-dom";
import { DATA } from "../../constants/const";

function MenBody() {
  const { men } = DATA;
  return (
    <ul className="men__group clothes" data-test-id="clothes-men">
      {men.map(({ discount, file, id, price, title }) => (
        <li key={id}>
          <Link to={`/men/${id}`}>
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
            <div>
              <div className="men__group__price">$ {price}.00</div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default MenBody;
