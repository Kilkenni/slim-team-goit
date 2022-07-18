import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://goit-slim-mom-backend.herokuapp.com/api/",
});

export const getPublicData = async (values) => {
  try {
    const response = await axiosInstance.post('products', values);
    return response.data.data
  } catch {
    console.log("error");
  }
};

export const setPrivatUserData = async (values) => {
  try {
    const response = await axiosInstance.put('users', values);
    return response.data.data
  } catch {
    console.log("error");
  }
};
