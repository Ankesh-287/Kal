import { useTheme } from "@mui/material/styles";
import React from 'react'
import { Grid, Typography, Button } from '@mui/material'

function Collection() {
    const theme = useTheme();
    return (
        <>
            <Grid container spacing={3} justifyContent="center"
                sx={{
                    width: { xs: '100%', md: '100%', lg: "80%" },
                    m: 'auto',
                    display: 'flex',
                    justifyContent: 'space-around',
                }}>
                <Grid item xs={12} sm={6} md={6} lg={6} >
                    <Grid>
                        <img src="https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/collection-02.jpg" alt=""
                            style={{ width: '100%' }} />
                    </Grid>
                    <Grid
                        sx={{
                            width: "100%",
                            display: 'flex',
                            justifyContent: "space-around",
                            paddingX: 3,
                            alignItems: 'center',
                            flexDirection: 'column',
                            textAlign:'center'
                        }}
                    >
                        <Typography variant="h3" sx={{ fontSize: '12px' }}>Men</Typography>
                        <Typography variant="h3" sx={{ fontSize: '2rem', marginY: '20px', fontWeight: 'bold', }} > The base collection - Ideal every day.</Typography>
                        <Button sx={{ padding: 10, border: 'none',  color:theme.palette.background.paper}} > Shop Now </Button>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6} >
                    <Grid>
                        <img src="https://images.meesho.com/images/products/438890698/c5dch_512.jpg" alt=""
                            style={{ width: '100%' }} />
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default Collection
