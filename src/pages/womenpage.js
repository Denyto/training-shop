import React from 'react';
import { useState } from 'react';
import WomenBody from '../components/women/womenbody';
import Footer from '../components/footer/footer';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../constants/products';

function Womenpage() {
  let [color, setColor] = useState([]);
  let [size, setSize] = useState([]);

  function selectColor(e) {
    if (e.target.checked) {
      color.push(e.target.labels[0].innerText);
      setColor(color.map((elem) => elem));
    } else {
      color.find(
        (item, index) =>
          e.target.labels[0].innerText === item && color.splice(index, 1)
      );
      setColor(color.map((elem) => elem));
    }
  }

  function selectSize(e) {
    if (e.target.checked) {
      size.push(e.target.labels[0].innerText);
      setSize(size.map((elem) => elem));
    } else {
      size.find(
        (item, index) =>
          e.target.labels[0].innerText === item && size.splice(index, 1)
      );
      setSize(size.map((elem) => elem));
    }
  }

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
          <div className="women__filter__icon">
            <i></i>
            <p>FILTER</p>
          </div>
          <div className="women__filter__view">
            <i></i>
            <i></i>
          </div>
        </div>
        <div className="women__filtration showed">
          <ul onChange={selectColor}>
            {Array.from(new Set(colorArr)).map((elem, index) => (
              <li key={elem}>
                <label htmlFor={colorId[index]}>
                  <input type="checkbox" id={colorId[index]} />
                  {elem}
                </label>
              </li>
            ))}
          </ul>
          <ul onChange={selectSize}>
            {Array.from(new Set(sizeArr)).map((elem) => (
              <li key={elem}>
                <label htmlFor={elem}>
                  <input type="checkbox" id={elem} />
                  {elem}
                </label>
              </li>
            ))}
          </ul>
          <ul>
            {Array.from(new Set(PRODUCTS.women.map((elem) => elem.brand))).map(
              (elem) => (
                <li key={elem}>
                  <label htmlFor={elem}>
                    <input type="checkbox" id={elem} />
                    {elem}
                  </label>
                </li>
              )
            )}
          </ul>
          <ul>
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
                <input type="checkbox" />
                $50-$150
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" />
                $7-$50
              </label>
            </li>
          </ul>
        </div>
      </div>
      <div className="wrapper">
        <WomenBody color={color} size={size}></WomenBody>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Womenpage;
