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
  // const day = date.getDate() > 9 ? date.getDate() : `0${date.getDate()}`; //додати 0, якщо день не більше 9
  // const month = date.getMonth() > 9 ? date.getMonth() : `0${date.getMonth()}`; //додати 0, якщо місяць не більше 9
  // const year = date.getFullYear();
  // const dateForBackend = `${day}.${month}.${year}`;
  const dateCurrent = new Date(date).toLocaleDateString().replace(/\./g, '.');
  try {
    const response = await axiosInstance.get(`diary/${dateCurrent}`);
    return response.data.data.productList;
  } catch (error) {
    console.log('error');
  }
};

export const deleteProductById = async (id, date) => {
  const dateCurrent = new Date(date).toLocaleDateString().replace(/\./g, '.');
  try {
    const response = await axiosInstance({
      method: 'DELETE',
      url: `diary/${id}`,
      data: {
        date: dateCurrent,
      },
    });
    return response.data;
  } catch (error) {
    console.log('error');
  }
};

export async function getProductsOfDay (date) {
  try {
    const {data} = await axiosInstance.get(`diary/${date}`);
    return data.data.productList;
  } catch (error) {
    console.log(error);
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

export const setPrivatUserData = async values => {
  try {
    const response = await axiosInstance.put('users', values);
    return response.data.data;
  } catch {
    console.log('error');
  }
};

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
    const response = await axiosInstance.post(`diary`, values);
    return response.data.data;
  } catch {
    console.log('error');
  }
};
