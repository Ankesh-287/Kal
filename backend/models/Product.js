import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  name: String,
  price: Number,
  image: String,
  category: String,
  subcategory: String,
});

const Product = mongoose.model("Product", ProductSchema);
export default Product;
