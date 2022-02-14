import { Link } from "react-router-dom";
import { MENU } from "../../constants/const";

function FooterNav() {
  return (
    <div className="footer-nav">
      <div className="wrapper footer-nav__wrapper">
        <ul>
          <li>
            <a href="#" target="blank">
              CATEGORIES
            </a>
          </li>
          {MENU.map(({ id, path }, index) =>
            index < 4 ? (
              <li key={id}>
                <Link
                  className="menu-item"
                  data-test-id={`menu-link-${path}`}
                  to={`/${path}`}
                >
                  {path}
                </Link>
              </li>
            ) : null
          )}
        </ul>
        <ul>
          <li>
            <a href="#" target="blank">
              INFORMATION
            </a>
          </li>
          {MENU.map(({ id, path }, index) =>
            index >= 4 ? (
              <li key={id}>
                <Link
                  className="menu-item"
                  data-test-id={`menu-link-${path}`}
                  to={`/${path}`}
                >
                  {path}
                </Link>
              </li>
            ) : null
          )}
          <li>
            <a href="#" target="blank">
              FAQs
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#" target="blank">
              USEFUL LINKS
            </a>
          </li>
          <li>
            <a href="#" target="blank">
              Terms & Conditions
            </a>
          </li>
          <li>
            <a href="#" target="blank">
              Returns & Exchanges
            </a>
          </li>
          <li>
            <a href="#" target="blank">
              Shipping & Delivery
            </a>
          </li>
          <li>
            <a href="#" target="blank">
              Privacy Policy
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#" target="blank">
              CONTACT US
            </a>
          </li>
          <li>
            <span className="footer-nav__map"></span>
            <a href="#" target="blank">
              Belarus, Gomel, Lange 17
            </a>
          </li>
          <li>
            <span className="footer-nav__phone"></span>
            <a href="#" target="blank">
              +375 29 100 20 30
            </a>
          </li>
          <li>
            <span className="footer-nav__clock"></span>
            <a href="#" target="blank">
              All week 24/7
            </a>
          </li>
          <li>
            <span className="footer-nav__email"></span>
            <a href="#" target="blank">
              info@clevertec.ru
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FooterNav;
