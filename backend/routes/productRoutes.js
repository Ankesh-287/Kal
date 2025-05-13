import express from 'express';
import { fetchAllProducts, fetchProduct, createProduct, updateProduct, deleteProduct } from '../controllers/productController.js'
const router = express.Router();

router.route('/')
.get(fetchAllProducts)
.post(createProduct);

router.route('/:id')
.get(fetchProduct)
.put(updateProduct)
.delete(deleteProduct);

export default router;
