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
  const isLoading = useSelector((state) => state.fetchProducts.fetchProducts.isLoading);
  const isError = useSelector((state) => state.fetchProducts.fetchProducts.isError);

  return (
    <div className="App">
      {isError && <Error></Error>}
      <Commercial></Commercial>
      {isLoading ? <Loader></Loader> : <Women></Women>}
      {isLoading ? <Loader></Loader> : <Men></Men>}
      <Collection></Collection>
      <Subscribe></Subscribe>
      <Blog></Blog>
    </div>
  );
}

export default Mainpage;
