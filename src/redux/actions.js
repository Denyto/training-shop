import { ACTION_TYPES } from './types';

export function addProduct(product) {
  return {
    type: ACTION_TYPES.ADD_PRODUCT,
    payload: product,
  };
}

export function deleteProduct(product) {
  return {
    type: ACTION_TYPES.REMOVE_PRODUCT,
    payload: product.id,
  };
}

export function incrementQuantity(product) {
  return {
    type: ACTION_TYPES.INCREMENT_QUANTITY,
    payload: product,
  };
}

export function decrementQuantity(product) {
  return {
    type: ACTION_TYPES.DECREMENT_QUANTITY,
    payload: product,
  };
}

export function removeFromPruductCard(product) {
  return {
    type: ACTION_TYPES.REMOVE_FROM_PRODUCT,
    payload: product,
  };
}

export function loadFromServer() {
  return async (dispatch) => {
    try {
      dispatch(showLoader());
      dispatch(hideError());
      const response = await fetch('https://training.cleverland.by/shop/products');
      const json = await response.json();
      setTimeout(() => {
        dispatch({ type: ACTION_TYPES.FETCH_PRODUCTS, payload: json });
        dispatch(hideLoader());
      }, 1000);
    } catch (error) {
      dispatch(showError());
      setTimeout(() => {
        dispatch(hideLoader());
      }, 2000);
    }
  };
}

export function loadFromServerById(id) {
  return async (dispatch) => {
    try {
      const response = await fetch(`https://training.cleverland.by/shop/product/${id}`);
      const json = await response.json();
      dispatch({ type: ACTION_TYPES.FETCH_PRODUCT_ID, payload: json });
      localStorage.setItem('productId', JSON.stringify(json));
    } catch (error) {
      dispatch(showError());
    }
  };
}

export function showLoader() {
  return {
    type: ACTION_TYPES.SHOW_LOADER,
  };
}

export function hideLoader() {
  return {
    type: ACTION_TYPES.HIDE_LOADER,
  };
}

export function showError() {
  return {
    type: ACTION_TYPES.SHOW_ERROR,
  };
}

export function hideError() {
  return {
    type: ACTION_TYPES.HIDE_ERROR,
  };
}
