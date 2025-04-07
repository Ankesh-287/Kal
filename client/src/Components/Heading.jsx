import { Typography } from '@mui/material'
import React from 'react'

function Heading({title}) {
  return (
    <>
      <Typography variant='h4' sx={{ textAlign:'center', fontWeight: '600', mb:5}}> {title} </Typography>
    </>
  )
}

export default Heading
