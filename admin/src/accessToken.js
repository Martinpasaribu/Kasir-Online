// accessToken.js
import axios from 'axios';
import router from './router/index';
import { refreshToken } from './refreshToken.js';


const accessTokens = axios.create({

  // baseURL: 'http://localhost:5001', 
  // // baseURL: 'https://kasir-online-server.vercel.app', 
  // baseURL: 'http://localhost:5001', 
  baseURL: 'https://kasir-online-server.vercel.app', 
  
  withCredentials: true
});


accessTokens.interceptors.request.use(async (config) => {

  const { token, expire, isValid } = await refreshToken();

  const currentDate = new Date();

  console.log("Checking token expiry...");
  console.log("Current Date:", currentDate);
  console.log("Token Expiry:", expire * 1000);
  
  
  if (expire * 1000 < currentDate.getTime()) {
    console.log("Token expired, refreshing...");
  }

  config.headers.Authorization = `Bearer ${token}`;
  return config;

}, (error) => {
  return Promise.reject(error);
});

export default accessTokens;
