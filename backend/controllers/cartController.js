import Cart from '../models/CartModel.js';

export const getCart = async (req, res) => {
  const cart = await Cart.findOne({ user: req.user._id });

  if (!cart) return res.json({ items: [] });

  const updatedItems = cart.items.map(item => ({
    ...item.toObject(),
    productId: item.productId.toString(),
  }));

  res.json({ ...cart.toObject(), items: updatedItems });
};

export const addToCart = async (req, res) => {
  const { productId, name, price, image, color, size, quantity } = req.body;

  let cart = await Cart.findOne({ user: req.user._id });
  if (!cart) cart = new Cart({ user: req.user._id, items: [] });

  const existingItem = cart.items.find(
    item =>
      item.productId.toString() === productId.toString() &&
      item.name === name &&
      item.price === price &&
      item.color === color &&
      item.size === size
  );

  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.items.push({ productId, name, price, image, color, size, quantity });
  }

  await cart.save();
  res.json({ items: cart.items });
};


export const updateCartItem = async (req, res) => {
  const { itemId, quantity } = req.body;
  const cart = await Cart.findOne({ user: req.user._id });

  const item = cart.items.id(itemId);
  if (!item) return res.status(404).json({ message: 'Item not found' });

  item.quantity = quantity;
  await cart.save();
  res.json(cart);
};

export const removeCartItem = async (req, res) => {
  const { itemId } = req.params;
  const cart = await Cart.findOne({ user: req.user._id });

  cart.items = cart.items.filter(item => item._id.toString() !== itemId);
  await cart.save();
  res.json(cart);
};

export const clearCart = async (req, res) => {
  await Cart.findOneAndUpdate({ user: req.user._id }, { items: [] });
  res.json({ message: "Cart cleared" });
};
