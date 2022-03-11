import {
    GET_PROFILE
} from '../constants/ActionsTypes';
    
  const initialState = {
    profiles:[],
    isLoading: true
  };
    
  const profileReducer = (state = initialState, { type, payload }) => {
      switch (type) {
          case GET_PROFILE:
            return {
              ...state,
              isLoading: false,
              profiles:payload,
            };    
          default:
            return state;
      }
  };
      
  export default profileReducer;    