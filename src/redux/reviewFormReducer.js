import { ACTION_TYPES } from './types';

const initialState = {
  reviewForm: {
    isReviewSendSuccess: false,
    isReviewSendLoading: false,
  },
};

export const reviewFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.SEND_REVIEW_SUCCESS:
      return {
        ...state,
        reviewForm: { ...state.reviewForm, isReviewSendSuccess: true },
      };
    case ACTION_TYPES.SHOW_REVIEW_LOADER:
      return {
        ...state,
        reviewForm: { ...state.reviewForm, isReviewSendLoading: true },
      };
    case ACTION_TYPES.HIDE_REVIEW_LOADER:
      return {
        ...state,
        reviewForm: { ...state.reviewForm, isReviewSendLoading: false },
      };
    default:
      return state;
  }
};
