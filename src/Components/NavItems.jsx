import React from 'react'
import {Box, Typography} from '@mui/material'

const Items = ["BUY T-SHIRTS", "WOMEN", "MEN", "ABOUT", "CONTACT"]

function NavItems() {
    return (
        <Box sx={{ display: "flex", gap: 3 }}>
            {Items.map((item) => (
                <Typography key={item} sx={{ color: "white", cursor: "pointer", "&:hover": { color: "#ccc" } }}>
                    {item}
                </Typography>
            ))}
        </Box>
    )
}

export default NavItems
