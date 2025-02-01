import React from 'react'
import { Box } from '@mui/material'
import Hero from '../Components/Hero'
import Collection from '../Components/Collection.jsx'
import Ads from '../Components/Ads.jsx';
import Frame from '../Components/Frame.jsx';
// import ProductDetail from '../Components/ProductDetail.jsx'

function Homepage() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        boxSizing: 'border-box',
        p: 2,
      }}
    >
      {/* <ProductDetail /> */}
      <Hero />
      <Collection />
      <Ads />
      <Frame />
    </Box>
  )
}

export default Homepage
