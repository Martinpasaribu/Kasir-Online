// src/store/auth.js
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

const axiosClient = axios.create({

  // baseURL: 'http://localhost:5001', 
  // // baseURL: 'https://kasir-online-server.vercel.app', 
  // baseURL: 'http://localhost:5001', 
  baseURL: 'https://kasir-online-server.vercel.app', 
  
  withCredentials: true
});

export async function checkSession() {
  try {
    const response = await axiosClient.get('/token');
    const token = response.data.accessToken;

    const decoded = jwtDecode(token);
    const currentDate = new Date();

       
    const expire = decoded.exp; 
    console.log("token dari refresh token:",token)
    console.log("Token expired:", expire * 1000);


    
    if (decoded.exp * 1000 > currentDate.getTime()) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error('Error checking session:', error.response ? error.response.data : error.message);
    return false;
  }
}
