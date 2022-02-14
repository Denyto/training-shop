import "./App.css";
import React from "react";
import Womenpage from "./pages/womenpage";
import Menpage from "./pages/menpage";
import Mainpage from "./pages/mainpage";
import Product from "./components/product/product";


import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App" data-test-id="app">
      <header className="App-header">
        ПРИВЕТ
      </header>
    </div>
  );
}

export default App;
