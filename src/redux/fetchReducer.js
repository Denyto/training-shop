import { ACTION_TYPES } from './types';

const initialState = {
  fetchProducts: {
    products: {
      men: [],
      women: [],
    },
    productId: [],
    isLoading: false,
    isError: false,
  },
};

export const fetchReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_PRODUCTS:
      return {
        ...state,
        fetchProducts: { ...state.fetchProducts, products: action.payload },
      };
    case ACTION_TYPES.SHOW_LOADER:
      return {
        ...state,
        fetchProducts: { ...state.fetchProducts, isLoading: true },
      };
    case ACTION_TYPES.HIDE_LOADER:
      return {
        ...state,
        fetchProducts: { ...state.fetchProducts, isLoading: false },
      };
    case ACTION_TYPES.SHOW_ERROR:
      return {
        ...state,
        fetchProducts: { ...state.fetchProducts, isError: true },
      };
    case ACTION_TYPES.HIDE_ERROR:
      return {
        ...state,
        fetchProducts: { ...state.fetchProducts, isError: false },
      };
    default:
      return state;
  }
};
