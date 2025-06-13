// utils/axiosClient.js
import axios from "axios";
import https from "https";

const isServer = typeof window === "undefined";

const axiosClient = axios.create({
  baseURL: "https://localhost:7259/api",
  // Sadece sunucu tarafında self-signed sertifikayı yoksay
  ...(isServer && {
    httpsAgent: new https.Agent({ rejectUnauthorized: false }),
  }),
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosClient.interceptors.request.use(
  (config) => {
    // Token, header vs. eklenebilir
    return config;
  },
  (error) => Promise.reject(error)
);

axiosClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error.response || error.message);
    return Promise.reject(error);
  }
);

export default axiosClient;
