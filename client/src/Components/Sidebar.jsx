import React from 'react';
import { Box, Drawer, List, ListItem, ListItemButton, ListItemText, IconButton } from '@mui/material';
import { Close } from '@mui/icons-material';

const Items = [
  { link: "Home", path: '/' },
  { link: "Buy T-Shirts", path: '/product-category/products' },
  { link: "Women", path: '/product-category/women' },
  { link: "Men", path: '/product-category/men' },
  { link: "About", path: '/about' },
  { link: "Contact", path: '/contact' },
];

function Sidebar({ open, setOpen }) {
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
      <Box sx={{ width: 250, padding: 2 }}>
        <IconButton onClick={toggleDrawer(false)} sx={{ mb: 2 }}>
          <Close />
        </IconButton>
        <List>
          {Items.map((item) => (
            <ListItem key={item.link} disablePadding>
              <ListItemButton to={item.path} onClick={toggleDrawer(false)}>
                <ListItemText primary={item.link} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}

export default Sidebar;
