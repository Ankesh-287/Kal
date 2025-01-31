import React, { useState } from 'react';
import { Box, Typography, useMediaQuery, IconButton } from '@mui/material';
import { MenuOutlined } from '@mui/icons-material';
import Sidebar from './Sidebar.jsx';

const Items = [
    { link: "Buy T-Shirts", path: 'products' },
    { link: "Women", path: 'women' },
    { link: "Men", path: 'men' },
    { link: "About", path: 'about' },
    { link: "Contact", path: 'contact' },
];

function NavItems() {
    const isLargeScreen = useMediaQuery('(min-width:766px)');
    const [open, setOpen] = useState(false);

    const handleSidebar = () => {
        setOpen(true); 
    };

    return (
        <>
            {isLargeScreen ? (
                <Box sx={{ display: "flex", gap: 3 }}>
                    {Items.map((item) => (
                        <Typography key={item.link} sx={{ cursor: "pointer" }}>
                            {item.link}
                        </Typography>
                    ))}
                </Box>
            ) : (
                <IconButton onClick={handleSidebar}>
                    <MenuOutlined />
                </IconButton>
            )}
            <Sidebar open={open} setOpen={setOpen} />
        </>
    );
}

export default NavItems;
