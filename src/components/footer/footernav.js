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
            <Link href="#" target="blank">
              INFORMATION
            </Link>
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
            <Link href="#" target="blank">
              FAQs
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link href="#" target="blank">
              USEFUL LINKS
            </Link>
          </li>
          <li>
            <Link href="#" target="blank">
              Terms & Conditions
            </Link>
          </li>
          <li>
            <Link href="#" target="blank">
              Returns & Exchanges
            </Link>
          </li>
          <li>
            <Link href="#" target="blank">
              Shipping & Delivery
            </Link>
          </li>
          <li>
            <Link href="#" target="blank">
              Privacy Policy
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link href="#" target="blank">
              CONTACT US
            </Link>
          </li>
          <li>
            <span className="footer-nav__map"></span>
            <Link href="#" target="blank">
              Belarus, Gomel, Lange 17
            </Link>
          </li>
          <li>
            <span className="footer-nav__phone"></span>
            <Link href="#" target="blank">
              +375 29 100 20 30
            </Link>
          </li>
          <li>
            <span className="footer-nav__clock"></span>
            <Link href="#" target="blank">
              All week 24/7
            </Link>
          </li>
          <li>
            <span className="footer-nav__email"></span>
            <Link href="#" target="blank">
              info@clevertec.ru
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FooterNav;
