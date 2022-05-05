import axios from "axios";
import API_ENDPOINTS from "../constants/apiEndPoints";

const axiosClient = axios.create({
  baseURL: API_ENDPOINTS.API_BASE_URL,
  timeout: 9000,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${sessionStorage.token}`,
  },
});

export default axiosClient;
