import React from 'react'
import { Box, Typography } from '@mui/material';
import Products from "../Components/Products.jsx"


function Hero() {
  return (
    <>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: "space-around",
          paddingX: 3,
          alignItems: 'center',
          boxSizing: 'border-box',
          flexDirection: { xs: "column", sm: 'row', },
          backgroundColor: '#faedeb',
          color: 'black',
        }}
      >
        <Box sx={{
          m: 8,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-evenly',
          alignItems: { xs: "center", sm: 'left',  },
          width: '100%',
          textAlign: { xs: 'center', sm: 'left' },
        }}>
          <Box sx={{ width: '100%', alignItems: 'left' }}>
            <Typography variant="h3" color="initial"
              sx={{
                fontSize: '12px',
              }}
            >Women</Typography>
          </Box>
          <Typography variant="h3" color="initial"
            sx={{
              marginY: '20px',
              fontWeight: 'bold',
              fontSize: { xs: '27px', sm: '35px', md: '44px', lg: '54px' },
            }}
          >Slick. Modern. Awesome.</Typography>
          <Box sx={{ width: '100%', alignItems: 'left' }}>
            <button
              style={{
                backgroundColor: 'black',
                color: 'white',
                padding: 10,
                border: 'none',
              }}
            >Shop Collection</button>
          </Box>
        </Box>

        <img src="https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/hero.png" alt=""
          style={{
            width: "30%", zIndex: "10", display: 'flex',
            flexDirection: 'right'
          }} />
      </Box>
      <Products />
    </>
  )
}

export default Hero
