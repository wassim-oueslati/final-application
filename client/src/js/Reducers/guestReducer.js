import {
    GUEST_CONTACT_US
} from '../constants/ActionsTypes';
  
const initialState = {
    msg: null,
};
  
const guestReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GUEST_CONTACT_US:
          return {
            ...state,
            msg: payload.msg,
            ...payload
          };    
        default:
          return state;
    }
};
    
export default guestReducer;