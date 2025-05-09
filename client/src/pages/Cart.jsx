import React, { useEffect, useState } from 'react'
import { Box, Grid, Typography } from '@mui/material';
import CartHeader from '../Components/cart/CartHeader';
import CartSummary from '../Components/cart/CartSummary';
import CartList from '../Components/cart/CartList';
import CartList2 from '../Components/cart/CartList2';

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    if (!Array.isArray(storedCart)) {
      localStorage.setItem("cart", JSON.stringify([]));
      return;
    }
    setCartItems(storedCart);
  }, []);

  const updateQuantity = (id, color, size, amount) => {
    const updatedCart = cartItems.map(item =>
      item.id === id && item.color === color && item.size === size ? { ...item, quantity: Math.max(1, item.quantity + amount) } : item);

    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    window.dispatchEvent(new Event("storage"));
  };

  const removeItem = (id, color, size) => {
    const updatedCart = cartItems.filter(item => !(item.id == id && item.color === color && item.size === size));
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    window.dispatchEvent(new Event("storage"));
  }

  const totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <Box sx={{ display: 'flex', width: { xs: '100%', md: '100%', lg: "80%" }, m: "auto", p: 5, flexDirection: 'column', }}>
      <Typography variant='h1' > Cart </Typography>

      {cartItems.length === 0 ? (
        <Typography sx={{ textAlign: 'center' }}> Your Cart is Empty. </Typography>
      ) : (
        <Grid container spacing={3} >
          <Grid item xs={12} md={8} >
            <CartHeader />
            <CartList cartItems={cartItems} updateQuantity={updateQuantity} removeItem={removeItem} />
            <CartList2 cartItems={cartItems} updateQuantity={updateQuantity} removeItem={removeItem} />
          </Grid>
          <Grid item xs={12} md={4} >
            <CartSummary totalAmount={totalAmount} />
          </Grid>
        </Grid>
      )}
    </Box>
  )
}

export default Cart


