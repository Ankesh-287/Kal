import dotenv from 'dotenv';
import cors from 'cors';
import express from 'express';
import connectDB from './config/db.js';
import cookieParser from 'cookie-parser';
import userRoutes from './routes/userRoutes.js';
import cartRoutes from './routes/cartRoutes.js';
import productRoutes from './routes/productRoutes.js';
import categoryRoutes from './routes/categoriesRoutes.js';
import errorHandler from './middleware/errorMiddleware.js';

dotenv.config();
console.log('JWT_SECRET:', process.env.JWT_SECRET);
connectDB();

const app = express();

const corsOptions = {
  origin: [
    'http://localhost:5173',
    'https://kal-lilac.vercel.app'
  ],
  credentials: true,
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(cookieParser());

app.use('/api/products', productRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/users', userRoutes);

app.use(errorHandler);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
