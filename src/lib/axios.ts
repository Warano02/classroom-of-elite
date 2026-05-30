import axios from "axios";
<<<<<<< HEAD

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_API_BASE_URL || "http://192.168.43.150:3000",
});

=======
console.log("API Base URL:", process.env.NEXT_PUBLIC_API_BASE_URL);

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  withCredentials: true,
});
>>>>>>> 7f14cc3b6acbbdf51ffc200d3d8d27084e350e05
export default axiosInstance;
