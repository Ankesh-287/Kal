import React from 'react'
import { Box, CardMedia, Typography, Grid } from '@mui/material';
import Products from "../product/Products"


function Hero() {
  return (
    <>
      <Box
        sx={{
          width: { xs: '100%', md: '100%', lg: "96%" },
          display: 'flex',
          height:'100vh',
          justifyContent: "space-around",
          paddingX: 3,
          alignItems: 'center',
          flexDirection: { xs: "column", sm: 'row', },
          backgroundColor: '#faedeb',
          color: 'black',
        }}
      >
        <Grid sx={{
          m: 8,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-evenly',
          alignItems: { xs: "center", sm: 'left', },
          width: '100%',
          textAlign: { xs: 'center', sm: 'left' },
        }}>
          <Grid item sx={{ width: '100%', alignItems: 'left' }}>
            <Typography variant="h3" color="initial"
              sx={{
                fontSize: '12px',
              }}
            >Women</Typography>
          </Grid>
          <Box sx={{ width: '100%', alignItems: 'left' }}>
            <Typography variant="h3" color="initial"
              sx={{
                marginY: '20px',
                fontFamily:'inherit',
                fontWeight: 'bold',
                fontSize: { xs: '27px', sm: '35px', md: '44px', lg: '54px' },
                textAlign: { xs: 'center', sm: 'left' },
              }}
            >Slick. Modern. Awesome.</Typography>
          </Box>
          <Box sx={{ width: '100%', alignItems: 'left' }}>
            <button
              style={{
                backgroundColor: 'black',
                color: 'white',
                padding: 10,
                border: 'none',
              }}> Shop Collection </button>
          </Box>
        </Grid>

        <CardMedia component="img" 
        image="https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/hero.png" alt="ads"
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
