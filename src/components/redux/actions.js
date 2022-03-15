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

