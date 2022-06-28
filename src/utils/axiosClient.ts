import axios from "axios";
import API_ENDPOINTS from "../constants/apiEndPoints";

const authToken = sessionStorage.getItem("token");

const axiosClient = axios.create({
  baseURL: API_ENDPOINTS.API_BASE_URL,
  timeout: 9000,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${authToken}`,
  },
});

export default axiosClient;
