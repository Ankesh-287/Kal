import React from 'react'
import { Grid, Typography } from '@mui/material'

function Collection() {
    return (
        <>
            <Grid container spacing={3} justifyContent="center"
                sx={{
                    width: {md:'100%', lg:"80%"},
                    m: 'auto',
                    display:'flex',
                    justifyContent:'space-around'
                }}>
                <Grid item xs={12} md={6} lg={6} >
                    <Grid>
                        <img src="https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/collection-02.jpg" alt=""  
                        style={{ width:'100%'}}/>
                    </Grid>
                    <Grid 
                        sx={{
                            width: "100%",
                            display: 'flex',
                            justifyContent: "space-around",
                            paddingX: 3,
                            alignItems: 'center',
                            flexDirection: 'column',
                            color: 'black',
                        }}
                    >
                        <Typography variant="h3" color="initial"
                            sx={{
                                mt: { xs: 2, sm: 2, md: 2, lg: 2, },
                                textAlign: { xs: 'center', sm: 'left' },
                                fontSize: '12px',
                                color: 'black',
                            }}
                        >Men</Typography>
                        <Typography variant="h3" color="initial"
                            sx={{
                                mt: { xs: 0, sm: 2, md: 2, lg: 7, },
                                textAlign: 'center',
                                // width: '100%',
                                mt: '20px',
                                marginY: '20px',
                                fontWeight: 'bold',
                                fontSize: { xs: '27px', sm: '35px', md: '44px', lg: '40px' },
                            }}
                        >The base collection - Ideal every day.</Typography>
                        <button
                            style={{ backgroundColor: 'black', color: 'white', padding: 10, border: 'none', marginBottom: 19 }}
                        >Shop Now</button>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={6} lg={6} >
                    <Grid>
                        <img src="https://images.meesho.com/images/products/438890698/c5dch_512.jpg" alt=""
                        style={{ width:'100%'}} />
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default Collection
