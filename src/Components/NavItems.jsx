import React from 'react'
import { Box, Typography } from '@mui/material'

const Items = [
    { link: "Buy T-Shirts", path: 'products' },
    { link: "Women", path: 'women' },
    { link: "Men", path: 'men' },
    { link: "About", path: 'about' },
    { link: "Contact", path: 'contact' },
];

function NavItems() {
    return (
        <Box sx={{ display: "flex", gap: 3 }}>
            {Items.map((item) => (
                <Typography key={item}
                    to={item.path}
                    sx={{ cursor: "pointer" }}>
                    {item.link}
                </Typography>
            ))}
        </Box>
    )
}

export default NavItems
