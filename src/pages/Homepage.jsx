import React from 'react'
import { useTheme } from "@mui/material/styles";
import { Box } from '@mui/material'
import Hero from '../Components/Hero'
import Collection from '../Components/Collection.jsx'

function Homepage() {
  const theme = useTheme();
  return (
    <Box
    sx={{
      display:"flex",
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center',
      width:'100%',
      boxSizing:'border-box',
      p:2,
    }}
    >
        <Hero />
        <Collection />
    </Box>
  )
}

export default Homepage
