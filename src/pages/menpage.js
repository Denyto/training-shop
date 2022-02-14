import React from "react";
import Header from "../components/header/header";
import MenBody from "../components/men/menbody";
import Footer from "../components/footer/footer";
import { Link } from "react-router-dom";

function Menpage() {

    return (
    <div className="App">
      <Header></Header>
      <div className="wrapper">
        <div className="men__route">
          <div className="men__route__name">
            <p><Link to="/">Home</Link></p>►<p>Men</p>
          </div>
          <div className="men__route__share">
            <Link href="#"></Link>
            <p>Share</p>
          </div>
        </div>
        <h2 className="men__title">MEN</h2>
        <div className="men__filter">
          <div className="men__filter__icon">
            <i></i>
            <p>FILTER</p>
          </div>
          <div className="men__filter__view">
            <i></i>
            <i></i>
          </div>
        </div>
      </div>
      <div className="wrapper">
        <MenBody></MenBody>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Menpage;
