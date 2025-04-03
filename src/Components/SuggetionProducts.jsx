import React from 'react'
import { Box, Grid, Typography} from '@mui/material';

const SuggetionProducts = () => {
  return (
    <>
      <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 3 }}>
                    Related Products
                </Typography>

                <Grid container spacing={3}>
                    {[1, 2, 3, 4].map((item) => (
                        <Grid item xs={12} sm={6} md={3} key={item}>
                            <Box sx={{ textAlign: 'center', p: 2, border: '1px solid grey', borderRadius: 2 }}>
                                <img
                                    src="https://via.placeholder.com/150"
                                    alt="Product"
                                    style={{ width: '100%', borderRadius: 5 }}
                                />
                                <Typography variant="h6" sx={{ mt: 1 }}>
                                    T-Shirt Name {item}
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'gray' }}>
                                    $20.00 – $25.00
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
    </>
  )
}

export default SuggetionProducts
