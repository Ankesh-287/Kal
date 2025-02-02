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
          mt: '40px',
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'space-around',
          display: 'flex',
          flexDirection: 'column',
        }}>
          <Typography variant='h2' sx={{ textAlign: 'center', fontWeight: 'bold' }}> Contact </Typography>

          <Divider variant='' sx={{ width: '200px', height: '2px' }} />

          <Typography variant='body1' sx={{ width: '60%', textAlign: 'center', fontWeight: 'bold' }}> Proin eu ante vel mauris molestie dignissim non eget nunc. Integer ac massa orci. Suspendisse vulputate semper nunc eget rhoncus. </Typography>
        </Box>

        <Box sx={{ padding: {xs:0, md:15} }}>
          <Form />
        </Box>
      </Box>
    </>
  )
}

export default Contact
