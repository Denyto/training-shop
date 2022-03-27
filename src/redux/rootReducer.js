import { combineReducers } from "redux";
import { cartReducer } from "./cartReducer";
import { fetchReducer } from './fetchReducer';
import { emailFormReducer } from './emailFormReducer';

export const rootReducer = combineReducers({
  products: cartReducer,
  fetchProducts: fetchReducer,
  emailForm: emailFormReducer,
});
