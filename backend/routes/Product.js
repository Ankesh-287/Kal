import express from 'express';
import Product from "../models/Product.js"
const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const data = req.body;
    
        if (Array.isArray(data)) {
          const saved = await Product.insertMany(data);
          res.json(saved);
        } else {
          const product = new Product(data);
          const saved = await product.save();
          res.json(saved);
        }
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Something went wrong", error: error.message });
      }
});

router.get("/", async (req, res) => {
    const products = await Product.find();
    res.json(products);
})

router.put("/:id", async (req, res) => {
    const updated = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.json(updated);
});

router.delete("/:id", async(req, res) => {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message : "Product deleted"});
});

export default router;