import axios from "axios";

const api = axios.create({
  baseURL: "https://api.example.com",
});

api.interceptors.request.use(
  (config) => {
    // Modify the request config before sending it (e.g., add auth token)
    config.headers.Authorization = `Bearer your_token_here`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

api.interceptors.response.use(
  (response) => {
    // Modify the response data before returning it
    return response;
  },
  (error) => {
    // Handle response errors
    if (error.response.status === 401) {
      // Handle unauthorized errors
    }
    return Promise.reject(error);
  },
);

export default api;
