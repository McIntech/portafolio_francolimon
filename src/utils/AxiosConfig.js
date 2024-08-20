import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.NODE_ENV === 'production' 
            ? 'https://portafoliofranco-api-1803773f51c5.herokuapp.com' 
            : 'http://localhost:3000',
  timeout: 5000,
  headers: { 'Content-Type': 'application/json' },
});

export default axiosInstance;