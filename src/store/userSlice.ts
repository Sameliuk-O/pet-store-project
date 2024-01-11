import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IUser } from '../interface';

const initialState: IUser = {
  address: {
    city: '',
    geolocation: {
      lat: '',
      long: '',
    },
    number: 0,
    street: '',
    zipcode: '',
  },
  email: '',
  id: 0,
  name: {
    firstname: '',
    lastname: '',
  },
  password: '',
  phone: '',
  username: '',
};

const userSlice = createSlice({
  initialState,
  name: 'user',
  reducers: {
    setCurrentUser: (state, action: PayloadAction<IUser>) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { setCurrentUser } = userSlice.actions;
export default userSlice.reducer;
