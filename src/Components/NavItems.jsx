import React from 'react'
import { Box, Typography, useMediaQuery } from '@mui/material'
import { MenuOutlined } from '@mui/icons-material';
import Sidebar from './Sidebar.jsx'

const Items = [
    { link: "Buy T-Shirts", path: 'products' },
    { link: "Women", path: 'women' },
    { link: "Men", path: 'men' },
    { link: "About", path: 'about' },
    { link: "Contact", path: 'contact' },
];

function NavItems() {
    const isLargeScreen = useMediaQuery('(min-width:766px)');
    const isMediumScreen = useMediaQuery('(max-width:765px)');

    const handleSidebar = () => {

    }
    return (
        <>
            {isLargeScreen ? (
                <>
                    <Box sx={{ display: "flex", gap: 3 }}>
                        {Items.map((item) => (
                            <Typography key={item}
                                to={item.path}
                                sx={{ cursor: "pointer" }}>
                                {item.link}
                            </Typography>
                        ))}
                    </Box>
                </>
            ) : (
                <MenuOutlined onClick={handleSidebar()} />
            )}
            <Sidebar />
        </>
    )
}

export default NavItems
