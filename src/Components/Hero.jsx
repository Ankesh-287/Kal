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
          flexDirection: { xs: "column", sm: 'row', md: 'row', lg: 'row' },
          backgroundColor: '#faedeb',
          color: 'black',
        }}
      >
        <Box sx={{
          m: 8,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-evenly',
          // alignItem
          
          width: '50%',
          // textAlign: { xs: 'center', sm: 'left' },
        }}>
          <Typography variant="h3" color="initial"
            sx={{
              // mt: { xs: 2, sm: 2, md: 2, lg: 7, },
              // textAlign: { xs: 'center', sm: 'left' },
              fontSize: '12px',
              // color: 'black',
            }}
          >Women</Typography>
          <Typography variant="h3" color="initial"
            sx={{
              // mt: { xs: 0, sm: 2, md: 2, lg: 4, },
              textAlign: { xs: 'center', sm: 'left' },
              width: '390px',
              marginY: '20px',
              fontWeight: 'bold',
              fontSize: { xs: '27px', sm: '35px', md: '44px', lg: '54px' },
            }}
          >Slick. Modern. Awesome.</Typography>
          <button
            style={{
              backgroundColor: 'black',
              color: 'white',
              padding: 10,
              border: 'none',
              // marginBottom: 19 
            }}
          >Shop Collection</button>
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
