import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  withCredentials: true,
});

export const fetchProducts = () => API.get("/products");
export const getCart = () => API.get("/cart");
export const addToCart = (data) => API.post("/cart/add", data);
export const removeFromCart = (id) => API.delete(`/cart/remove/${id}`);
export const updateCategory = (data) => API.put("/cart/update", data);

export default API;
