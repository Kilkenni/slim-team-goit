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

export const getProductsSearch = async (search) => {
  try {
    const response = await axiosInstance.get(`products/${search}`);
    return response.data.data.product
  } catch {
    console.log("error");
  }
};

export const addProductInDiary = async (values) => {
  try {
    // console.log(values)
    const response = await axiosInstance.post(`diary`, values);
    return response.data.data
  } catch {
    console.log("error");
  }
};

export const getProductsDiary = async (date) => {
  // const dateCurrent = new Date(date).toLocaleDateString().replace(/\./g, ".")
  try {
    // console.log(`date`, dateCurrent)
    const response = await axiosInstance.get(`diary/${date}`);
    // console.log(response.data.data.productList)
    return response
  } catch {
    console.log("error");
  }
};