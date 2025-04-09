import express from "express";
import Cart from "../models/Cart.js";
const router = express.Router();

router.get("/", async (req, res) => {
    let cart = await Cart.findOne().populate("items.productId");
    if(!cart) cart = await new Cart({items:[]}).save();
    res.json(cart);
})

router.post("/add", async(req, res) => {
    const {productId, quantity} = req.body;
    let cart = await Cart.findOne();

    if(!cart) {
        cart = new Cart({ items: [{productId, quantity}]});
    } else {
        const item = cart.items.find(item => item.productId.toString() === productId.toString());
        if(item) {
            item.quantity += quantity;
        } else {
            cart.items.push({productId, quantity});
        }
    }

    await cart.save();
    res.json(cart);
});

router.post("/remove", async (req, res) => {
    const { productId} = req.body;
    let cart = await Cart.findOne();
    cart.items = cart.items.filter(item=> productId.toString() !== productId);
    await cart.save();
    res.json(cart);
});

router.post("/update", async(req, res) => {
    const {productId, quantity} = req.body;
    let cart = await Cart.findOne();
    const item = cart.items.find(item => item.productId.toString() === productId.toString());
    if(item) item.quantity = quantity;
    await cart.save();
    res.json(cart);
});

export default router;