import axios from 'axios';

// Crear una instancia de axios con configuración global
const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000', // URL de tu API Rails
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
  withCredentials: true,
});

axiosInstance.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  response => response,
  error => {
    if (error.response && error.response.status === 401) {
      // Manejo de redirección si es necesario
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;