// src/auth.js
import axios from 'axios';

const accessServer = axios.create({

  // baseURL: 'http://localhost:5001', 
  // // baseURL: 'https://kasir-online-server.vercel.app', 

  // baseURL: 'http://localhost:5001', 
  baseURL: 'https://kasir-online-server.vercel.app', 
  
  withCredentials: true
});

export default accessServer;