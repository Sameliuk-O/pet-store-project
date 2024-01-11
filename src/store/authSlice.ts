import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { LoginState } from 'interface';

const initialState: LoginState = {
  auth: false,
  token: '',
  username: '',
};

const authSlice = createSlice({
  initialState,
  name: 'auth',
  reducers: {
    setLoginUser: (state, action: PayloadAction<LoginState>) => {
      state.token = action.payload.token;
      state.username = action.payload.username;
      state.auth = action.payload.auth;
    },
  },
});

export const { setLoginUser } = authSlice.actions;
export default authSlice.reducer;
