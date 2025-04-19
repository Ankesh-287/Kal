import React from 'react'
import { Box, CardMedia, Grid } from '@mui/material'
import { Search } from '@mui/icons-material';

function ProductFrame({ image, name, productImageRef}) {
    return (
        <>
            <Grid item xs={12} md={6}>
                <Box sx={{ position: 'relative' }} >
                    <CardMedia component="img" image={image} alt={name} sx={{ width: '100%', }} ref={productImageRef} />
                    <Search sx={{
                        position: 'absolute', top: 12, right: 6, width: 40, height: 40, p: 1, backgroundColor: 'white', color: 'black', borderRadius: '50%'
                    }} />
                </Box>
                <Grid container spacing={2} sx={{ py: 2 }} >
                    <Grid item xs={6} md={6}>
                        <Box sx={{ position: 'relative' }}>
                            <CardMedia component="img" image={image} alt={name} sx={{ width: '100%', }} />
                            <Search sx={{
                                position: 'absolute', top: 12, right: 6, width: 40, height: 40, p: 1, backgroundColor: 'white', color: 'black', borderRadius: '50%'
                            }} />
                        </Box>
                    </Grid>
                    <Grid item xs={6} md={6}>
                        <Box sx={{ position: 'relative' }}>
                            <CardMedia component="img" image={image} alt={name} sx={{ width: '100%', }} />
                            <Search sx={{
                                position: 'absolute', top: 12, right: 6, width: 40, height: 40, p: 1, backgroundColor: 'white', color: 'black', borderRadius: '50%'
                            }} />
                        </Box>
                    </Grid>
                    <Grid item xs={6} md={6}>
                        <Box sx={{ position: 'relative' }}>
                            <CardMedia component="img" image={image} alt={name} sx={{ width: '100%', }} />
                            <Search sx={{
                                position: 'absolute', top: 12, right: 6, width: 40, height: 40, p: 1, backgroundColor: 'white', color: 'black', borderRadius: '50%'
                            }} />
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default ProductFrame
