import React, { useEffect } from 'react';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  IconButton,
} from '@mui/material';
import { Close } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const Items = [
  { link: "Home", path: '/' },
  { link: "Buy T-Shirts", category: 'Men' },
  { link: "Women", category: 'Women', subCategory: 'Shirts' },
  { link: "Men", category: 'Men', subCategory: 'Shirts' },
  { link: "About", path: '/about' },
  { link: "Contact", path: '/contact' },
];

function Sidebar({ open, setOpen }) {
  const navigate = useNavigate();

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const handleNavClick = (category, subCategory = null) => {
    if (subCategory) {
      navigate(`/products/${category}/${subCategory}`);
    } else {
      navigate(`/products/${category}`);
    }
  };

  const handleItemClick = (item) => {
    setOpen(false);
    if (item.path) {
      navigate(item.path);
    } else {
      handleNavClick(item.category, item.subCategory);
    }
  };

  return (
    <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
      <Box
        sx={{
          width: 250,
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          padding: 2,
          backgroundColor: 'background.paper',
        }}
      >
        <IconButton onClick={() => setOpen(false)} sx={{ alignSelf: 'flex-end', mb: 2 }}>
          <Close />
        </IconButton>

        <List sx={{ overflowY: 'auto', flexGrow: 1 }}>
          {Items.map((item) => (
            <ListItem key={item.link} disablePadding>
              <ListItemButton onClick={() => handleItemClick(item)}>
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
