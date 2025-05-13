import React from 'react';
import { Box, Typography, CardMedia, Paper, useTheme, Button } from '@mui/material';

const StickySubHeader = ({ product, quantity, selectedColor, selectedSize, handleAddCart }) => {
    const theme = useTheme();

    return (
        <Box
            sx={{
                position: 'fixed',
                bottom: 0,
                left: 0,
                width: '100%',
                zIndex: 1000,
                bgcolor: theme.palette.background.paper,
                boxShadow: 4,
                py: 1,
                px: 2,
            }}
        >
            <Paper
                elevation={0}
                sx={{
                    width: '100%',
                    maxWidth: '1200px',
                    margin: '0 auto',
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: 2,
                    px: 2,
                    py: 1,
                }}
            >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <CardMedia
                        component="img"
                        image={product?.image}
                        alt={product?.name}
                        sx={{ width: 50, height: 50, borderRadius: 1, objectFit: 'cover' }}
                    />
                    <Box>
                        <Typography variant="subtitle1" fontWeight={600}>{product?.name}</Typography>
                        <Typography variant="subtitle2" color="text.secondary">Rs {product?.price}</Typography>
                    </Box>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Typography variant="body2" color="text.secondary">{selectedColor}</Typography>
                    <Typography variant="body2" color="text.secondary">{selectedSize}</Typography>
                    <Button
                        variant="contained"
                        onClick={handleAddCart}
                        sx={{
                            textTransform: 'none',
                            fontWeight: 'bold',
                            px: 3,
                            py: 1,
                        }}
                    >
                        Add to Cart
                    </Button>
                </Box>
            </Paper>
        </Box>
    );
};

export default StickySubHeader;
