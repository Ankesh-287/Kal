import Category from "../models/CategoryModel.js";

export const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: "Error fetching categories", error: error.message });
  }
};

export const createCategories = async (req, res) => {
  try {
    const { name, slug, subCategories } = req.body;

    const exists = await Category.findOne({ name });
    if (exists) return res.status(400).json({ error: "Category already exists" });

    const category = new Category({ name, slug, subCategories });
    const savedCategory = await category.save();

    res.status(201).json(savedCategory);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
