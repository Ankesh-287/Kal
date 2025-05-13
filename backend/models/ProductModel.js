import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  desc: { type: String, required: true },
  colors: { type: Array, required: true },
  size: { type: Array, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  category: { type: String, required: true },
  subCategory: { type: String, required: true},
  brand: { type: String, required: true},
  stock: { type: Number, required: true },
  rating: { type: Number, required: true },
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
}, { timestamps: true });

const Product = mongoose.model("Product", ProductSchema);
export default Product;
