import axios from 'axios';
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


//Set the recruiter loading
const recruiterLoading = () => (dispatch) => {
  dispatch({
    type: RECRUITER_LOADING,
  });
};


// Register Recruiter
export const registerRecruiter = (formData) => async (dispatch) => {
  dispatch(recruiterLoading());
  try {
    const res = await axios.post('/api/authRec/registerRecruiter', formData);
    dispatch({
      type: REGISTER_RECRUITER,
      payload: res.data, 
    });
  } catch (error) {
    console.log(error);
    
    console.dir(error);
    const { errors, msg } = error.response.data;

    if (Array.isArray(errors)) {
      errors.forEach((err) => alert(err.msg));
    }
    console.log(errors);
    if (msg) {
      alert(msg);
    }

    dispatch({
      type: AUTH_REC_ERRORS,
    });
  }
};


// Login Recruiter
export const loginRecruiter = (formData) => async (dispatch) => {
  dispatch(recruiterLoading());

  try {
    const res = await axios.post('/api/authRec/loginRecruiter', formData) ;
    dispatch({
      type: LOGIN_RECRUITER,
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

    dispatch({
      type: AUTH_REC_ERRORS,
    });
  }
};


// Forgot Password Recruiter
export const forgotPasswordRec = (formData) => async (dispatch) => {
  dispatch(recruiterLoading());

  try {
    const res = await axios.post('/api/authRec/forgotPassword', formData);
    dispatch({
      type: FORGOT_PASSWORD_RECRUITER,
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

    dispatch({
      type: AUTH_REC_ERRORS,
    });
  }
};


// Reset Password Recruiter
export const resetPasswordRec = (formData) => async (dispatch) => {
  try {
    const res = await axios.post('/api/authRec/resetPassword', formData);
    dispatch({
      type: RESET_PASSWORD_RECRUITER,
      payload: res.data, 
    });
  } catch (error) {
    console.log(error);
    
    console.dir(error);
    const { errors, msg } = error.response.data;

    if (Array.isArray(errors)) {
      errors.forEach((err) => alert(err.msg));
    }
    console.log(errors);
    if (msg) {
      alert(msg);
    }

    dispatch({
      type: AUTH_REC_ERRORS,
    });
  }
};


// Get auth recruiter
export const getAuthRecruiter = () => async (dispatch) => {
  dispatch(recruiterLoading());

  try {
    const res = await axios.get('/api/authRec/recruiter');
    
    dispatch({
      type: GET_AUTH_RECRUITER,
      payload: res.data, // {recruiter: req.recruiter}
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: AUTH_REC_ERRORS,
    });
  }
};

// Edit recruiter
export const editRecruiter=(idRecruiter,updatedRecruiter)=>dispatch=>{
  axios.put(`/api/authRec/editRecruiterProfile/${idRecruiter}`,updatedRecruiter)
  .then(res=>dispatch(getAuthRecruiter()))
  .catch(err=>console.log(err))
}

// Logout recruiter
export const logoutRec = () => (dispatch) => {
  axios.get('/api/authRec/logout');
  dispatch({
    type: LOGOUT_RECRUITER,
  });
};