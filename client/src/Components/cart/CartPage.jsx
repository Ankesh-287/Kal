// import React, { useEffect, useState } from 'react'
// import { Box, Button, CardMedia, Divider, Grid, IconButton, TextField, Typography } from '@mui/material';
// import { Remove, Add, CancelOutlined } from '@mui/icons-material';
// import CartPage from './Components/CartPage'

// function Cart() {
//     const [cartItems, setCartItems] = useState([]);

//     useEffect(() => {
//         const storedCart = JSON.parse(localStorage.getItem('cart')) || [];

//         if (!Array.isArray(storedCart)) {
//             localStorage.setItem("cart", JSON.stringify([]));
//             return;
//         }

//         setCartItems(storedCart);
//     }, []);

//     const updateQuantity = (id, amount) => {
//         const updatedCart = cartItems.map(item =>
//             item.id === id ? { ...item, quantity: Math.max(1, item.quantity + amount) } : item);

//         setCartItems(updatedCart);
//         localStorage.setItem("cart", JSON.stringify(updatedCart));
//         window.dispatchEvent(new Event("storage"));
//     };

//     const removeItem = (id) => {
//         const updatedCart = cartItems.filter(item => item.id !== id);
//         setCartItems(updatedCart);
//         localStorage.setItem("cart", JSON.stringify(updatedCart));
//         window.dispatchEvent(new Event("storage"));
//     }

//     const totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
//     return (
//         <>
//             <Box sx={{ p: 2 }}>

//                 {cartItems.length === 0 ? (
//                     <Typography sx={{ mt: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center',}}> Your Cart is Empty. </Typography>
//                 ) : (
//                     <>
//                         <Grid container spacing={3}>
//                             <Grid item xs={8} lg={8} >
//                                 <Grid container sx={{ p: 2, backgroundColor: 'pink', }} >
//                                     <Grid item xs={3} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', }} >

//                                     </Grid>
//                                     <Grid item xs={3} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', }} >
//                                         Product
//                                     </Grid>
//                                     <Grid item xs={2} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', }} >
//                                         Price
//                                     </Grid>
//                                     <Grid item xs={3} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', }} >
//                                         Quantity
//                                     </Grid>
//                                     <Grid item xs={1} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', }} >
//                                         Subtotal
//                                     </Grid>
//                                 </Grid>

//                                 {cartItems.map((item) => (
//                                     <>
//                                         <Grid container key={item.id} >
//                                             <Grid item xs={2} sm={2} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', }} >
//                                                 <IconButton onClick={() => removeItem(item.id)} sx={{}}> <CancelOutlined /> </IconButton>
//                                                 <CardMedia component="img" sx={{ width: 100, height: 100, p: 1 }} image={item.image} alt={item.name} />
//                                             </Grid>

//                                             <Grid item xs={4} sm={4} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', p: 2 }} >
//                                                 <Typography variant='body1'>{item.name} </Typography>
//                                                 <Typography variant='body1'> ({item.color}) </Typography>
//                                             </Grid>

//                                             <Grid item xs={2} sm={2} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', }} >
//                                                 <Typography variant='body2'> Rs. {item.price}.00 </Typography>
//                                             </Grid>

//                                             <Grid item xs={3} sm={3} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', }} >
//                                                 <IconButton onClick={() => updateQuantity(item.id, -1)}> <Remove /> </IconButton>
//                                                 <Typography sx={{ mx: 1 }}>{item.quantity} </Typography>
//                                                 <IconButton onClick={() => updateQuantity(item.id, +1)}> <Add /> </IconButton>
//                                             </Grid>
//                                             <Grid item xs={1} sm={1} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', }} >
//                                                 Rs. {item.price * item.quantity}
//                                             </Grid>
//                                         </Grid>
//                                     </>
//                                 ))}
//                                 {/* </> */}
//                             </Grid>

//                             <Grid item xs={4} lg={4}>
//                                 <Grid container sx={{ p: 2, backgroundColor: 'pink', }} >
//                                     <Grid item xs={12} sx={{ display: 'flex', alignItems: 'center', }} >
//                                         Cart totals
//                                     </Grid>
//                                 </Grid>

//                                 <Grid container sx={{ p: 3 }} >

//                                     <Grid item xs={12} sm={12} sx={{ display: 'flex', justifyContent: 'center', p: 2 }} >
//                                         <Typography variant='body1'> SubTotal  Rs. {totalAmount}</Typography>
//                                     </Grid>

//                                     <Divider />

//                                     <Grid item xs={12} sm={12} sx={{ display: 'flex', justifyContent: 'center', p: 2 }} >
//                                         <Typography variant='body1'> SubTotal  Rs. {totalAmount} </Typography>
//                                     </Grid>

//                                     <Divider />

//                                     <Grid item xs={8} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', }} >
//                                         <TextField
//                                             fullWidth
//                                             name="message"
//                                             placeholder="Coupan Code"
//                                             value=""
//                                         // onChange={handleData}
//                                         />
//                                     </Grid>

//                                     <Grid item xs={4} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', }} >
//                                         <Button variant='contained' sx={{ ml: 1, p: 2, width: '100%' }}>
//                                             Apply
//                                         </Button>
//                                     </Grid>

//                                     <Grid item xs={12} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', }} >
//                                         <Button variant='contained' sx={{ mt: 3, width: '100%' }}>
//                                             Proceed to Checkout
//                                         </Button>
//                                     </Grid>
//                                 </Grid>
//                             </Grid>

//                         </Grid>
//                     </>
//                 )}
//             </Box>
//         </>
//     )
// }

// export default Cart


