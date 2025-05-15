import { Box, Grid, IconButton, Tooltip } from '@mui/material';
import React from 'react';

function ProductColor({ colors = [], setSelectedColor, selectedColor }) {
    return (
        <>
            <Grid container spacing={2} sx={{ mt: 1,  }}>
                {colors.length > 0 ? (
                    colors.map((color, index) => (
                        <Grid item key={index}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    p: '.1rem',
                                    backgroundColor: 'white',
                                    border: selectedColor === color ? '1px solid black' : '1px solid transparent',
                                    borderRadius: 0,
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        border: '1px solid #616161',
                                    }
                                }}
                            >
                                <Tooltip
                                    title= {`${color}`}
                                    placement="top"
                                    arrow
                                >
                                <IconButton
                                    disableTouchRipple
                                    onClick={() => setSelectedColor(color)}
                                    sx={{
                                        backgroundColor: color,
                                        width: 24,
                                        height: 24,
                                        borderRadius: 0,
                                        '&:hover': {
                                            backgroundColor: color,
                                            opacity: 0.9,
                                        }
                                    }}
                                />
                                </Tooltip>
                            </Box>
                        </Grid>
                    ))
                ) : (
                    <p style={{ color: 'grey' }}>No Colors Available</p>
                )}
            </Grid>
        </>
    );
}

export default ProductColor;
