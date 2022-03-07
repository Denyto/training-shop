import React from 'react';
import { useState } from 'react';
import classNames from 'classnames';
import WomenBody from '../components/women/womenbody';
import Footer from '../components/footer/footer';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../constants/products';

function Womenpage() {
  let colorArr = [];
  let colorId = [];
  let sizeArr = [];

  PRODUCTS.women.forEach((elem) => {
    elem.images.forEach((item) => {
      colorArr.push(item.color);
      colorId.push(item.id);
    });
    elem.sizes.forEach((item) => {
      sizeArr.push(item);
    });
  });

  let [color, setColor] = useState([]);
  let [size, setSize] = useState([]);
  let [brand, setBrand] = useState([]);
  let [price, setPrice] = useState([]);
  const [isMenuShowed, setMenuShowed] = useState(false);

  function toggleMenuFilter(e) {
    setMenuShowed(!isMenuShowed);
  }

  // function selectPrice(e, arr) {
  //   if (e.target.checked) {
  //     let temp = [];
  //     e.target.labels[0].innerText
  //       .split('-')
  //       .forEach((elem) => temp.push(parseInt(elem.slice(1))));
  //     arr.push(temp.join('-'));
  //     setPrice(arr.map((elem) => elem));
  //   } else {
  //     arr.find(
  //       (item, index) =>
  //         e.target.labels[0].innerText === item && arr.splice(index, 1)
  //     );
  //     setPrice(arr.map((elem) => elem));
  //   }
  // }

  function selectFilter(e, arr) {
    if (e.target.checked) {
      arr.push(e.target.labels[0].innerText);
      e.currentTarget.dataset.filter === 'color'
        ? setColor(arr.map((elem) => elem))
        : e.currentTarget.dataset.filter === 'brand'
        ? setBrand(arr.map((elem) => elem))
        : e.currentTarget.dataset.filter === 'price'
        ? setPrice(arr.map((elem) => elem))
        : setSize(arr.map((elem) => elem));
    } else {
      arr.find((item, index) => e.target.labels[0].innerText === item && arr.splice(index, 1));
      e.currentTarget.dataset.filter === 'color'
        ? setColor(arr.map((elem) => elem))
        : e.currentTarget.dataset.filter === 'brand'
        ? setBrand(arr.map((elem) => elem))
        : e.currentTarget.dataset.filter === 'price'
        ? setPrice(arr.map((elem) => elem))
        : setSize(arr.map((elem) => elem));
    }
  }

  return (
    <div className="App">
      <div className="wrapper">
        <div className="women__route">
          <div className="women__route__name">
            <p>
              <Link to="/">Home</Link>
            </p>
            ►<p>Women</p>
          </div>
          <div className="women__route__share">
            <img alt="share" src={require('../assets/img/share.png')}></img>
            <p>Share</p>
          </div>
        </div>
        <h2 className="women__title">WOMEN</h2>
        <div className="women__filter">
          <div className="women__filter__icon" onClick={toggleMenuFilter}>
            <i>
              {!isMenuShowed ? (
                <img alt="share" src={require('../assets/img/filtericon.png')}></img>
              ) : (
                <img alt="share" src={require('../assets/img/x.png')}></img>
              )}
            </i>
            <p>FILTER</p>
          </div>
          <div className="women__filter__view">
            <i></i>
            <i></i>
          </div>
        </div>
        <div
          className={classNames('women__filtration', {
            showed: isMenuShowed,
          })}
        >
          <ul onChange={(e) => selectFilter(e, color)} data-filter="color">
            <li>COLOR</li>
            {Array.from(new Set(colorArr)).map((elem, index) => (
              <li key={elem}>
                <label htmlFor={colorId[index]}>
                  <input type="checkbox" id={colorId[index]} />
                  {elem}
                </label>
              </li>
            ))}
          </ul>
          <ul onChange={(e) => selectFilter(e, size)}>
            <li>SIZE</li>
            {Array.from(new Set(sizeArr)).map((elem) => (
              <li key={elem}>
                <label htmlFor={elem}>
                  <input type="checkbox" id={elem} />
                  {elem}
                </label>
              </li>
            ))}
          </ul>
          <ul onChange={(e) => selectFilter(e, brand)} data-filter="brand">
            <li>BRAND</li>
            {Array.from(new Set(PRODUCTS.women.map((elem) => elem.brand))).map((elem) => (
              <li key={elem}>
                <label htmlFor={elem}>
                  <input type="checkbox" id={elem} />
                  {elem}
                </label>
              </li>
            ))}
          </ul>
          <ul onChange={(e) => selectFilter(e, price)} data-filter="price">
            <li>PRICE</li>
            <li>
              <label>
                <input type="checkbox" />
                $1200+
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" />
                $600-$1200
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" />
                $300-$600
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" />
                $150-$300
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" data-price="50-150" />
                $50-$150
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" data-price="7-50" />
                $7-$50
              </label>
            </li>
          </ul>
        </div>
      </div>
      <div className="wrapper">
        <WomenBody color={color} size={size} brand={brand} price={price}></WomenBody>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Womenpage;
