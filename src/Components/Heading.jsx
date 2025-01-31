import { Typography } from '@mui/material'
import React from 'react'

function Heading({title}) {
  return (
    <>
      <Typography variant='h3' sx={{ textAlign:'center'}}> Popular T-Shirts </Typography>
    </>
  )
}

export default Heading
