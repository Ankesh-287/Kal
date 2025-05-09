import express from 'express';
import { protect } from '../middleware/authMiddleware.js'
import { registerUser, loginUser, logoutUser, getUserProfile } from '../controllers/userController.js'
import { body } from 'express-validator';

const router = express.Router();

router.post(
    '/register',
    [
      body('firstname').trim().notEmpty().withMessage('First name is required'),
      body('lastname').trim().notEmpty().withMessage('Last name is required'),
      body('phone').trim().notEmpty().withMessage('Phone is required'),
      body('email').trim().isEmail().withMessage('Valid email is required'),
      body('password')
        .isLength({ min: 8 })
        .withMessage('Password must be at least 6 characters long'),
      body('cpassword')
        .custom((value, { req }) => value === req.body.password)
        .withMessage('Passwords do not match')
    ],
    registerUser
  );

router.post('/login', loginUser);
router.post('/logout', logoutUser);
router.get('/profile', protect, getUserProfile);

export default router;

