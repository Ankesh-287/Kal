import React, { useContext } from "react";
import { useTheme } from "@mui/material/styles";
import { AppBar, Toolbar, Typography, Box, IconButton } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { ThemeContext } from "../ThemeContext";
import { Link } from "react-router-dom";
import Cart from "./Cart";
import SearchBar from "./SearchBar";
import NavItems from "./NavItems";

const Navbar = () => {
  const { mode, toggleTheme } = useContext(ThemeContext);
  const theme = useTheme();
  return (
    <>
      <AppBar position="static"
        sx={{
          backgroundColor: theme.palette.background.paper,
          color: theme.palette.text.primary,
          position: 'relative',
          boxSizing:'border-box'
        }}>
        <Toolbar gap={3} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <NavItems />

          <Typography variant="h6" sx={{ fontWeight: "bold", marginY:'20px' }}>LOGO</Typography>

          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <SearchBar />
            <Cart />
            <Box>
              <IconButton onClick={toggleTheme} color="inherit">
                {mode === "dark" ? <Brightness7 /> : <Brightness4 />}
              </IconButton>
            </Box>
            <Link to="/login" style={{ textDecoration: "none" }}>
              <Typography sx={{ color: "white", cursor: "pointer", "&:hover": { color: "#ccc" } }}>Login</Typography>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;