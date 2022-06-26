import { createAsyncThunk } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import userService from '../../services/userService';

const initialState = {
  login: '',
  password: '',
  isAuthenticated: false
};

// async actions
export const loginActionThunk = createAsyncThunk('user/login', async (user) => {
  await userService.login(user);
  userService.saveUser(user);

  return user;
});

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // sync actions
    loadUser(state) {
      const user = userService.getUser();
      if (user) {
        const { login, password } = user;
        const newState = { login, password, isAuthenticated: true };

        return newState;
      }
      return state;
    },
    logout() {
      userService.saveUser(null);
      return initialState;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(loginActionThunk.fulfilled, (state, action) => {
      const { login, password } = action.payload;

      const newState = { login, password, isAuthenticated: true };
      return newState;
    });
  }
});

// Action creators are generated for each case reducer function
export const { loadUser, logout } = userSlice.actions;

export default userSlice.reducer;
