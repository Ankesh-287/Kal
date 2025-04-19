import { Grid, Button } from '@mui/material';
import { useTheme } from "@mui/material/styles";
import React from 'react';

function ProductSize({ sizes = [], setSelectedSize, selectedSize, selectedColor, onClear }) {
    const theme = useTheme();
    const isDarkMode = theme.palette.mode === 'dark';

    return (
        <Grid container spacing={2} sx={{ my: 1 }}>
            {sizes.map((size, index) => (
                <Grid item key={index}>
                    <Button
                        size='small'
                        onClick={() => setSelectedSize(size)}
                        sx={{
                            fontWeight:'400',
                            minWidth: 30,
                            height: 28,
                            px: 1.5,
                            backgroundColor: 'transparent',
                            color: selectedSize === size
                                ? theme.palette.text.primary
                                : theme.palette.text.secondary,
                            border: `1px solid ${selectedSize === size ? theme.palette.text.primary : theme.palette.divider}`,
                            textTransform: 'none',
                            borderRadius: '2px',
                            transition: 'all 0.2s ease',
                            '&:hover': {
                                color: theme.palette.text.primary,
                                border: `1px solid ${theme.palette.text.primary}`,
                                backgroundColor: isDarkMode ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.04)',
                            }
                        }}
                    >
                        {size}
                    </Button>
                </Grid>
            ))}

            {(selectedSize || selectedColor) && (
                <Grid item>
                    <Button
                        onClick={onClear}
                        sx={{
                            bgcolor: 'transparent',
                            color: theme.palette.text.secondary,
                            fontWeight: 400,
                            fontSize: '0.8rem',
                            '&:hover': {
                                bgcolor: 'transparent',
                                textDecoration: 'underline',
                            }
                        }}
                    >
                        CLEAR
                    </Button>
                </Grid>
            )}
        </Grid>
    );
}

export default ProductSize;
