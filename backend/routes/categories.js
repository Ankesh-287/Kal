import express from "express";
import Categrory from "../models/Category.js"
const router = express.Router();

router.get("/", async(req, res) => {
    try {
        const categories = await Categrory.find();
        res.json(categories); 
    } catch (error) {
        res.status(500).join({ error: error.message});
    }
});

router.post("/", async (req, res) => {
    try {
        const name = req.body;
        const existing = await  Categrory.findOne(name);
        if( existing ) return res.status(400).json({error: "Category already exists"});

        const category = new Categrory(name);
        await category.save();
        res.status(201).json(category);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

export default router;