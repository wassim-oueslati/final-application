import { combineReducers } from 'redux';
import authReducer from './authReducer';
import authRecReducer from './authRecReducer';
import jobReducer from './jobReducer';
import cvReducer from './cvReducer';
import guestReducer from './guestReducer';
import profileReducer from './profileReducer';

export default combineReducers({ authReducer, authRecReducer, jobReducer, cvReducer, guestReducer, profileReducer });