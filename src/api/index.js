// src/api/index.js 파일 생성
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001",
  timeout: 5000,
});

const authApi = axios.create({
  baseURL: "http://localhost:3001",
  timeout: 5000,
});

authApi.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    console.log("토큰:", token);
    if (token) {
      config.headers["Authorization"] = "Bearer " + token;
      console.log("헤더:", config.headers["Authorization"]);
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export { api, authApi };
