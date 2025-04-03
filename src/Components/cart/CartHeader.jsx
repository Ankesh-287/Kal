import { Grid } from '@mui/material'
import React from 'react'

function CartHeader() {
    return (
        <>
            <Grid container sx={{ p: 1, backgroundColor: 'pink', border: '1px solid grey', fontWeight: 'bold' }} >
                <Grid item xs={3} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', }} >
                    
                </Grid>
                <Grid item xs={3} >
                    Product
                </Grid>
                <Grid item xs={2} >
                    Price
                </Grid>
                <Grid item xs={2}  >
                    Quantity
                </Grid>
                <Grid item xs={2} >
                    Subtotal
                </Grid>
            </Grid>
        </>
    )
}

export default CartHeader
