import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

function ProductDetail() {
    return (
        <>
            <Box sx={{ width: '100%' }}>
                <Grid container justifyContent="center"
                    sx={{
                        width: { xs: '100%', sm: '100%', md: '100%', lg: "80%" },
                        m: 'auto',
                        display: 'flex',
                        backgroundColor: 'blue',
                        justifyContent: 'space-around',
                    }}>
                    <Grid item xs={12} sm={12} md={6} lg={6} sx={{  boxSizing: 'border-box',
                     }}>
                        <Box sx={{ width: '100%', p: 2, border:'grey.800' }}>
                            <img src="https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-06-a-400x488.jpg" alt=""
                                style={{ width: '100%', }} />
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={12} md={6} lg={6} backgroundColor="pink">
                        <Typography variant="body1" sx={{ color: 'grey.500', fontSize: '20px', }}>
                            Mens
                        </Typography>

                        <Typography gutterBottom variant="h6" component="div"
                            sx={{
                                fontWeight: 'bold',
                                fontSize: '44px',
                            }}
                        >
                            T-shirt no-1
                        </Typography>

                        <Typography variant="body2"
                            sx={{
                                color: 'grey.600',
                                fontWeight: 'bold',
                                fontSize: '22px',
                            }}
                        >
                            $ 25
                        </Typography>
                    </Grid>

                </Grid>
            </Box>
        </>
    )
}

export default ProductDetail
