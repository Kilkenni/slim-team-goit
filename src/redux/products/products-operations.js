import { axiosInstance } from '../../js/backendAPI';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async date => {
    try {
      const response = await axiosInstance.get(`/diary/${date}`);
      console.log.response;
      return response.data.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const deleteProduct = createAsyncThunk(
  'product/deleteProduct',
  async productId => {
    try {
      await axiosInstance.delete(`/diary/${productId}`);
      return productId;
    } catch (error) {
      console.log(error);
    }
  }
);

export const addProduct = createAsyncThunk(
  'products/addProduct',
  async ({ date, title, weight }) => {
    console.log(title, weight);
    try {
      const product = { date, title, weight };

      const response = await axiosInstance.post('/diary/', product);
      return response.data.data;
    } catch (error) {
      console.log(error);
    }
  }
);
