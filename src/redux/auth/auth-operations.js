import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'http://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = createAsyncThunk('auth/register', async (credentials, { rejectWithValue }) => {
  try {
    const { data } = await axios.post('/users/signup', credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    toast('Incorrect input!');
    return rejectWithValue(error.message);
  }
});

const logIn = createAsyncThunk('auth/login', async (credentials, { rejectWithValue }) => {
  try {
    const { data } = await axios.post('/users/login', credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    toast('Incorrect input!');
    return rejectWithValue(error.message);
  }
});

const logOut = createAsyncThunk('auth/logout', async (_, { rejectWithValue }) => {
  try {
    const { data } = await axios.post('/users/logout');
    token.unset();
    return data;
  } catch (error) {
    toast('Incorrect input!');
    return rejectWithValue(error.message);
  }
});

const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, { rejectWithValue, getState }) => {
    const state = getState();
    const persistedToken = state.auth.token;
    if (persistedToken === null) {
      console.log(rejectWithValue());
      return rejectWithValue();
    }
    token.set(persistedToken);
    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      rejectWithValue(error);
      alert(error);
    }
  },
);

const operations = { register, logIn, logOut, fetchCurrentUser };
export default operations;
