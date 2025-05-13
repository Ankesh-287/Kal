import React, { useEffect, useState } from 'react'
import { Box, Button, Card, CardContent, CardMedia, Grid, IconButton, Typography } from '@mui/material';
import { Remove, Add, Delete } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

function CartPanel() {
    const [cartItems, setCartItems] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cart')) || [];

        if (!Array.isArray(storedCart)) {
            localStorage.setItem("cart", JSON.stringify([]));
            return;
        }  
        setCartItems(storedCart);
    }, []);

    const updateQuantity = (id, amount) => {
        const updatedCart = cartItems.map(item =>
            item.id === id ? { ...item, quantity: Math.max(1, item.quantity + amount) } : item);

        setCartItems(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        window.dispatchEvent(new Event("storage"));
    };

    const removeItem = (id) => {
        const updatedCart = cartItems.filter(item => item.id !== id);
        setCartItems(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        window.dispatchEvent(new Event("storage"));
    }

    const totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <>
        
            <Box
                sx={{
                    display:'flex',
                    position: 'absolute',
                    top: 100,
                    right: 0,
                    width: "500px",
                    height: 'auto',
                    backgroundColor: 'lavenderblush',
                    zIndex: (theme) => theme.zIndex.box + 100,
                }}>

                <Box sx={{ p: 2 }}>
                    <Typography variant='h5' fontWeight="bold"> Shopping Cart </Typography>
                    {cartItems.length === 0 ? (
                        <Typography sx={{ mt: '2px' }}> Your Cart is Empty. </Typography>
                    ) : (
                        <>
                            <Grid container spacing={3} sx={{ mt: '2px' }}>
                                {cartItems.map((item, index) => (
                                    <Grid item xs={12} key={`${item.id}-${item.color}-${item.size}-${index}`}>
                                        <Card sx={{ display: "flex", alignItem: "center", p: 2 }}>
                                            <CardMedia component="img"
                                                sx={{ width: 100, height: 100 }}
                                                image={item.image}
                                                alt={item.name}
                                            />
                                            <CardContent sx={{ m:'auto', flex: 1, py: 0,  }}>
                                                <Typography variant='body1'>{item.name}</Typography>
                                                <Typography variant='body2'> Price : Rs {item.price } </Typography>
                                                <Typography variant='body2'> Color: {item.color } </Typography>
                                                <Typography variant='body2'> Size: {item.size } </Typography>
                                            </CardContent>
                                            <Box sx={{ display: "flex", alignItems: "center", }}>
                                                <IconButton onClick={() => updateQuantity(item.id, -1)}>
                                                    <Remove />
                                                </IconButton>
                                                <Typography sx={{ mx: 1 }}>{item.quantity} </Typography>
                                                <IconButton onClick={() => updateQuantity(item.id, +1)}>
                                                    <Add />
                                                </IconButton>
                                            </Box>
                                            <IconButton onClick={() => removeItem(item.id)} sx={{
                                                ml: 2, m:'auto'
                                            }}>
                                                <Delete />
                                            </IconButton>
                                        </Card>
                                    </Grid>
                                ))}
                            </Grid>

                            <Typography variant="h5" sx={{ mt: 2 }}> Total: Rs {totalAmount} </Typography>

                            <Button variant='contained' sx={{ mt: 3, backgroundColor: "black", color: 'white' }}
                            onClick={() => navigate('/cart')}>
                                View Cart
                            </Button>

                            <Button variant='contained' sx={{ mt: 3, backgroundColor: "black", color: 'white' }}
                            onClick={() => navigate('/cart')}>
                               Checkout
                            </Button>
                        </>
                    )}
                </Box>
            </Box>
        </>
    )
}

export default CartPanel


