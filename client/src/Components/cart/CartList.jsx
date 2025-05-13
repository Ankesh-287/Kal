// CartList.js
import { CardMedia, Grid, IconButton, Typography } from '@mui/material';
import { Add, CancelOutlined, Remove } from '@mui/icons-material';

function CartList({ cartItems, updateQuantity, removeItem }) {
    return (
        <>
            {cartItems.map((item, index) => (
                <Grid container key={`${item.id}-${item.color}-${item.size}-${index}`}
                    sx={{ border: '1px solid grey', borderTop: 0, boxSizing:'border-box'}}>
                        
                    <Grid item xs={2} sm={2} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <IconButton sx={{p:1}} onClick={() => removeItem(item.id, item.color, item.size)}> 
                            <CancelOutlined /> 
                        </IconButton>
                        <CardMedia component="img" sx={{ width: 100, height: 100, p: 2 }} image={item.image} alt={item.name} />
                    </Grid>

                    <Grid item xs={4} sm={4} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', p: 2 }}>
                        <Typography variant='body1'>{item.name}</Typography>
                        <Typography variant='body1'>({item.color}, {item.size})</Typography>
                    </Grid>

                    <Grid item xs={2} sm={2} sx={{ display: 'flex', alignItems: 'center' }}>
                        <Typography variant='body2'>Rs. {item.price}.00</Typography>
                    </Grid>

                    <Grid item xs={2} sm={2} sx={{ display: 'flex', alignItems: 'center' }}>
                        <IconButton
                            onClick={() => updateQuantity(item.id, item.color, item.size, -1)}
                            sx={{ border: '1px solid grey', borderRadius: 0,  width:30, height: 30,}}> 
                            <Remove /> 
                        </IconButton>

                        <Typography sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', borderTop: '1px solid grey', borderBottom: '1px solid grey', width: 30, height: 30.5 }}>{item.quantity}</Typography>

                        <IconButton
                            onClick={() => updateQuantity(item.id, item.color, item.size, +1)}
                            sx={{ border: '1px solid grey', borderRadius: 0,width:30, height: 30, }}> 
                            <Add /> 
                        </IconButton>
                    </Grid>
                    <Grid item xs={2} sm={2} sx={{ display: 'flex', alignItems: 'center' }}>
                        Rs. {item.price * item.quantity}
                    </Grid>
                </Grid>
            ))}
        </>
    );
}

export default CartList;
