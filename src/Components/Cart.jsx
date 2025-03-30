import React from 'react'
import { IconButton, Badge } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";

function Cart() {
    return (
        <IconButton >
            
            <Badge badgeContent={4} >
                <ShoppingCart />
            </Badge>
        </IconButton>
    )
}

export default Cart
