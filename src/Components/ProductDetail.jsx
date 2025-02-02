import { Box, Grid, Typography, Button, Divider, IconButton } from '@mui/material';
import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

function ProductDetail() {
    const [quantity, setQuantity] = useState(1);

    const handleIncrease = () => setQuantity(quantity + 1);
    const handleDecrease = () => quantity > 1 && setQuantity(quantity - 1);

    return (
        <Box sx={{ width: '100%', p: 4 }}>
            {/* Product Section */}
            <Grid container justifyContent="center" spacing={4}>
                {/* Product Image */}
                <Grid item xs={12} md={6}>
                    <Box sx={{ p: 2, border: '1px solid grey', borderRadius: 2 }}>
                        <img 
                            src="https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-06-a-400x488.jpg" 
                            alt="T-Shirt" 
                            style={{ width: '100%', borderRadius: 5 }} 
                        />
                    </Box>
                </Grid>

                {/* Product Details */}
                <Grid item xs={12} md={6}>
                    <Typography variant="body2" sx={{ color: 'gray', fontSize: '18px' }}>
                        MEN
                    </Typography>
                    <Typography variant="h4" sx={{ fontWeight: 'bold', mt: 1 }}>
                        T-Shirt Name 4
                    </Typography>
                    <Typography variant="h5" sx={{ color: '#E53935', fontWeight: 'bold', mt: 1 }}>
                        $17.00 – $19.00 & Free Shipping
                    </Typography>

                    <Typography variant="body1" sx={{ mt: 2, color: 'gray' }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dapibus interdum eros. In blandit velit a lacus laoreet dictum.
                    </Typography>

                    {/* Quantity Selector */}
                    <Box sx={{ display: 'flex', alignItems: 'center', mt: 3 }}>
                        <IconButton onClick={handleDecrease} sx={{ border: '1px solid gray', borderRadius: 1 }}>
                            <RemoveIcon />
                        </IconButton>
                        <Typography variant="h6" sx={{ mx: 2 }}>
                            {quantity}
                        </Typography>
                        <IconButton onClick={handleIncrease} sx={{ border: '1px solid gray', borderRadius: 1 }}>
                            <AddIcon />
                        </IconButton>
                    </Box>

                    {/* Add to Cart Button */}
                    <Button variant="contained" sx={{ backgroundColor: 'black', color: 'white', mt: 3, px: 3 }}>
                        Add to Cart
                    </Button>

                    {/* Product Info */}
                    <Divider sx={{ my: 4 }} />
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                        About the Product
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'gray', mt: 1 }}>
                        Our T-Shirts are made of 100% cotton, breathable fabric, and 260gsm material for a premium feel.
                    </Typography>

                    {/* Size & Fit */}
                    <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 2 }}>
                        Size & Fit
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'gray' }}>
                        Model is wearing size M and is 6'1". Standard fit for a relaxed, easy feel.
                    </Typography>

                    {/* Free Delivery */}
                    <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 2 }}>
                        Free Delivery & Returns
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'gray' }}>
                        Free standard delivery on orders over $60. Returns accepted within 30 days, free of charge.
                    </Typography>
                </Grid>
            </Grid>

            {/* Related Products */}
            <Divider sx={{ my: 4 }} />
            <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 3 }}>
                Related Products
            </Typography>

            <Grid container spacing={3}>
                {[1, 2, 3, 4].map((item) => (
                    <Grid item xs={12} sm={6} md={3} key={item}>
                        <Box sx={{ textAlign: 'center', p: 2, border: '1px solid grey', borderRadius: 2 }}>
                            <img 
                                src="https://via.placeholder.com/150" 
                                alt="Product" 
                                style={{ width: '100%', borderRadius: 5 }} 
                            />
                            <Typography variant="h6" sx={{ mt: 1 }}>
                                T-Shirt Name {item}
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'gray' }}>
                                $20.00 – $25.00
                            </Typography>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default ProductDetail;
