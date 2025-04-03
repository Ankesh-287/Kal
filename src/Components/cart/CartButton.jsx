import React, { useEffect, useState } from 'react'
import { IconButton, Badge } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import { useNavigate } from 'react-router-dom';

function CartButton() {
    const [cartCount, setCartCount] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        const updateCartCount = () => {
            const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

            if (!Array.isArray(cartItems)) {
                localStorage.setItem("cart", JSON.stringify([]));
                return;
            }
            const totalCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
            setCartCount(totalCount);
        }

        updateCartCount();
        window.addEventListener("storage", updateCartCount);

        return () => {
            window.removeEventListener("storage", updateCartCount);
        };

    }, []);

    return (
        <IconButton onClick={() => navigate("/cart")} >
            <Badge badgeContent={cartCount} color="secondary" >
                <ShoppingCart />
            </Badge>
        </IconButton>
    )
}

export default CartButton
