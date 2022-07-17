import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    try {
      const { data } = await axios.get('/api/products/');
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const deleteProduct = createAsyncThunk(
  'product/deleteProduct',
  async productId => {
    try {
      await axios.delete(`/api/diary/${productId}`);
      return productId;
    } catch (error) {
      console.log(error);
    }
  }
);

export const addProduct = createAsyncThunk(
  'products/addProduct',
  async ({ name, number }) => {
    console.log(name, number)
    try {
      const product = { name, number };

      const { data } = await axios.post('/api/diary/', product);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);