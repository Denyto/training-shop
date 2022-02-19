import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { MENU } from "../../constants/const";
import classNames from "classnames";

function Nav() {
  const [isMenuOpen, toggleMenu] = useState(false);

  function toggleMenuMode(e) {
    document.body.classList.toggle("fixed");
    toggleMenu(!isMenuOpen);
  }

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
        <ul
          onClick={toggleMenuMode}
          className={classNames("menu", { visible: isMenuOpen })}
          data-test-id="menu"
        >
          {MENU.map(({ id, path }) => (
            <li key={id}>
              <Link
                to={`/${path}`}
                className="menu-item"
                data-test-id={`menu-link-${path}`}
              >
                {path
                  .split("")
                  .map((el, index) => (index === 0 ? el.toUpperCase() : el))
                  .join("")}
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
          <li>
            <span
              onClick={toggleMenuMode}
              className={classNames("hamburger", { rotate: isMenuOpen })}
            >
              <span className="hamburger-line"></span>
            </span>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
