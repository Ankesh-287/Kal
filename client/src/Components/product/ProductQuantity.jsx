import { Add, Remove } from '@mui/icons-material'
import { Button, Box, IconButton, Typography } from '@mui/material'

const ProductQuantity = ({ handleAddCart, handleDecrease, handleIncrease, quantity}) => {
    return (
        <>
            <Box sx={{ display: 'flex', alignItems: 'center', mt: 3 }}>
                <IconButton size="small" onClick={handleDecrease} sx={{ 
                    color: 'grey', 
                    fontWeight: '400',
                    border: '1px solid gray', 
                    borderRadius: 0 }}>
                    <Remove />
                </IconButton>
                <Typography variant="h6" sx={{ mx: 2 }}>
                    {quantity}
                </Typography>
                <IconButton size="small" onClick={handleIncrease} sx={{ 
                    color: 'grey', 
                    fontWeight: '400',
                    border: '1px solid gray', 
                    borderRadius: 0 
                    }}>
                    <Add />
                </IconButton>
                <Button variant="contained" size="small" sx={{ mx: 3, px: 3 }}
                    onClick={handleAddCart}>
                        Add to cart
                </Button>
            </Box>
        </>
    )
}

export default ProductQuantity
