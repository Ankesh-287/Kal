import express from 'express';
import { protect } from '../middleware/authMiddleware.js';
import { registerUser, loginUser, logoutUser, getUserProfile } from '../controllers/userController.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/logout', logoutUser);
router.get('/me', protect, getUserProfile);

export default router;
