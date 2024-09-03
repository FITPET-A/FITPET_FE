import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

const axiosInstance = axios.create({
  baseURL,
  headers: {
    Accept: "*/*",
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
