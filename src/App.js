import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Womenpage from './pages/womenpage';
import Menpage from './pages/menpage';
import Mainpage from './pages/mainpage';
import Product from './components/product/product';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import { Provider } from 'react-redux';
import { store } from './components/redux/store';

function App() {

  return (
    <React.StrictMode>
      <Provider store={store}>
        <div className="App" data-test-id="app">
          <Header></Header>
          <Routes>
            <Route exact path="/" element={<Mainpage />} />
            <Route exact path="/women" element={<Womenpage />} />
            <Route exact path="/men" element={<Menpage />} />
            <Route exact path="/men/:id" element={<Product type="men" />} />
            <Route exact path="/women/:id" element={<Product type="women" />} />
          </Routes>
          <Footer></Footer>
        </div>
      </Provider>
    </React.StrictMode>
  );
}

export default App;
