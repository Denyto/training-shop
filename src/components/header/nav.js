import { Link } from 'react-router-dom';
import { MENU } from '../../constants/const';

function Nav() {
  return (
    <nav className="navigation">
      <div className="wrapper navigation__wrapper">
        <h1 className="navigation__logo">
          <Link
            to="/"
            className="header-nav-logo"
            data-test-id="header-logo-link"
          >
            CleverShop
          </Link>
        </h1>
        <ul className="menu" data-test-id="menu">
          {MENU.map(({ id, path }) => (
            <li key={id}>
              <Link
                to={`/${path}`}
                className="menu-item"
                data-test-id={`menu-link-${path}`}
              >
                {path}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="navigation__user">
          <li>
            <Link
              to="#"
              className="navigation__user__search"
              target="blank"
            ></Link>
          </li>
          <li>
            <Link
              to="#"
              className="navigation__user__planet"
              target="blank"
            ></Link>
          </li>
          <li>
            <Link
              to="#"
              className="navigation__user__person"
              target="blank"
            ></Link>
          </li>
          <li>
            <Link
              to="#"
              className="navigation__user__basket"
              target="blank"
            ></Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
