import express from 'express';
import { fetchAllProducts, fetchProduct, getProductsBySubcategory, createProduct, updateProduct, deleteProduct } from '../controllers/productController.js'
const router = express.Router();

router.get('/subcategory/:subcategory', getProductsBySubcategory);

router.route('/')
.get(fetchAllProducts)
.post(createProduct);

router.route('/:id')
.get(fetchProduct)
.put(updateProduct)
.delete(deleteProduct);

export default router;
