import axios from 'axios';
import {
  GET_PROFILE
} from '../constants/ActionsTypes';


// Get profile
export const getProfile = (formData) => async (dispatch) => {
  try {
    const res = await axios.get('/api/profile', formData);
    dispatch({
      type: GET_PROFILE,
      payload: res.data,
    });
  } catch (error) {
  console.log(error);
  }
};


// Add profile
export const addProfile = (formData) => async (dispatch) => {
    try {
      await axios.post('/api/profile/profilePost', formData);
      dispatch(getProfile());
    }catch (error) {
        console.log(error);
    }
};