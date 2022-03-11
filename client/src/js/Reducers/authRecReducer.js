import {
  RECRUITER_LOADING,
  LOGIN_RECRUITER,
  LOGOUT_RECRUITER,
  GET_AUTH_RECRUITER,
  REGISTER_RECRUITER,
  AUTH_REC_ERRORS,
  FORGOT_PASSWORD_RECRUITER,
  RESET_PASSWORD_RECRUITER
} from '../constants/ActionsTypes';
  
const initialState = {
  recruiter:null,
  isAuthRec:false,
  isLoadingg: true,
  msg: null,
};
  
  const authRecReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case RECRUITER_LOADING:
        return {
          ...state,
          isLoadingg: true,
        };
      case REGISTER_RECRUITER:
      case LOGIN_RECRUITER:
      case RESET_PASSWORD_RECRUITER:
        return {
          ...state,
          isLoadingg: false,
          isAuthRec: true,
          msg: payload.msg,
          ...payload,
        };
      case GET_AUTH_RECRUITER:
        return {
          ...state,
          isLoadingg: false,
          isAuthRec: true,
          ...payload,
        };
      case FORGOT_PASSWORD_RECRUITER:
        return {
          ...state,
          isLoading: false,
          msg: payload.msg,
          ...payload,
        };  
      case AUTH_REC_ERRORS:
      case LOGOUT_RECRUITER:
        return {
          ...state,
          isAuthRec: false,
          recruiter:null,
          isLoadingg: false,
        };
      default:
        return state;
    }
  };
  
  export default authRecReducer; 