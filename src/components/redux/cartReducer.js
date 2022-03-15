import { ACTION_TYPES } from './types';

const initialState = {
  products: [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.ADD_PRODUCT:
      if (
        !state.products.find(
          (el) => el.color === action.payload.color && el.sizes === action.payload.sizes
        )
      ) {
        return { ...state, products: [...state.products, action.payload] };
      } else {
        return { ...state, products: [...state.products] };
      }
    case ACTION_TYPES.REMOVE_PRODUCT:
      return {
        ...state,
        products: state.products.filter((product) => product.id !== action.payload),
      };
    case ACTION_TYPES.INCREMENT_QUANTITY:
      return {
        ...state,
        products: state.products.map((product) => {
          if (product.id === action.payload.id) {
            product.quantity++;
            return product;
          }
          return product;
        }),
      };
    case ACTION_TYPES.DECREMENT_QUANTITY:
      return {
        ...state,
        products: state.products.map((product) => {
          if (product.id === action.payload.id) {
            product.quantity > 1 && product.quantity--;
            return product;
          }
          return product;
        }),
      };
    default:
      return state;
  }
};
