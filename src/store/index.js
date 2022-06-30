import { configureStore } from '@reduxjs/toolkit';
import user from './reducers/userReducer';

const store = configureStore({
  reducer: {
    user,
  },
  devTools: true,
});

export default store;
