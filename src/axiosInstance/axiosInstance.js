import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://fono-api.vercel.app/',
    timeout: 10000,
});

export default axiosInstance;
  