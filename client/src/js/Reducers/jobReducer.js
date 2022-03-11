import {
  JOB_LOADING,
  GET_JOB
} from '../constants/ActionsTypes';

const initialState = {
  jobs:[],
  isLoading: true
};

const jobReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case JOB_LOADING:
        return {
          ...state,
          isLoading: true,
        };
      case GET_JOB:
        return {
          ...state,
          isLoading: false,
          jobs:payload
        };        
      default:
        return state;
    }
  };
  
export default jobReducer;