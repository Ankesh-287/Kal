import { Button, Divider, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

function CartSummary({ totalAmount }) {
  const [showCoupon, setShowCoupon] = useState(false);;

  return (
    <>
      <Grid container sx={{ p: 1, backgroundColor: 'pink', border: '1px solid grey', fontWeight: 'bold' }}>
        <Grid item xs={12} sx={{ display: 'flex', alignItems: 'center' }}>
          Cart totals
        </Grid>
      </Grid>

      <Grid container sx={{ p: 3, border: '1px solid grey', borderTop: 0 }}>
        <Grid item xs={12} sm={12} sx={{ display: 'flex', py: 2, borderBottom: '1px solid grey' }}>
          <Typography variant='body1'> SubTotal Rs. {totalAmount}</Typography>
        </Grid>

        <Grid item xs={12} sm={12} sx={{  py: 2, borderBottom: '1px solid grey' }}>
          <Typography variant='body1'> Total Rs. {totalAmount} </Typography>
        </Grid>

        {!showCoupon && (
          <Typography variant='body1' sx={{ cursor: 'pointer', py: 1, mt:6 }} onClick={() => setShowCoupon(true)}>
            Have a coupon?
          </Typography>
        )}

        {showCoupon && (
          <Grid container columnSpacing={1} sx={{mt:5}}>
            <Grid item xs={9} sx={{ py:1 }}>
              <TextField fullWidth name='message' placeholder='Coupon Code' />
            </Grid>
            <Grid item xs={3} sx={{ display: 'flex', alignItems: 'center',  }}>
              <Button variant='contained' sx={{ p: 2, width: '100%' }}>Apply</Button>
            </Grid>
          </Grid>
        )}

        <Grid item xs={12} sx={{  }}>
          <Button variant='contained' sx={{ width: '100%' }}>
            Proceed to Checkout
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

export default CartSummary;