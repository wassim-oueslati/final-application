import {
  CV_LOADING,
  GET_CV
} from '../constants/ActionsTypes';
  
const initialState = {
  cvs:[],
  isLoading: true,
  msg: null,
};
  
const cvReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case CV_LOADING:
          return {
            ...state,
            isLoading: true,
          };
        case GET_CV:
          return {
            ...state,
            isLoading: false,
            cvs:payload,
            msg: payload.msg,
          };    
        default:
          return state;
    }
};
    
export default cvReducer;    