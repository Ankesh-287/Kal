import { Grid, IconButton } from '@mui/material';
import React from 'react';

function ProductColor({ colors = [], setSelectedColor, selectedColor }) {
    return (
        <>
            <Grid container spacing={2} sx={{ mt: 1, pl: '8px' }}>
                {colors.length > 0 ? (
                    colors.map((color, index) => (
                        <Grid item key={index}>
                            <IconButton
                                sx={{
                                    backgroundColor: color,
                                    p: 2,
                                    width: 24,
                                    height: 24,
                                    borderRadius: 0,
                                    border: selectedColor === color ? '2px solid black' : '1px solid grey',
                                    '&:hover': {
                                        opacity: 0.5,
                                        backgroundColor: color,
                                        border: "1px solid grey",
                                    },
                                }}
                                onClick={() => setSelectedColor(color)}
                            />
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
