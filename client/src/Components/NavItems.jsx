import React, { useState } from 'react';
import { useTheme } from "@mui/material/styles";
import { Box, useMediaQuery, IconButton } from '@mui/material';
import { MenuOutlined } from '@mui/icons-material';
import Sidebar from './Sidebar.jsx';
import { useNavigate } from 'react-router-dom';

const Items = [
    { link: "Home", path: '/' },
    { link: "Buy T-Shirts", category: 'Men' },
    { link: "Women", category: 'Women', subCategory: 'Shirts' },
    { link: "Men", category: 'Men', subCategory: 'Shirts' },
    { link: "About", path: '/about' },
    { link: "Contact", path: '/contact' },
];

function NavItems() {
    const isLargeScreen = useMediaQuery('(min-width: 920px)');
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const theme = useTheme();

    const handleSidebar = () => {
        setOpen(true);
    };

    const handleNavClick = (category, subCategory = null) => {
        if (subCategory) {
            navigate(`/products/${category}/${subCategory}`);
        } else {
            navigate(`/products/${category}`);
        }
    };

    const handleItemClick = (item) => {
        if (item.path) {
            navigate(item.path);
        } else {
            handleNavClick(item.category, item.subCategory);
        }
    };

    return (
        <>
            {isLargeScreen ? (
                <Box sx={{ display: "flex", gap: 2 }}>
                    {Items.map((item) => (
                        <span
                            key={item.link}
                            onClick={() => handleItemClick(item)}
                            style={{
                                cursor: "pointer",
                                color: theme.palette.text.primary,
                                fontSize: '0.8rem',
                                textTransform: 'uppercase',
                                textDecoration: 'none',
                            }}
                        >
                            {item.link}
                        </span>
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
