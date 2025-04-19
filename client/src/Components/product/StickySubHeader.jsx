// StickySubheader.jsx
import React from 'react';
import { Box, Typography, CardMedia, Paper } from '@mui/material';

const StickySubHeader = ({ product, quantity, selectedColor, selectedSize, handleAddCart }) => {

    return (
        <Box sx={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            width: '100%',
            zIndex: 1000,
            boxShadow: 3,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',

        }}>
            <Paper sx={{
                width: { xs: '100%', lg: "80%" },
                px: 'auto',
                py: 1,
                display: 'flex',
                alignItems: 'center'
            }}>
                <CardMedia
                    component="img"
                    image={product?.image}
                    alt={product?.name}
                    sx={{ width: 50, height: 50, objectFit: 'cover', mr: 2, borderRadius: 1 }}
                />
                <Box>
                    <Typography variant="subtitle1" fontWeight="bold">{product?.name}</Typography>
                    <Typography variant="subtitle2" color="gray">Rs {product?.price}</Typography>
                </Box>
            </Paper>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Typography variant="body2">{selectedColor}</Typography>
                <Typography variant="body2">{selectedSize}</Typography>
                <Box
                    onClick={handleAddCart}
                    sx={{
                        bgcolor: 'black',
                        color: 'white',
                        px: 2,
                        py: 1,
                        borderRadius: 1,
                        cursor: 'pointer',
                        fontWeight: 'bold',
                        fontSize: '14px',
                        '&:hover': {
                            opacity: 0.9
                        }
                    }}
                >
                    Add to Cart
                </Box>
            </Box>
        </Box>
    );
};

export default StickySubHeader;
