import React from 'react';
import { Box, CardMedia, Grid, IconButton, Typography } from '@mui/material';
import { Add, Remove, CancelOutlined, DeleteOutlineOutlined, StrikethroughS, Superscript } from '@mui/icons-material';

function CartList2({ cartItems, updateQuantity, removeItem }) {
  const percent = 34;
  return (
    <>
      {cartItems.map((item, index) => (
        <Grid
          container
          key={`${item.id}-${item.color}-${item.size}-${index}`}
          sx={{ border: '1px solid grey', mb: 2, p: 1, position: 'relative' }}
        >
          <Grid item xs={4} sm={3} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <CardMedia
              component="img"
              image={item.image}
              alt={item.name}
              sx={{ width: '100%',  objectFit: 'contain' }}
            />
          </Grid>

          <Grid item xs={8} sm={9} sx={{ pl: 3 }}>

            <Typography variant="body1" fontWeight="bold">{item.name}</Typography>

            <Typography variant="body2" sx={{color:'red', display:'inline-block', }}> 34% </Typography>  
             <span variant="body1" style={{ fontWeight:"bold"}}>  ₹{item.price}.00 </span> 

            <Typography variant="body2" sx={{color:'grey.600'}}> M.R.P. : <s>₹{(item.price / (1 - percent / 100)).toFixed(0)} </s> </Typography>  

            <Typography variant="body2" > <strong> Color: </strong> {item.color}</Typography>

            <Typography variant="body2" sx={{ mb: 1 }}> <strong> Size: </strong> {item.size}</Typography>

            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                border: '1px solid grey',
                borderRadius: '20px',
                width: 'fit-content',
                px: 1
              }}
            >
              <IconButton disableTouchRipple="true" size='small'
              disableFocusRipple="true" sx={{width:10, height:10, pr:2}}
                onClick={() => {
                  if (item.quantity > 1) {
                    updateQuantity(item.id, item.color, item.size, -1);
                  } else {
                    removeItem(item.id, item.color, item.size);
                  }
                }}
              >
                {item.quantity > 1 ? <Remove /> : <DeleteOutlineOutlined sx={{ width:18, height:18}} />}
              </IconButton>

              <Typography>{item.quantity}</Typography>

              <IconButton sx={{width:10, height:10, pl:2}} onClick={() => updateQuantity(item.id, item.color, item.size, +1)}>
                <Add />
              </IconButton>
            </Box>
          </Grid>

          <IconButton
            onClick={() => removeItem(item.id, item.color, item.size)}
            sx={{ position: 'absolute', top: 5, right: 5 }}
          >
            <CancelOutlined />
          </IconButton>
        </Grid>
      ))}
    </>
  );
}

export default CartList2;
