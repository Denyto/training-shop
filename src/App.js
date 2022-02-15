import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Womenpage from './pages/womenpage';
import Menpage from './pages/menpage';
import Mainpage from './pages/mainpage';
import Product from './components/product/product';

function App() {
  return (
    <React.StrictMode>
      <div className="App" data-test-id="app">
        <Routes>
          <Route exact path="/" element={<Mainpage />} />
          <Route exact path="/women" element={<Womenpage />} />
          <Route exact path="/men" element={<Menpage />} />
          <Route exact path="/men/:id" element={<Product tipe="Men" />} />
          <Route exact path="/women/:id" element={<Product tipe="Women" />} />
        </Routes>
      </div>
    </React.StrictMode>
  );
}

export default App;
