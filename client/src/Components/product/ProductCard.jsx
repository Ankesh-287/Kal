import { Box, Card, CardMedia, Grid, IconButton, Rating, Typography } from '@mui/material'

const ProductCard = ({ products, handleProductClick }) => {
    if (!Array.isArray(products)) return null;
    return (
        <>
            {products.map((product) => (
                <Grid item key={product._id} xs={6} sm={6} md={4} lg={2} xl={2} onClick={() => handleProductClick(product._id)}>
                    <Card>
                        <CardMedia component="img" height="300" image={product.image} alt={product.name} />
                        <Typography variant='body2'>{product.category}</Typography>
                        <Typography variant='h6'>{product.name}</Typography>
                        <Typography variant='body2' sx={{ display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: 2, overflow: 'hidden' }}>{product.desc}</Typography>
                        <Typography variant='subtitle2'>₹{product.price}</Typography>
                        <Grid container spacing={1} paddingY={1}>
                            {product.colors.map((color, index) => (
                                <Grid item key={index}>
                                    <Box sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        backgroundColor: 'grey.',
                                        borderRadius: 0,
                                        transition: 'all 0.3s ease',
                                        border: '1px solid ',
                                        borderColor: 'grey.300'
                                    }}>
                                        <IconButton disableTouchRipple sx={{
                                            backgroundColor: color,
                                            width: 10,
                                            height: 10,
                                            borderRadius: 0,
                                        }} />
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>
                        <Rating defaultValue={product.rating} precision={0.5} readOnly />
                    </Card>
                </Grid>
            ))}
        </>
    )
}

export default ProductCard
