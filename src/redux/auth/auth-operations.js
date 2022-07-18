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
    console.log(axiosResponse.data.data);
    // token.set(axiosResponse.data.data.accessToken);
    toast.success(`User registered successfully!`);
    return axiosResponse.data;
  } catch (error) {    
    toast.error('This user already exists');
  }
});

const logIn = createAsyncThunk('auth/login', async credentials => {
  try {
    const axiosResponse = await axios.post('/api/auth/login', credentials);
    console.log(axiosResponse.data.data);
    token.set(axiosResponse.data.data.accessToken);
    return axiosResponse.data.data;
  } catch (error) {   
    toast.error('Email or password is not correct');
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