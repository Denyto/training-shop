import { combineReducers } from "redux";
import { cartReducer } from "./cartReducer";
import { fetchReducer } from './fetchReducer';

export const rootReducer = combineReducers({
  products: cartReducer,
  fetchProducts: fetchReducer,
});
