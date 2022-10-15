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

// const form: any = new FormData();

export const axiosClientMultipart = axios.create({
  baseURL: API_ENDPOINTS.API_BASE_URL,
  timeout: 9000,
  headers: {
    "Content-Type": `multipart/form-data;`,
    Authorization: `Bearer ${authToken}`,
  },
});

export default axiosClient;
