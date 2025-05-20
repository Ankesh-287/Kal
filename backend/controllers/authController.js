import User from '../models/User.js';
import jwt from 'jsonwebtoken';

const createToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: '7d',
  });
};

export const register = async (req, res) => {
  const { name, email, password } = req.body;
  const existing = await User.findOne({ email });
  if (existing) return res.status(400).json({ message: 'Email already used' });

  const user = await User.create({ name, email, password });
  const token = createToken(user._id);

  res.cookie('token', token, {
    httpOnly: true,
    sameSite: 'strict',
    secure: process.env.NODE_ENV === 'production',
    maxAge: 86400000,
  });

  res.status(201).json({ _id: user._id, name: user.name, email: user.email });
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || !(await user.comparePassword(password)))
    return res.status(401).json({ message: 'Invalid credentials' });

  const token = createToken(user._id);
  res.cookie('token', token, {
    httpOnly: true,
    sameSite: 'strict',
    secure: process.env.NODE_ENV === 'production',
    maxAge: 86400000,
  });

  res.status(200).json({ _id: user._id, name: user.name, email: user.email });
};

export const getMe = async (req, res) => {
  const user = await User.findById(req.user.id).select('-password');
  res.status(200).json(user);
};

export const logout = (req, res) => {
  res.clearCookie('token').status(200).json({ message: 'Logged out' });
};
