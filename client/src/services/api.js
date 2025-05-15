import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/api" });

export const fetchProducts = () => API.get("/products");
export const getCart = () => API.get("/cart");
export const addToCart = (data) => API.post("/cart/add", data);
export const removeFromCart = (id) => API.delete(`/cart/remove/${id}`);
export const updateCategory = (data) => API.put("/cart/update", data);

export default API;

//update