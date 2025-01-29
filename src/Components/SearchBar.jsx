import React from 'react'
import { Box, InputBase } from "@mui/material";
import { Search} from "@mui/icons-material";
function SearchBar() {
    return (
        <div>
            <Box sx={{ display: "flex", alignItems: "center", backgroundColor: "white", borderRadius: 1, paddingX: 1 }}>
                <Search sx={{ color: "gray" }} />
                <InputBase placeholder="Search..." sx={{ marginLeft: 1 }} />
            </Box>
        </div>
    )
}

export default SearchBar
