import express from 'express';
import { addToCart, removeFromCart, getCart } from '../controllers/cartController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/add', protect, addToCart);
router.get('/', protect, getCart);
router.put('/remove', protect, removeFromCart);

export default router;
