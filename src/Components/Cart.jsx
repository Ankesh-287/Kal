import React from 'react'
import {IconButton } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";

function Cart() {
    return (
        <IconButton sx={{ color: "white" }}>
            <ShoppingCart />
        </IconButton>
    )
}

export default Cart
