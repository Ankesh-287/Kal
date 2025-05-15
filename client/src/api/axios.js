import axios from 'axios';
const API = axios.create({
    baseURL: 'https://kal-backend.onrender.com/api',
    withCredentials: true
});
export default API;