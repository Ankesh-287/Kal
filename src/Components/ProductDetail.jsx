import { Box, Grid } from '@mui/material'
import React from 'react'

function ProductDetail() {
    return (
        <>
            <Box>
                <Grid container spacing={3} justifyContent="center"
                    sx={{
                        width: { xs: '100%', md: '100%', lg: "80%" },
                        m: 'auto',
                        display: 'flex',
                        backgroundColor:'blue',
                        justifyContent: 'space-around',
                    }}>
                    <Grid item xs={12} sm={6} md={6} lg={6}  sx={{backgroundColor: 'grey.500'}}>
                        <img src="https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-06-a-400x488.jpg" alt="" />
                    </Grid>

                    <Grid item xs={12} sm={6} md={6} lg={6} >

                    </Grid>

                </Grid>
            </Box>
        </>
    )
}

export default ProductDetail
