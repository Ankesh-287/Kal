import React, { useContext, useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from "../../redux/slices/userSlice";
import { useNavigate } from "react-router-dom";
import { AppBar, Toolbar, Typography, Box, IconButton, Menu, MenuItem, Avatar } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { ThemeContext } from "../../ThemeContext";
import SearchBar from "./SearchBar";
import NavItems from "../NavItems";
import CartButton from "../cart/CartButton";


const Navbar = () => {
  const user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { mode, toggleTheme } = useContext(ThemeContext);
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const handleLogout = () => {
    dispatch(logoutUser());
    handleClose();
    navigate("/login");
  };

  return (
    <>
      <AppBar position="fixed"
        sx={{
          backgroundColor: theme.palette.background.paper,
          color: theme.palette.text.primary,
          position: 'relative',
          display: 'flex',
          boxShadow: 'none',
          paddingX: 1,
          justifyContent: 'center',
          minHeight: { xs: '80px', sm: '80px' },
          height: '15%',
          boxSizing: 'border-box',
          zIndex: (theme) => theme.zIndex.drawer + 1
        }}>
        <Toolbar gap={3} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <NavItems />

          <Typography variant="h6" sx={{ fontWeight: "bold", marginY: '20px' }}>LOGO</Typography>

          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <SearchBar />
            <CartButton />
            <Box>
              <IconButton aria-label="toggle dark mode" onClick={toggleTheme} color="inherit">
                {mode === "dark" ? <Brightness7 /> : <Brightness4 />}
              </IconButton>
            </Box>

            <IconButton onClick={user ? handleClick : () => navigate('/login')}>
              {user ? (
                <Avatar sx={{ width: 32, height: 32 }}>
                  {user.firstname?.[0].toUpperCase()}
                </Avatar>
              ) : (
                <Typography variant="body2" sx={{ fontWeight: 500 }}>Login</Typography>
              )}
            </IconButton>

            {user && (
              <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={() => { navigate('/profile'); handleClose(); }}>
                  Profile
                </MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;