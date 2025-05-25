import mongoose from "mongoose";

const SubCategorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  slug: { type: String, required: true,  }
}, { _id: false });

const CategorySchema = new mongoose.Schema({
  name: { type: String, required: true,  },
  slug: { type: String, required: true, unique: true },
  subCategories: [SubCategorySchema]
}, { timestamps: true });

const Category = mongoose.models.Category || mongoose.model("Category", CategorySchema);

export default Category;
