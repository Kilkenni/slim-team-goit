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
