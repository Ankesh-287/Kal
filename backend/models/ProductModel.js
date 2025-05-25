import mongoose from "mongoose";

const VariantSchema = new mongoose.Schema({
  sku: { type: String, required: true, unique: true },
  color: { type: String, required: true },
  size: { type: String, required: true },
  images: { type: [String], default: [] },
  price: { type: Number, required: true },
  stock: { type: Number, required: true }
}, { _id: false });

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  slug: { type: String, required: true },
  shortDescription: { type: String, required: true },
  desc: { type: String, required: true },

  images: { type: [String], required: true }, 
  image: { type: String, required: true },    

  price: { type: Number, required: true },
  discount: { type: Number, required: true },
  currency: { type: String, default: "INR" }, 

  category: { type: String, required: true },
  subCategory: { type: String, required: true },
  brand: { type: String, required: true },

  colors: { type: [String], required: true },
  size: { type: [String], required: true },

  stock: { type: Number, required: true },  
  rating: { type: Number, default: 0 },

  variants: [VariantSchema], 

  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }],

}, { timestamps: true });

const Product = mongoose.models.Product || mongoose.model("Product", ProductSchema);

export default Product;
