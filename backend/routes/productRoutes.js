import express from 'express';
import { fetchAllProducts, fetchProduct, getProductsBySubcategory, createProduct, updateProduct, deleteProduct } from '../controllers/productController.js'
const router = express.Router();

router.route('/')
.get(fetchAllProducts)
.get(getProductsBySubcategory)
.post(createProduct);

router.route('/:id')
.get(fetchProduct)
.put(updateProduct)
.delete(deleteProduct);

export default router;
