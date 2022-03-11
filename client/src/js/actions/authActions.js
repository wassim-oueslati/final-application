import axios from 'axios';
import {
  USER_LOADING,
  LOGIN_USER,
  REGISTER_USER,
  LOGOUT_USER,
  GET_AUTH_USER,
  AUTH_ERRORS,
  FORGOT_PASSWORD_USER,
  RESET_PASSWORD_USER
} from '../constants/ActionsTypes';

//Set the user loading
const userLoading = () => (dispatch) => {
  dispatch({
    type: USER_LOADING,
  });
};

// Register USer
export const registerUser = (formData) => async (dispatch) => {
  dispatch(userLoading());
  try {
    const res = await axios.post('/api/auth/register', formData);
    dispatch({
      type: REGISTER_USER,
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
      type: AUTH_ERRORS,
    });
  }
};

// Login User
export const loginUser = (formData) => async (dispatch) => {
  dispatch(userLoading());

  try {
    const res = await axios.post('/api/auth/login', formData) ;
    dispatch({
      type: LOGIN_USER,
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
      type: AUTH_ERRORS,
    });
  }
};


// Forgot Password User
export const forgotPasswordUser = (formData) => async (dispatch) => {
  dispatch(userLoading());

  try {
    const res = await axios.post('/api/auth/forgotPassword', formData);
    dispatch({
      type: FORGOT_PASSWORD_USER,
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
      type: AUTH_ERRORS,
    });
  }
};


// Reset Password USer
export const resetPasswordUser = (formData) => async (dispatch) => {
  try {
    const res = await axios.post('/api/auth/resetPassword', formData);
    dispatch({
      type: RESET_PASSWORD_USER,
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
      type: AUTH_ERRORS,
    });
  }
};

// Get auth user
export const getAuthUser = () => async (dispatch) => {
  dispatch(userLoading());

  try {
    const res = await axios.get('/api/auth/user');
    dispatch({
      type: GET_AUTH_USER,
      payload: res.data, // {user: req.user}
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: AUTH_ERRORS,
    });
  }
};


// Edit user
export const editUser=(idUser,updatedUser)=>dispatch=>{
  axios.put(`/api/auth/editCandidateProfile/${idUser}`,updatedUser)
  .then(res=>dispatch(getAuthUser()))
  .catch(err=>console.log(err))
}


// Delete user
export const deleteUser=(idUser)=>dispatch=>{
  axios.delete(`/api/auth/deleteCandidateProfile/${idUser}`)
  .then(res=>dispatch(getAuthUser()))
  .catch(err=>console.log(err))
}


// Logout user
export const logout = () => (dispatch) => {
  axios.get('/api/auth/logout');
  dispatch({
    type: LOGOUT_USER,
  });
}