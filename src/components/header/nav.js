import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MENU } from '../../constants/const';
import classNames from 'classnames';
import Basket from '../basket/basket';
import { useSelector } from 'react-redux';

function Nav() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isVisible, setVisible] = useState(false);
  const [basketQuantity, setBasketQuantity] = useState(0);

  function toggleMenuMode() {
    if (getComputedStyle(document.querySelector('.hamburger')).display === 'inline-block') {
      document.body.classList.toggle('fixed');
      setMenuOpen(!isMenuOpen);
    }
  }

  function toggleBasketVisible() {
    document.body.classList.toggle('fixed');
    setVisible(!isVisible);
  }

  const quantity = useSelector((state) => state.products.products.length);
  useEffect(() => setBasketQuantity(quantity), [quantity]);

  return (
    <>
      <Basket isVisible={isVisible} callback={() => toggleBasketVisible()}></Basket>
      <nav className="navigation">
        <div className="wrapper navigation__wrapper">
          <h1 className="navigation__logo">
            <Link to="/" className="header-nav-logo" data-test-id="header-logo-link">
              CleverShop
            </Link>
          </h1>
          <ul
            onClick={toggleMenuMode}
            className={classNames('menu', { visible: isMenuOpen })}
            data-test-id="burger-menu"
          >
            {MENU.map(({ id, path, link }) => (
              <li key={id}>
                <Link to={`/${link}`} className="menu-item" data-test-id={`menu-link-${path}`}>
                  {path
                    .split('')
                    .map((el, index) => (index === 0 ? el.toUpperCase() : el))
                    .join('')}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="navigation__user">
            <li>
              <Link to="/" className="navigation__user__search"></Link>
            </li>
            <li>
              <Link to="/" className="navigation__user__planet"></Link>
            </li>
            <li>
              <Link to="/" className="navigation__user__person"></Link>
            </li>
            <li onClick={toggleBasketVisible} data-test-id="cart-button">
              <div className="navigation__user__basket">
                <div>{basketQuantity}</div>
              </div>
            </li>
            <li>
              <span
                onClick={toggleMenuMode}
                className={classNames('hamburger', { rotate: isMenuOpen })}
                data-test-id="burger-menu-btn"
              >
                <span className="hamburger-line"></span>
              </span>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Nav;
