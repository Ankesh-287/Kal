import React, { useContext } from "react";
import { useTheme } from "@mui/material/styles";
import { AppBar, Toolbar, Typography, Box, IconButton } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { ThemeContext } from "../../ThemeContext";
import SearchBar from "./SearchBar";
import NavItems from "../NavItems";
import CartButton from "../cart/CartButton";

const Navbar = () => {
  const { mode, toggleTheme } = useContext(ThemeContext);
  const theme = useTheme();
  return (
    <>
      <AppBar position="fixed"
        sx={{
          backgroundColor: theme.palette.background.paper,
          color: theme.palette.text.primary,
          position: 'relative',
          display:'flex',
          boxShadow:'none',
          paddingX: 1,
          justifyContent:'center',
          minHeight: {xs:'80px', sm:'80px'},
          height:'15%',
          boxSizing:'border-box',
          zIndex: (theme) => theme.zIndex.drawer + 1
        }}>
        <Toolbar gap={3} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <NavItems />

          <Typography variant="h6" sx={{ fontWeight: "bold", marginY:'20px' }}>LOGO</Typography>

          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <SearchBar />
            <CartButton />
            <Box>
              <IconButton onClick={toggleTheme} color="inherit">
                {mode === "dark" ? <Brightness7 /> : <Brightness4 />}
              </IconButton>
            </Box>
              <Typography sx={{ cursor: "pointer", "&:hover": { color: "#ccc" } }}>Login</Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;