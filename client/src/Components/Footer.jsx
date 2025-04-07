import { Box, Typography } from '@mui/material';
import { Facebook, Instagram, Twitter } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import React from 'react';

const Items = [
  { link: "Buy T-Shirts", path: 'products' },
  { link: "Women", path: 'women' },
  { link: "Men", path: 'men' },
  { link: "About", path: 'about' },
  { link: "Contact", path: 'contact' },
];

function Footer() {
  return (
    <>
      <Box
        sx={{
          backgroundColor: '#faedeb',
          flexDirection: 'column',
          alignItems: 'center',
          display: 'flex',
          width: '100%',
          gap: 5,
          padding: 2,
          bottom: 0,
        }}
      >

        <Box
          sx={{
            textAlign: 'center',
          }}
        >
          <Typography variant="h6">Subscribe To Get Offers In Your Inbox</Typography>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet, adipiscing elit sed do eiusmod condimentum
          </Typography>
        </Box>

        <Box sx={{ display: "flex", gap: 3 }}>
          {Items.map((item) => (
            <Link key={item.path} to={item.path} style={{ textDecoration: 'none' }}>
              <Typography sx={{ color: 'grey.700', cursor: "pointer", "&:hover": { color: "grey.900" } }}>
                {item.link}
              </Typography>
            </Link>
          ))}
        </Box>

        <Box sx={{ display: 'flex', width: '100px', justifyContent: 'space-between' }}>
          <Box sx={{ width: '24px', padding: 0, height: '24px', }}> <Facebook /></Box>
          <Box sx={{ width: '24px', padding: 0, height: '24px', }}> <Twitter /></Box>
          <Box sx={{ width: '24px', padding: 0, height: '24px', }}> <Instagram /></Box>
        </Box>
      </Box>
      <Box
        sx={{
          backgroundColor: '#000000',
          color:'white',
          flexDirection: 'column',
          alignItems: 'center',
          display: 'flex',
          width: '100%',
          padding: 4,
        }}>
        <Typography variant="body1"> Copyright © 2025 T-Shirts Store | Powered by T-Shirts Store</Typography>
      </Box>
    </>
  );
}

export default Footer;
