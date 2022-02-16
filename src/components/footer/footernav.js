import { Link } from "react-router-dom";
import { MENU } from "../../constants/const";

function FooterNav() {
  return (
    <div className="footer-nav">
      <div className="wrapper footer-nav__wrapper">
        <ul>
          <li>
            <Link to="#" target="blank">
              CATEGORIES
            </Link>
          </li>
          {MENU.map(({ id, path }, index) =>
            index < 4 ? (
              <li key={id}>
                <Link
                  data-test-id={`footer-nav-link-${path}`}
                  to={`/${path}`}
                >
                  {path.split('').map((el, index) => index === 0 ? el.toUpperCase() : el).join('')}
                </Link>
              </li>
            ) : null
          )}
        </ul>
        <ul>
          <li>
            <Link to="#" target="blank">
              INFORMATION
            </Link>
          </li>
          {MENU.map(({ id, path }, index) =>
            index >= 4 ? (
              <li key={id}>
                <Link
                  data-test-id={`footer-nav-link-${path}`}
                  to={`/${path}`}
                >
                  {path.split('').map((el, index) => index === 0 ? el.toUpperCase() : el).join('')}
                </Link>
              </li>
            ) : null
          )}
          <li>
            <Link to="#" target="blank">
              FAQs
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="#" target="blank">
              USEFUL LINKS
            </Link>
          </li>
          <li>
            <Link to="#" target="blank">
              Terms & Conditions
            </Link>
          </li>
          <li>
            <Link to="#" target="blank">
              Returns & Exchanges
            </Link>
          </li>
          <li>
            <Link to="#" target="blank">
              Shipping & Delivery
            </Link>
          </li>
          <li>
            <Link to="#" target="blank">
              Privacy Policy
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="#" target="blank">
              CONTACT US
            </Link>
          </li>
          <li>
            <span className="footer-nav__map"></span>
            <Link to="#" target="blank">
              Belarus, Gomel, Lange 17
            </Link>
          </li>
          <li>
            <span className="footer-nav__phone"></span>
            <Link to="#" target="blank">
              +375 29 100 20 30
            </Link>
          </li>
          <li>
            <span className="footer-nav__clock"></span>
            <Link to="#" target="blank">
              All week 24/7
            </Link>
          </li>
          <li>
            <span className="footer-nav__email"></span>
            <Link to="#" target="blank">
              info@clevertec.ru
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FooterNav;
