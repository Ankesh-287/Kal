// import { Box, Typography, Button } from '@mui/material'
// import { useTheme } from "@mui/material/styles";
// import React from 'react'
// import Heading1 from '../Heading1'

// function Ads() {
//     const theme = useTheme();
//     return (
//         <Box 
//         component="image"
//         src="https://frenchcrown.in/cdn/shop/articles/Fashion_Style_Tips_Every_Man_Should_Know.jpg?v=1715837777&width=2048"
//         sx={{
//             backgroundColor: 'transparent',
//             width: { xs: '100%', md: '100%', lg: "80%" },
//             m: '10',
//             display: 'flex',
//             justifyContent: 'space-around',
//         }}>
//             <Box
//                 sx={{
//                     display: 'flex',
//                     justifyContent: 'space-evenly',
//                     alignItems: 'center',
//                     flexDirection: 'column',
//                     height: '240px',
//                     m: 10
//                 }}>
//                 <Heading1 title="New Collection" />
//                 <Typography variant='h3' sx={{ textAlign: 'center', fontSize: '30px' }}> Be different in your own way! </Typography>
//                 <Typography variant='h3' sx={{ textAlign: 'center', fontSize: '20px' }}> Find your unique style. </Typography>
//                 <Button sx={{ border: 'none', paddingX: 4, borderRadius: 0, textTransform: 'capitalize', backgroundColor: theme.palette.background.button, color: theme.palette.background.buttonColor, }} > Shop Collection </Button>
//             </Box>
//         </Box>
//     )
// }

// export default Ads

import { Box, Typography, Button, useMediaQuery } from '@mui/material'
import { useTheme } from "@mui/material/styles";
import React from 'react'
import Heading1 from '../Heading1'

function Ads() {
    const theme = useTheme();
    const isLargeScreen = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <Box
            sx={{
                my: 10,
                width: '100%',
                minHeight: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
                overflow: 'hidden',
                backgroundImage: `url("https://www.hatkay.com/cdn/shop/articles/How-to-Give-Indian-Clothes-a-Modern-Touch.jpg?v=1670497709")`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundAttachment: isLargeScreen ? 'fixed' : 'scroll', 
                px: 2
            }}
        >
            <Box
                sx={{
                    borderRadius: '12px',
                    maxWidth: '600px',
                    width: '100%',
                    textAlign: 'center',
                    p: 4,
                }}
            >
                <Heading1 title="New Collection" />
                <Typography variant='h1' sx={{ fontWeight:'600', my: 2 }}>
                    Be different in your own way!
                </Typography>
                <Typography variant='h6' sx={{ fontWeight:'600', mb: 3 }}>
                    Find your unique style.
                </Typography>
                <Button
                    sx={{
                        border: 'none',
                        px: 4,
                        py: 1,
                        borderRadius: 0,
                        textTransform: 'capitalize',
                        backgroundColor: theme.palette.background.button,
                        color: theme.palette.background.buttonColor,
                    }}
                >
                    Shop Collection
                </Button>
            </Box>
        </Box>
    );
}

export default Ads;
