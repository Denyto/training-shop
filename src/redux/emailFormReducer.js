import { ACTION_TYPES } from './types';

const initialState = {
  emailForm: {
    isMailSendSuccess: false,
    isMailSendLoading: false,
  },
};

export const emailFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.SEND_MAIL_SUCCESS:
      return {
        ...state,
        emailForm: { ...state.emailForm, isMailSendSuccess: true },
      };
    case ACTION_TYPES.SHOW_MAIL_LOADER:
      return {
        ...state,
        emailForm: { ...state.emailForm, isMailSendLoading: true },
      };
    case ACTION_TYPES.HIDE_MAIL_LOADER:
      return {
        ...state,
        emailForm: { ...state.emailForm, isMailSendLoading: false },
      };
    default:
      return state;
  }
};
