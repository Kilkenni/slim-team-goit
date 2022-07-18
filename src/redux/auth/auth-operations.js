import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';


axios.defaults.baseURL = 'https://goit-slim-mom-backend.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const axiosResponse = await axios.post('/api/auth/signup', credentials);

    // token.set(axiosResponse.data.data.accessToken);
    toast.success(`User registered successfully!`);
    return axiosResponse.data;
  } catch (error) {    
    if (error.response.status === 400) {
      toast.error('Bad request');
    }
    if (error.response.status === 409) {
      toast.error('Email in use');
    }
    if (error.response.status === 500) {
      toast.error('Internal Server Error');
    } 
  }
});

const logIn = createAsyncThunk('auth/login', async credentials => {
  try {
    const axiosResponse = await axios.post('/api/auth/login', credentials);

    token.set(axiosResponse.data.data.accessToken);
    return axiosResponse.data.data;
  } catch (error) {      
    if (error.response.status === 403) {
      toast.error('Wrong email or password');
    }
    if (error.response.status === 400) {
      toast.error('Bad request');
    }
    if (error.response.status === 404) {
      toast.error('Not found');
    }
    if (error.response.status === 500) {
      toast.error('Internal Server Error');
    } 
  }
});

const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('/api/auth/logout');
    token.unset();
  } catch (error) {
   
  }
});

const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);
    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      
    }
  }
);

const operations = {
  register,
  logOut,
  logIn,
  fetchCurrentUser,
};
export default operations;