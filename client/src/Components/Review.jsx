import React from 'react'
import { Box, Typography } from '@mui/material'
import Heading from './Heading'
import { Feed } from '@mui/icons-material'

function Review() {
    return (
        <>

            <Box sx={{
                m: 8,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-evenly',
                alignItems: { xs: "center", sm: 'left', },
                width: '100%',
                textAlign: { xs: 'center', sm: 'left' },
            }}>
                <Heading title="Reviews" />
                <Box sx={{ width: '50%', justifyContent: 'center', display:'flex', alignItems:'center' }}>
                    <Typography variant="h6" color="initial"  >
                        <u>Beautiful product, the Embroidered Art Silk Kurta Set in Beige and Maroon is exceptionally beautiful. </u>
                    </Typography>
                </Box>
            </Box>
        </>
    )
}

export default Review
