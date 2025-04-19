import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllProducts } from '../../redux/slices/productSlice';

import {  Grid, Card, CardContent, CardMedia, Typography,
    CircularProgress,
    Alert,
    Box,
    Container,
} from '@mui/material';

const NewProducts = () => {
    const dispatch = useDispatch();
    const { products, loading, error } = useSelector((state) => state.product);

    useEffect(() => {
        dispatch(fetchAllProducts());
    }, [dispatch]);


    if (loading) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                <CircularProgress />
            </Box>
        );
    }

    if (error) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                <Alert severity="error">Error: {error}</Alert>
            </Box>
        );
    }

    return (
        <Container sx={{ mt: 4 }}>
            <Typography variant="h4" gutterBottom>
                All Products
            </Typography>
            <Grid container spacing={3}>
                {Array.isArray(products) && products.length > 0 ? (
                    products.map((product) => (
                        <Grid item key={product._id} xs={12} sm={6} md={4} lg={3}>
                            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={product.image}
                                    alt={product.name}
                                />
                                <CardContent>
                                    <Typography variant="h6">{product.name}</Typography>
                                    <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>{product.desc}</Typography>
                                    <Typography variant="body2"><strong>Category:</strong> {product.category}</Typography>
                                    <Typography variant="body2"><strong>Price:</strong> ₹{product.price}</Typography>
                                    <Typography variant="body2"><strong>Colors:</strong> {product.colors.join(', ')}</Typography>
                                    <Typography variant="body2"><strong>Sizes:</strong> {product.size.join(', ')}</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))
                ) : (
                    <Typography variant="body1" color="text.secondary" sx={{ p: 2 }}>
                        No products available.
                    </Typography>
                )}
            </Grid>
        </Container>
    );
};

export default NewProducts;
