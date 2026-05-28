import axios from "axios";
console.log("API Base URL:", process.env.NEXT_PUBLIC_API_BASE_URL);

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  withCredentials: true,
});
export default axiosInstance;
