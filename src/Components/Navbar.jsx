import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";
import Cart from "./Cart";
import SearchBar from "./SearchBar";
import NavItems from "./NavItems";

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#333", padding: "10px" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <NavItems />
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>LOGO</Typography>

        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <SearchBar />
          <Cart />
          <Link to="/login" style={{ textDecoration: "none" }}>
            <Typography sx={{ color: "white", cursor: "pointer", "&:hover": { color: "#ccc" } }}>Login</Typography>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;