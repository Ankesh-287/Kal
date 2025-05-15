import React, { useCallback, useState } from "react";
import { useTheme } from "@mui/material/styles";
import { Box, InputBase, IconButton, useMediaQuery } from "@mui/material";
import { Search } from "@mui/icons-material";
import { debounce } from "lodash";

function SearchBar() {
    const theme = useTheme();
    const isLargeScreen = useMediaQuery('(min-width:1100px)');
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = useCallback(
        debounce((value) => {
            console.log("Searching for:", value); // Replace with actual search logic
            // dispatch(searchProducts(value)) if using redux
        }, 500),
        []
    );

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
        handleSearch(e.target.value);
    };

    return (
        <>
            {isLargeScreen ? (
                <Box sx={{
                    display: "flex",
                    alignItems: "center",
                    backgroundColor: theme.palette.background.primary,
                    border: `1px solid ${theme.palette.text.secondary}`,
                    borderRadius: 1,
                    paddingX: 1,
                }}>
                    <Search sx={{ color: theme.palette.text.paper }} />
                    <InputBase
                        placeholder="Search..."
                        sx={{ marginLeft: 1, width: '200px' }}
                        value={searchTerm}
                        onChange={handleChange}
                    />
                </Box>
            ) : (
                <IconButton>
                    <Search sx={{ color: "gray" }} />
                </IconButton>
            )}
        </>
    );
}

export default SearchBar;
