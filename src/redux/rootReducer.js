import { combineReducers } from "redux";
import { cartReducer } from "./cartReducer";
import { fetchReducer } from './fetchReducer';
import { emailSubscribeReducer } from './emailSubscribeReducer';
import { emailFooterReducer } from './emailFooterReducer';
import { reviewFormReducer } from './reviewFormReducer';

export const rootReducer = combineReducers({
  products: cartReducer,
  fetchProducts: fetchReducer,
  emailSubscribeForm: emailSubscribeReducer,
  emailFooterForm: emailFooterReducer,
  reviewForm: reviewFormReducer,
});
