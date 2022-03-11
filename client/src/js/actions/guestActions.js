import axios from 'axios';
import {
    GUEST_CONTACT_US
} from '../constants/ActionsTypes';


export const guestContactUs = (formData) => async (dispatch) => {
    
    try {
      const res = await axios.post('/api/guest/contactUs', formData);
      dispatch({
        type: GUEST_CONTACT_US,
        payload: res.data, 
      });
    } catch (error) {
      console.dir(error);
  
      const { errors, msg } = error.response.data;
  
      if (Array.isArray(errors)) {
        errors.forEach((err) => alert(err.msg));
      }
      console.log(errors);
      if (msg) {
        alert(msg);
      }
    }
}; 