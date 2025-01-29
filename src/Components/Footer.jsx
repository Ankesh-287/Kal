import { Box, Typography } from '@mui/material';
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
    <Box
      sx={{
        display: 'flex',
        gap: 3,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: '#faedeb',
        width: '100%',
        padding: 2,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          textAlign: 'center',
        }}
      >
        <Typography variant="body1">Subscribe To Get Offers In Your Inbox</Typography>
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
    </Box>
  );
}

export default Footer;
