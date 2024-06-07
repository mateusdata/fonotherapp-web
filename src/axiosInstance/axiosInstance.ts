import axios from "axios";

const api = axios.create({
    baseURL: 'https://fono-api.vercel.app/',
    timeout: 10000,
});

export default api;
  