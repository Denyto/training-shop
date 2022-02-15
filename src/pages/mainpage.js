import React from "react";
import Header from "../components/header/header";
import Women from "../components/women/women";
import Men from "../components/men/men";
import Collection from "../components/collection/collection";
import Subscribe from "../components/subscribe/subscribe";
import Blog from "../components/blog/blog";
import Footer from "../components/footer/footer";
import Commercial from "../components/commercial/commercial";


function Mainpage() {
  return (
    <div className="App">
      <Header></Header>
      <Commercial></Commercial>
      <Women></Women>
      <Men></Men>
      <Collection></Collection>
      <Subscribe></Subscribe>
      <Blog></Blog>
      <Footer></Footer>
    </div>
  );
}

export default Mainpage;