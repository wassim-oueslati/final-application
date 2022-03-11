import axios from 'axios';
import {
  JOB_LOADING,
  GET_JOB
} from '../constants/ActionsTypes';

//Set the job loading
const jobLoading = () => (dispatch) => {
    dispatch({
      type: JOB_LOADING,
    });
};

// Get JOB
export const getJob = (formData) => async (dispatch) => {
  dispatch(jobLoading());
  try {
    const res = await axios.get('/api/jobs', formData);
    dispatch({
      type: GET_JOB,
      payload: res.data,
    });
  } catch (error) {
  console.log(error);
  }
};

// Add JOB
export const addJob = (formData) => async (dispatch) => {
    dispatch(jobLoading());
    try {
      await axios.post('/api/jobs', formData);
      dispatch(getJob());
    } catch (error) {
    console.log(error);
    }
};

// Search JOB
export const searchJob = (search) => async (dispatch) => {
    dispatch(jobLoading());
    try {
      await axios.get(`/api/jobs/${search}`);
      dispatch(getJob());
    } catch (error) {
    console.log(error);
    }
};