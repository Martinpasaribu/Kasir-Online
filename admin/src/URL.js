import axios from 'axios'

// const axiosClient = axios.create({
//   baseURL: 'http://localhost:3002', withCredentials: true
// });

const URL = axios.create({

   baseURL: 'http://localhost:5001', 
   baseURL: 'https://kasir-online-server.vercel.app', 

   withCredentials: true

});




export default URL
