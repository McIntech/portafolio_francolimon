import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.NODE_ENV === 'production' 
            ? 'https://myportafolio-api-e949e1d60b62.herokuapp.com' 
            : 'http://localhost:3001',
  timeout: 5000,
  headers: { 'Content-Type': 'application/json' },
});

export default axiosInstance;