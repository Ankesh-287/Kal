import React, { useState } from 'react';
import { useTheme } from "@mui/material/styles";
import { Box,  useMediaQuery, IconButton } from '@mui/material';
import { MenuOutlined } from '@mui/icons-material';
import Sidebar from './Sidebar.jsx';
import { Link } from 'react-router-dom';

const Items = [
    { link: "Home", path: '/' },
    { link: "Buy T-Shirts", path: '/product-category/products' },
    { link: "Women", path: '/product-category/women' },
    { link: "Men", path: '/product-category/men' },
    { link: "About", path: '/about' },
    { link: "Contact", path: '/contact' },
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
                <Box sx={{ display: "flex", gap: 2 }}>
                    {Items.map((item) => (
                        <Link key={item.link}
                            to={item.path}
                            style={{
                                cursor: "pointer",
                                color: theme.palette.text.primary,
                                fontSize: '0.8rem',
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
