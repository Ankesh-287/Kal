import { Box, Typography, Button } from '@mui/material'
import { useTheme } from "@mui/material/styles";
import React from 'react'
import Heading1 from '../Heading1'

function Ads() {
    const theme = useTheme();
    return (
        <Box 
        component="image"
        src="https://frenchcrown.in/cdn/shop/articles/Fashion_Style_Tips_Every_Man_Should_Know.jpg?v=1715837777&width=2048"
        sx={{
            backgroundColor: 'transparent',
            width: { xs: '100%', md: '100%', lg: "80%" },
            m: '10',
            display: 'flex',
            justifyContent: 'space-around',
        }}>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                    flexDirection: 'column',
                    height: '240px',
                    m: 10
                }}>
                <Heading1 title="New Collection" />
                <Typography variant='h3' sx={{ textAlign: 'center', fontSize: '30px' }}> Be different in your own way! </Typography>
                <Typography variant='h3' sx={{ textAlign: 'center', fontSize: '20px' }}> Find your unique style. </Typography>
                <Button sx={{ border: 'none', paddingX: 4, borderRadius: 0, textTransform: 'capitalize', backgroundColor: theme.palette.background.button, color: theme.palette.background.buttonColor, }} > Shop Collection </Button>
            </Box>
        </Box>
    )
}

export default Ads
