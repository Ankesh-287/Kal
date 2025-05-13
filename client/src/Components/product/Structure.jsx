import { Alert, Box, Card, CardMedia, CircularProgress, Container, Grid, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllProducts } from '../../redux/slices/productSlice';
import Sidebar from './Sidebar';

function Structure() {
    const dispatch = useDispatch();
    const { products, loading, error } = useSelector((state) => state.product);

    useEffect(() => {
        dispatch(fetchAllProducts());
    }, [dispatch])

    //  if (loading) {
    //         return (
    //             <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
    //                 <CircularProgress />
    //             </Box>
    //         );
    //     }
    
    //     if (error) {
    //         return (
    //             <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
    //                 <Alert severity="error">Error: {error}</Alert>
    //             </Box>
    //         );
    //     }
    

    return (
        <>
            <>
                <Sidebar />
                {/* <Grid container spacing={3} >
                    {Array.isArray(products) && products.length > 0 ? (
                        products.map((product) => (
                            <Grid item key={product._id} xs={12} sm={6} md={4} lg={3}>
                                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                                    <CardMedia component='img' image={product.image} alt={product.name} height='200' />
                                </Card>
                            </Grid>
                        ))
                    ) : (
                        <Typography variant="body1" color="text.secondary" sx={{ p: 2 }}>
                        No products available.
                    </Typography>
                    )}
                </Grid> */}
            </>
        </>
    )
}

export default Structure
