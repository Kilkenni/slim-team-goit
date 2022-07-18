import axios from "axios";

axios.defaults.baseURL = "https://goit-slim-mom-backend.herokuapp.com/api/";

  export const getPublicData = async (values) => {
    try {
      const response = await axios.post('products', values);
      return response.data.data
    } catch {
      console.log("error");
    }
  };