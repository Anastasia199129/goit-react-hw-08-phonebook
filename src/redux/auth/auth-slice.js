import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: [{ name: '', email: '' }],
  token: null,
  isLoadingIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {},
});

export default authSlice.reducer;
