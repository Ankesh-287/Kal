import { Box, Card, CardMedia, Grid, Typography } from '@mui/material';
import { ShoppingBasket, VisibilityOutlined } from '@mui/icons-material';
import productsData from '../../data/data';
import { useNavigate } from 'react-router-dom';

const SuggetionProducts = () => {
    const menProducts = Object.values(productsData.women).flat();
    const navigate = useNavigate

    return (
        <>
            <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 3 }}>
                Related Products
            </Typography>

            <Grid container spacing={2}>
                {menProducts.slice(0, 4).map((item) => (
                    <Grid item xs={6} sm={4} md={3} key={item.id}>
                        <Box
                            sx={{
                                position: 'relative',
                                overflow: 'hidden',
                                '&:hover .hover-icons': {
                                    opacity: 1,
                                    transform: 'scale(1)',
                                },
                            }}
                        >
                            <CardMedia component="img" image={item.image} alt={item.name}
                                sx={{
                                    width: '100%',
                                    cursor: 'pointer',
                                    transform: 'zoom'
                                }} />
                            <Box sx={{ p: 1 }}>

                                <Typography variant="body1" sx={{ mt: 1, fontSize: '12px', color: 'grey.500' }}>
                                    {item.type?.toUpperCase()}
                                </Typography>
                                <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                                    {item.name}
                                </Typography>
                                <Typography variant="subtitle2" sx={{ color: 'gray', fontWeight: 'bold' }}>
                                    Rs. {item.price}
                                </Typography>
                            </Box>

                            <Card
                                sx={{
                                    position: 'absolute',
                                    top: 10,
                                    left: 16,
                                    width: 45,
                                    height: 28,
                                    backgroundColor: 'white',
                                    borderRadius: '25px',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            >
                                <Typography sx={{ fontSize: '12px', color: 'grey.500' }}>-20%</Typography>
                            </Card>

                            <Box
                                className="hover-icons"
                                sx={{
                                    position: 'absolute',
                                    top: 10,
                                    right: 8,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 1,
                                    opacity: 0,
                                    transform: 'scale(0.8)',
                                    transition: 'opacity 0.1s ease, scale 0.1s ease',
                                }}
                            >
                                <ShoppingBasket
                                    sx={{
                                        width: 30,
                                        height: 30,
                                        p: '6px',
                                        backgroundColor: 'white',
                                        color: 'black',
                                        borderRadius: '50%',
                                        cursor: 'pointer',
                                        opacity: 0.7,
                                        '&:hover': {
                                            opacity: 1,
                                        },
                                    }}
                                />
                                <VisibilityOutlined
                                    sx={{
                                        width: 30,
                                        height: 30,
                                        p: '6px',
                                        backgroundColor: 'white',
                                        color: 'black',
                                        borderRadius: '50%',
                                        cursor: 'pointer',
                                        opacity: 0.7,
                                        '&:hover': {
                                            opacity: 1,
                                        },
                                    }}
                                    onClick={() => navigate('/product-category/:category/:subCategory++')}
                                />
                            </Box>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </>
    );
};

export default SuggetionProducts;
