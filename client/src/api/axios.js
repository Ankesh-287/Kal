import axios from 'axios';
const API = axios.create({
    baseURL: 'http://localhost:5173/api',
    withCredentials: true
});
export default API;