import { Add, Remove } from '@mui/icons-material'
import { Button, Box, IconButton, Typography } from '@mui/material'
import React from 'react'

const ProductQuantity = ({ handleAddCart, handleDecrease, handleIncrease, quantity}) => {
    return (
        <>
            <Box sx={{ display: 'flex', alignItems: 'center', mt: 3 }}>
                <IconButton onClick={handleDecrease} sx={{ border: '1px solid gray', borderRadius: 0 }}>
                    <Remove />
                </IconButton>
                <Typography variant="h6" sx={{ mx: 2 }}>
                    {quantity}
                </Typography>
                <IconButton onClick={handleIncrease} sx={{ border: '1px solid gray', borderRadius: 0 }}>
                    <Add />
                </IconButton>
                <Button variant="contained" sx={{ mx: 3, px: 3 }}
                    onClick={handleAddCart}>
                        Add to cart
                </Button>
            </Box>
        </>
    )
}

export default ProductQuantity
