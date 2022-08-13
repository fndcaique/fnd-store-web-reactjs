import { combineReducers } from '@reduxjs/toolkit';
import user from './userReducer';

const rootReducer = combineReducers({ user });

export default rootReducer;
