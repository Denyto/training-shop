import { combineReducers } from "redux";
import { cartReducer } from "./cartReducer";
import { fetchReducer } from './fetchReducer';
import { emailFormReducer } from './emailFormReducer';
import { reviewFormReducer } from './reviewFormReducer';

export const rootReducer = combineReducers({
  products: cartReducer,
  fetchProducts: fetchReducer,
  emailForm: emailFormReducer,
  reviewForm: reviewFormReducer,
});
