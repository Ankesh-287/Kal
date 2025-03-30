import React, { useState } from 'react';
import { useTheme } from "@mui/material/styles";
import { ThemeContext } from "../ThemeContext";
import { Box, Typography, useMediaQuery, IconButton } from '@mui/material';
import { MenuOutlined } from '@mui/icons-material';
import Sidebar from './Sidebar.jsx';
import { Link } from 'react-router-dom';

const Items = [
    { link: "Buy T-Shirts", path: '/product-category/products' },
    { link: "Women", path: '/product-category/women' },
    { link: "Men", path: '/product-category/men' },
    { link: "About", path: 'about' },
    { link: "Contact", path: 'contact' },
];

function NavItems() {
    const isLargeScreen = useMediaQuery('(min-width: 920px)');
    const [open, setOpen] = useState(false);

    const theme = useTheme();

    const handleSidebar = () => {
        setOpen(true);
    };

    return (
        <>
            {isLargeScreen ? (
                <Box sx={{ display: "flex", gap: 3 }}>
                    {Items.map((item) => (
                        <Link key={item.link}
                            to={item.path}
                            style={{
                                cursor: "pointer",
                                color: theme.palette.text.primary,
                                fontSize: '1.2rem',
                                textTransform: 'uppercase',
                                textDecoration: 'none'
                            }}>
                            {item.link}
                        </Link>
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
