import { Typography } from '@mui/material'
import React from 'react'

function Heading({title}) {
  return (
    <>
      <Typography variant='h3' sx={{ textAlign:'center'}}> {title} </Typography>
    </>
  )
}

export default Heading
