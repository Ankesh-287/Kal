import { Box, Divider, Typography } from '@mui/material'
import React from 'react'
import Form from '../Components/Form'

function Contact() {
  return (
    <>
      <Box sx={{
        width: '100%',
        boxSizing: 'border-box',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',

      }}>
        <Box sx={{
          height: '150px',
          mt: '60px',
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'space-around',
          display: 'flex',
        }}>
          <Typography variant='h2' sx={{ textAlign: 'center', fontWeight: 'bold',
            fontSize:{ xs: '30px', sm: '38px', md: '54px', lg: '54px' },
           }}> Contact </Typography>

          <span style={{ width: '50px', height: '2px', backgroundColor:'black' }} />

          <Typography variant='body1' sx={{ width: {xs:'90%', sm:'90%', md:'60%', lg:'`100%'}, textAlign: 'center', fontWeight: 'bold' }}> Proin eu ante vel mauris molestie dignissim non eget nunc. Integer ac massa orci. Suspendisse vulputate semper nunc eget rhoncus. </Typography>
        </Box>

        <Box sx={{ marginY:6 }}>
          <Form />
        </Box>
      </Box>
    </>
  )
}

export default Contact
