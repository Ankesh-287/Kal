import { registerSchema, loginSchema } from '../utils/validationSchema.js';
import User from '../models/UserModel.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET;

const createToken = (userId) => jwt.sign({ id: userId }, JWT_SECRET, { expiresIn: '7d' });

export const registerUser = async (req, res) => {
  const { error } = registerSchema.validate(req.body, { abortEarly: false });

  if (error) {
    return res.status(400).json({
      message: 'Validation error',
      errors: error.details.map(err => err.message),
    });
  }

  const { firstname, lastname, phone, email, password, cpassword } = req.body;

  try {
    const userExists = await User.findOne({ email });
    if (userExists) return res.status(400).json({ message: 'User already exists' });

    if (!bcrypt) {
      throw new Error('bcrypt is not defined or failed to import');
    }

    const hashed = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      firstname,
      lastname,
      phone,
      email,
      password: hashed,
    });

    const token = createToken(newUser._id);

    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: process.env.NODE_ENV === 'production' ? 'strict' : 'lax',
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.json({
      user: {
        firstname: newUser.firstname,
        lastname: newUser.lastname,
        phone: newUser.phone,
        email: newUser.email,
      }
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const loginUser = async (req, res) => {
  const { error } = loginSchema.validate(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });

  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) return res.status(404).json({ message: 'User not found' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });

    const token = createToken(user._id);

    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 7 * 24 * 60 * 1000,
    });

    res.json({ user: { id: user._id, firstname: user.firstname, email: user.email } });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const logoutUser = (req, res) => {
  res.clearCookie('token', { httpOnly: true, sameSite: 'strict', secure: process.env.NODE_ENV === 'production' });
  res.json({ message: 'Logged out' });
}

export const getUserProfile = (req, res) => {
  const user = req.data.user;
  res.json({ user });
};