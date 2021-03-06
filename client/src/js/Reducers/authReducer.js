import {
  USER_LOADING,
  LOGIN_USER,
  REGISTER_USER,
  LOGOUT_USER,
  GET_AUTH_USER,
  AUTH_ERRORS,
  FORGOT_PASSWORD_USER,
  RESET_PASSWORD_USER
} from '../constants/ActionsTypes';

const initialState = {
  user: null,
  isAuth: false,
  isLoading: true,
  msg: null
};

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case USER_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case REGISTER_USER:
    case LOGIN_USER:
    case RESET_PASSWORD_USER:
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        msg: payload.msg,
        ...payload,
      };
    case GET_AUTH_USER:
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        ...payload,
      };
    case FORGOT_PASSWORD_USER:
      return {
        ...state,
        isLoading: false,
        msg: payload.msg,
        ...payload,
      };
    case AUTH_ERRORS:
    case LOGOUT_USER:
      return {
        ...state,
        isAuth: false,
        user: null,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default authReducer;