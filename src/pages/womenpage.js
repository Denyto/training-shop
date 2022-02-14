import React from "react";
import Header from "../components/header/header";
import WomenBody from "../components/women/womenbody";
import Footer from "../components/footer/footer";
import { Link } from "react-router-dom";

function Womenpage() {
  return (
    <div className="App">
      <Header></Header>
      <div className="wrapper">
        <div className="women__route">
          <div className="women__route__name">
            <p>
              <Link to="/">Home</Link>
            </p>
            ►<p>Women</p>
          </div>
          <div className="women__route__share">
            <a href="#"></a>
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
      </div>
      <div className="wrapper">
        <WomenBody></WomenBody>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Womenpage;
