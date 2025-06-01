import Cart from '../models/CartModel.js';

export const getCart = async (req, res) => {
  console.log('GET CART for user:', req.user._id);

  const cart = await Cart.findOne({ user: req.user._id });
  if (!cart) {
    console.log('No cart found. Returning empty items array.');
    return res.json({ items: [] });
  }

  const updatedItems = cart.items.map(item => ({
    ...item.toObject(),
    productId: item.productId.toString(),
  }));

  console.log('Cart found:', cart);
  res.json({ ...cart.toObject(), items: updatedItems });
};

export const addToCart = async (req, res) => {
  const { productId, name, price, image, color, size, quantity } = req.body;
  console.log('ADD TO CART - Request Body:', req.body);

  let cart = await Cart.findOne({ user: req.user._id });
  if (!cart) {
    console.log('No existing cart. Creating a new one.');
    cart = new Cart({ user: req.user._id, items: [] });
  }

  const existingItem = cart.items.find(
    item =>
      item.productId.toString() === productId.toString() &&
      item.name === name &&
      item.price === price &&
      item.color === color &&
      item.size === size
  );

  if (existingItem) {
    console.log('Existing item found. Increasing quantity.');
    existingItem.quantity += quantity;
  } else {
    console.log('Adding new item to cart.');
    cart.items.push({ productId, name, price, image, color, size, quantity });
  }

  await cart.save();
  console.log('Cart after adding item:', cart);
  res.json({ items: cart.items });
};

export const updateCartItem = async (req, res) => {
  const { itemId, quantity } = req.body;
  console.log('UPDATE CART ITEM - Item ID:', itemId, 'Quantity:', quantity);

  const cart = await Cart.findOne({ user: req.user._id });
  if (!cart) {
    console.log('No cart found for user.');
    return res.status(404).json({ message: 'Cart not found' });
  }

  const item = cart.items.id(itemId);
  if (!item) {
    console.log('Item not found in cart.');
    return res.status(404).json({ message: 'Item not found' });
  }

  item.quantity = quantity;
  await cart.save();
  console.log('Cart after updating item:', cart);
  res.json(cart);
};

export const removeCartItem = async (req, res) => {
  const { itemId } = req.params;
  console.log('REMOVE CART ITEM - Item ID:', itemId);

  const cart = await Cart.findOne({ user: req.user._id });
  if (!cart) {
    console.log('No cart found for user.');
    return res.status(404).json({ message: 'Cart not found' });
  }

  cart.items = cart.items.filter(item => item._id.toString() !== itemId);
  await cart.save();
  console.log('Cart after removing item:', cart);
  res.json(cart);
};

export const clearCart = async (req, res) => {
  console.log('CLEAR CART for user:', req.user._id);

  await Cart.findOneAndUpdate({ user: req.user._id }, { items: [] });
  console.log('Cart cleared successfully');
  res.json({ message: "Cart cleared" });
};
