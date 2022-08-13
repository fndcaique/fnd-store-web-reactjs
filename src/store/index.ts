import { configureStore } from '@reduxjs/toolkit';
import { IUser } from '../types/User';
import rootReducer from './reducers';

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

export interface IStore {
  user: IUser;
}

export default store;
