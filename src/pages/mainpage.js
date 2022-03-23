import React from 'react';
import Loader from '../components/loader/loader';
import Error from '../components/loader/error';
import Women from '../components/women/women';
import Men from '../components/men/men';
import Collection from '../components/collection/collection';
import Subscribe from '../components/subscribe/subscribe';
import Blog from '../components/blog/blog';
import Commercial from '../components/commercial/commercial';
import { useSelector } from 'react-redux';

function Mainpage() {
  const { isLoading, isError, PRODUCTS } = useSelector((state) => {
    return {
      PRODUCTS: state.fetchProducts.fetchProducts.products,
      isLoading: state.fetchProducts.fetchProducts.isLoading,
      isError: state.fetchProducts.fetchProducts.isError,
    };
  });

  return (
    <div className="App">
      {isError && <Error></Error>}
      <Commercial></Commercial>
      {isLoading ? <Loader></Loader> : <Women PRODUCTS={PRODUCTS}></Women>}
      {isLoading ? <Loader></Loader> : <Men PRODUCTS={PRODUCTS}></Men>}
      <Collection></Collection>
      <Subscribe></Subscribe>
      <Blog></Blog>
    </div>
  );
}

export default Mainpage;
