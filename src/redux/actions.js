import { ACTION_TYPES } from './types';
const axios = require('axios');

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
      dispatch({ type: ACTION_TYPES.FETCH_PRODUCTS, payload: json });
      dispatch(hideLoader());
    } catch (error) {
      dispatch(showError());
      dispatch(hideLoader());
    }
  };
}

export function sendEmail(email, clearInputField, setAvailableSubmitButton) {
  return async (dispatch) => {
    try {
      dispatch(showMailLoader());
      dispatch(hideMailError());
      const response = await fetch('https://training.cleverland.by/shop/email', {
        method: 'POST',
        body: {
          mail: email,
        },
      });
      response.ok && dispatch({ type: ACTION_TYPES.SEND_MAIL_SUCCESS });
      dispatch(hideMailLoader());
      clearInputField();
      setTimeout(() => {
        dispatch({ type: ACTION_TYPES.SEND_MAIL_DEFAULT });
      }, 2000);
    } catch (error) {
      dispatch(hideMailLoader());
      dispatch(showMailError());
      setAvailableSubmitButton();
    }
  };
}

export function sendFooterEmail(email, clearInputField, setAvailableSubmitButton) {
  return async (dispatch) => {
    try {
      dispatch(showFooterMailLoader());
      dispatch(hideFooterMailError());
      const response = await fetch('https://training.cleverland.by/shop/email', {
        method: 'POST',
        body: {
          mail: email,
        },
      });
      response.ok && dispatch({ type: ACTION_TYPES.SEND_FOOTER_MAIL_SUCCESS });
      dispatch(hideFooterMailLoader());
      clearInputField();
      setTimeout(() => {
        dispatch({ type: ACTION_TYPES.SEND_FOOTER_MAIL_DEFAULT });
      }, 2000);
    } catch (error) {
      dispatch(hideFooterMailLoader());
      dispatch(showFooterMailError());
      setAvailableSubmitButton();
    }
  };
}

export function sendReview(
  { id, name, text, raiting },
  closeModal,
  reloadWindow,
  setAvailableSubmitButton
) {
  return async (dispatch) => {
    dispatch(showReviewLoader());
    dispatch(hideReviewError());
    axios
      .post('https://training.cleverland.by/shop/product/review', {
        id: id,
        name: name,
        text: text,
        rating: raiting,
      })
      .then(function (response) {
        dispatch({ type: ACTION_TYPES.SEND_REVIEW_SUCCESS });
        closeModal();
        dispatch(hideReviewLoader());
        reloadWindow();        
      })
      .catch(function (error) {
        dispatch(hideReviewLoader());
        dispatch(showReviewError());
        setAvailableSubmitButton();
      });
  };
}

export function showMailError() {
  return {
    type: ACTION_TYPES.SHOW_MAIL_ERROR,
  };
}

export function hideMailError() {
  return {
    type: ACTION_TYPES.HIDE_MAIL_ERROR,
  };
}

export function showReviewLoader() {
  return {
    type: ACTION_TYPES.SHOW_REVIEW_LOADER,
  };
}

export function hideReviewLoader() {
  return {
    type: ACTION_TYPES.HIDE_REVIEW_LOADER,
  };
}

export function showReviewError() {
  return {
    type: ACTION_TYPES.SHOW_REVIEW_ERROR,
  };
}

export function hideReviewError() {
  return {
    type: ACTION_TYPES.HIDE_REVIEW_ERROR,
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

export function showMailLoader() {
  return {
    type: ACTION_TYPES.SHOW_MAIL_LOADER,
  };
}

export function hideMailLoader() {
  return {
    type: ACTION_TYPES.HIDE_MAIL_LOADER,
  };
}

export function showFooterMailLoader() {
  return {
    type: ACTION_TYPES.SHOW_FOOTER_MAIL_LOADER,
  };
}

export function hideFooterMailLoader() {
  return {
    type: ACTION_TYPES.HIDE_FOOTER_MAIL_LOADER,
  };
}

export function showFooterMailError() {
  return {
    type: ACTION_TYPES.SHOW_FOOTER_MAIL_ERROR,
  };
}

export function hideFooterMailError() {
  return {
    type: ACTION_TYPES.HIDE_FOOTER_MAIL_ERROR,
  };
}
