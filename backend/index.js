import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from "./config/db.js";
import productRoutes from "./routes/product.js";
import cartRoutes from "./routes/cart.js"
import categoryRoutes from "./routes/categories.js"


dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

connectDB();

app.use("/api/products", productRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/cart", cartRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));


