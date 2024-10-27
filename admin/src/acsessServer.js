// src/auth.js
import axios from 'axios';

const accessServer = axios.create({
  baseURL: 'http://localhost:5001',
  withCredentials: true
});

export default accessServer;