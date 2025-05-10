import React from 'react'
import { Box } from '@mui/material'
import Hero from '../Components/home/Hero'
import Collection from '../Components/home/Collection.jsx'
import Ads from '../Components/home/Ads.jsx';
import Frame from '../Components/home/Frame.jsx';
import Product from '../data/Product.jsx';
import NewProducts from '../Components/product/NewProducts.jsx'
import ProductDetail from '../Components/product/ProductDetail.jsx'
import Review from '../Components/Review.jsx';

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
        px: { xs:2, },
      }}
    >
      {/* <ProductDetail /> */}
      {/* <NewProducts /> */}
      <Hero />
      <Collection />
      <Ads />
      <Frame />
      <Review />
      <Product />
    </Box>
  )
}

export default Homepage
