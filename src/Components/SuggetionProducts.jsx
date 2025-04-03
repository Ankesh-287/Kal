import React from 'react'
import { Box, CardMedia, Grid, Typography } from '@mui/material';
import productsData from "../data/data"

const SuggetionProducts = () => {
    const menProducts = Object.values(productsData.men).flat();
    return (

        <>
            <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 3 }}>
                Related Products
            </Typography>

            <Grid container spacing={2}>
                {menProducts.slice(0, 4).map((item) => (
                    <Grid item xs={6} sm={4} md={3} key={item.id}>
                        <Box >
                            <CardMedia component="img"
                                image={item.image}
                                alt="Product"
                                sx={{ width: '100%', }}
                            />
                            <Typography variant="body1" sx={{ mt: 1, fontSize:'12px', color:'grey.500' }}>
                                {item.type.toUpperCase()}
                            </Typography>
                            <Typography variant="body1" sx={{ fontWeight:'bold'}}>
                                {item.name}
                            </Typography>
                            <Typography variant="subtitle2" sx={{ color: 'gray' }}>
                                Rs. {item.price}
                            </Typography>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </>
    )
}

export default SuggetionProducts
