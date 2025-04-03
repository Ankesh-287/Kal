import { Grid, Button } from '@mui/material';
import React from 'react';

function ProductSize({ sizes = [], setSelectedSize, selectedSize }) {
    return (
        <>
            <Grid container spacing={2} sx={{ my: 1 }}>
                {sizes.map((size, index) => (
                    <Grid item key={index}>
                        <Button
                            variant={selectedSize === size ? "contained" : "outlined"}
                            onClick={() => setSelectedSize(size)}
                            sx={{ borderRadius: '2px', textTransform: 'none' }}
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
