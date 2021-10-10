import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'http://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorisation = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorisation = '';
  },
};

const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await axios.post('/users/signup', credentials);
    return data;
  } catch (error) {}
});

const logIn = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await axios.post('/users/login', credentials);
    return data;
  } catch (error) {}
});

const logout = createAsyncThunk('auth/logout', async () => {
  try {
    const { data } = await axios.post('/users/logout');
    return data;
  } catch (error) {}
});

export default { register, logIn, logout };
