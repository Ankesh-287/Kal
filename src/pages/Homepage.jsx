import React from 'react'
import { Box } from '@mui/material'
import Hero from '../Components/home/Hero'
import Collection from '../Components/home/Collection.jsx'
import Ads from '../Components/home/Ads.jsx';
import Frame from '../Components/home/Frame.jsx';
import Product from '../data/Product.jsx';
import ProductDetail from '../Components/product/ProductDetail.jsx'

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
        px: 2,
      }}
    >
      {/* <ProductDetail /> */}
      <Hero />
      <Collection />
      <Ads />
      <Frame />
      <Product />
    </Box>
  )
}

export default Homepage
