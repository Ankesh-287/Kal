import Cart from '../models/CartModel.js';
import Product from '../models/productModel.js';

export const getCart = async (req, res) => {
  try {
    const userId = req.user._id;

    const cart = await Cart.findOne({ user: userId }).populate('items.product', 'name price image');

    if (!cart) {
      return res.status(200).json({ items: [] }); 
    }

    res.status(200).json({ items: cart.items });
  } catch (err) {
    console.error('Error fetching cart:', err);
    res.status(500).json({ message: 'Server error while fetching cart' });
  }
};

export const addToCart = async (req, res) => {
  const userId = req.user._id;
  const { productId, quantity, color, size } = req.body;

  const product = await Product.findById(productId);
  if (!product) return res.status(404).json({ message: 'Product not found' });

  let cart = await Cart.findOne({ user: userId });
  if (!cart) {
    cart = new Cart({ user: userId, items: [] });
  }

  const existingItem = cart.items.find(
    item =>
      item.productId.equals(productId) &&
      item.color === color &&
      item.size === size
  );

  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.items.push({
      productId,
      name: product.name,
      image: product.image,
      price: product.price,
      color,
      size,
      quantity,
    });
  }

  await cart.save();
  res.status(200).json(cart);
};

export const removeFromCart = async (req, res) => {
  const userId = req.user._id;
  const { productId, size, color } = req.body;

  const cart = await Cart.findOne({ user: userId });
  if (!cart) return res.status(404).json({ message: 'Cart not found' });

  cart.items = cart.items.filter(
    item =>
      !(item.productId.equals(productId) && item.size === size && item.color === color)
  );

  await cart.save();
  res.status(200).json(cart);
};