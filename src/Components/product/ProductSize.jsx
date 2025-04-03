import { Grid, Button } from '@mui/material';
import React from 'react';

function ProductSize({ sizes = [], setSelectedSize, selectedSize }) {
    return (
        <>
            <Grid container spacing={2} sx={{ my: 1 }}>
                {sizes.map((size, index) => (
                    <Grid item key={index}>
                        <Button
                            sx={{backgroundColor:'white', 
                                color:"black",borderRadius: '2px', textTransform: 'none' }}
                            variant={selectedSize === size ? "contained" : "outlined"}
                            onClick={() => setSelectedSize(size)}
                        >
                            {size}
                        </Button>
                    </Grid>
                ))}
            </Grid>
        </>
    );
}

export default ProductSize;
