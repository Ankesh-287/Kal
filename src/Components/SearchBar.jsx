import React from 'react';
import { useTheme } from "@mui/material/styles";
import { Box, InputBase, IconButton, useMediaQuery } from "@mui/material";
import { Search } from "@mui/icons-material";
import { ThemeContext } from "../ThemeContext";

function SearchBar() {
    const isLargeScreen = useMediaQuery('(min-width:1100px)');
    const isMediumScreen = useMediaQuery('(max-width:1099px)');
      const theme = useTheme();

    return (
        <>
            {isLargeScreen ? (
                <>
                    <Box sx={{
                        display: "flex",
                        alignItems: "center",
                        backgroundColor: theme.palette.background.primary,
                        border: `1px solid ${theme.palette.text.secondary}`,
                        borderRadius: 1,
                        paddingX: 1,
                    }}>
                        <Search sx={{ color: theme.palette.text.paper }} />
                        <InputBase placeholder="Search..." sx={{ marginLeft: 1, width: '200px' }} />
                    </Box>
                </>
            ) : (
                <IconButton>
                    <Search sx={{ color: "gray" }} />
                </IconButton>
            )}

        </>
    );
}

export default SearchBar;
