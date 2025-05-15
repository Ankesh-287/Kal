import axios from 'axios';
const API = axios.create({
    baseURL: import.meta.env.PROD 
    ? 'https://kal-backend.onrender.com/api' 
    : 'http://localhost:5000/api',
    withCredentials: true
});
export default API;