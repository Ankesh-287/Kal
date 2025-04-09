import mongoose from "mongoose";

const CartItemSchema = new mongoose.Schema({
    productId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
    },
    quantity:{
        type: Number,
        default: 1
    }
});

const CartSchema = new mongoose.Schema({
    items: [CartItemSchema]
});

export default mongoose.model("Cart", CartSchema);