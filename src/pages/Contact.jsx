import { Box, Typography } from '@mui/material'
import React from 'react'
import Form from '../Components/Form'
import { useTheme } from "@mui/material/styles";

function Contact() {
   const theme = useTheme();
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

          <span style={{ width: '100px', height: '2px', backgroundColor: theme.palette.text.primary, }} />

          <Typography variant='body1' sx={{ width: {xs:'90%', sm:'90%', md:'60%', lg:'`100%'}, textAlign: 'center', fontWeight: 'bold' }}> If talking to a real-life human is more your thing, you can reach our <br/> Customer Happiness Team via email (below).
            
             </Typography>
        </Box>

        <Box sx={{ marginY:6 }}>
          <Form />
        </Box>
      </Box>
    </>
  )
}

export default Contact
