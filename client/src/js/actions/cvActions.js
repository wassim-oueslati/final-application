import axios from 'axios';
import {
  CV_LOADING,
  GET_CV
} from '../constants/ActionsTypes';

//Set the cv loading
const cvLoading = () => (dispatch) => {
    dispatch({
      type: CV_LOADING,
    });
};

// Get cv
export const getCv = (formData) => async (dispatch) => {
  dispatch(cvLoading());
  try {
    const res = await axios.get('/api/cv', formData);
    dispatch({
      type: GET_CV,
      payload: res.data,
    });
  } catch (error) {
  console.log(error);
  }
};

// Add cv
export const addCv = (formData) => async (dispatch) => {
    dispatch(cvLoading());
    try {
      await axios.post('/api/cv', formData);
      dispatch(getCv());
    }catch (error) {
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