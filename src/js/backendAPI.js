import axios from 'axios';

import { toBackendDateString } from './utils';

export const axiosInstance = axios.create({
  baseURL: 'https://goit-slim-mom-backend.herokuapp.com/api/',
});

export const getPublicData = async values => {
  try {
    const response = await axiosInstance.post('products', values);
    return response.data.data;
  } catch (error) {
    console.error(error);
  }
};

export const getDiaryByDate = async date => {
  const dateForBackend = toBackendDateString(date); // new Date(date).toLocaleDateString().replace(/\./g, '.');
  try {
    const response = await axiosInstance.get(`diary/${dateForBackend}`);
    return response.data.data.productList;
  } catch (error) {
    console.log('error');
  }
};

export const deleteProductById = async (id, date) => {
  const dateForBackend = toBackendDateString(date); //new Date(date).toLocaleDateString().replace(/\./g, '.');
  try {
    const response = await axiosInstance({
      method: 'DELETE',
      url: `diary/${id}`,
      data: {
        date: dateForBackend,
      },
    });
    return response.data;
  } catch (error) {
    console.log('error');
  }
};

export async function getCurrentUser() {
  try {
    const response = await axiosInstance.get('users/current');
    //TODO - check response status and process errors here!!!
    return response.data.data;
  } catch (error) {
    console.error(error);
  }
}

export async function updateCurrentUser({
  height,
  age,
  currentWeight,
  desiredWeight,
  bloodType,
}) {
  try {
    const response = await axiosInstance.put('users', {
      height,
      age,
      currentWeight,
      desiredWeight,
      bloodType,
    });
    //TODO - check response status and process errors here!!!
    return response.data.data;
  } catch (error) {
    console.error(error);
  }
}

// export const setPrivatUserData = async values => {
//   try {
//     const response = await axiosInstance.put('users', values);
//     return response.data.data;
//   } catch {
//     console.log('error');
//   }
// };

export const getProductsSearch = async search => {
  try {
    const response = await axiosInstance.get(`products/${search}`);
    return response.data.data.product;
  } catch {
    console.log('error');
  }
};

export const addProductInDiary = async values => {
  try {
    // console.log(values)
    const formattedValues = { ...values };
    formattedValues.date = toBackendDateString(values.date);
    const response = await axiosInstance.post(`diary`, formattedValues);
    return response.data.data;
  } catch {
    console.log('error');
  }
};
