import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as userService from '../../services/userService';
import { IUser } from '../../types/User';

const initialState: IUser = {
  hasTriedLoadUser: false,
  login: '',
  password: '',
  isAuthenticated: false,
};

// async actions
export const loginActionThunk = createAsyncThunk(
  'user/login',
  async (user: IUser) => {
    await userService.login(user);
    userService.saveUser(user);
    console.log('login thunk finalizing...');
    return user;
  },
);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // sync actions
    loadUser(state) {
      const user = userService.getUser();
      if (user) {
        const { login, password, isAuthenticated } = user;
        const newState = {
          hasTriedLoadUser: true,
          login,
          password,
          isAuthenticated,
        };

        return newState;
      }
      return { ...state, hasTriedLoadUser: true };
    },
    logout() {
      userService.removeUser();
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginActionThunk.fulfilled, (state, action): IUser => {
      const { login, password } = action.payload;

      console.log('login thunk extra reducers');

      const newState = {
        login,
        password,
        isAuthenticated: true,
        hasTriedLoadUser: true,
      };
      return newState;
    });
  },
});

// Action creators are generated for each case reducer function
export const { loadUser, logout } = userSlice.actions;

const userReducer = userSlice.reducer;
export default userReducer;
