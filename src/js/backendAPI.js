import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://goit-slim-mom-backend.herokuapp.com/api/',
});

export const getPublicData = async values => {
  try {
    const response = await axiosInstance.post('products', values);
    return response.data.data;
  } catch {
    console.log('error');
  }
};

export const getDiaryByDate = async date => {
  try {
    const response = await axiosInstance.get(`diary/${date}`);
    return response.data.data.productList;
  } catch (error) {
    console.log('error');
  }
};

export const deleteProductById = async (id, date) => {
  try {
    const response = await axiosInstance.delete(`diary/${id}`, { date: date });
    return response;
  } catch (error) {
    console.log('error');
  }
};

export const getProductsSearch = async search => {
  try {
    const response = await axiosInstance.get(`products/${search}`);
    // console.log(response);
    // return response.data.data
  } catch {
    console.log('error');
  }
};
