import { Typography } from '@mui/material'
import React from 'react'

function Heading1({title}) {
  return (
    <>
      <Typography variant='h6' sx={{ textAlign:'center', fontSize:'12px'}}> {title} </Typography>
    </>
  )
}

export default Heading1
