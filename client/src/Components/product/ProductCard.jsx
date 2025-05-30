import { ShoppingBasket, VisibilityOutlined } from '@mui/icons-material';
import {
    Box,
    Card,
    CardMedia,
    CardContent,
    Grid,
    Rating,
    Typography,
    Tooltip,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ products, handleProductClick }) => {
    if (!Array.isArray(products)) return null;
    const navigate = useNavigate();

    return (
        <>
            {products.map((product) => (
                <Grid
                    item
                    key={product._id}
                    xs={6}
                    sm={6}
                    md={4}
                    lg={2}
                    xl={2.4}
                >
                    <Card
                        onClick={() => handleProductClick(product._id)}
                        sx={{
                            height: '100%',
                            position: 'relative',
                            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                            borderRadius: 3,
                            cursor: 'pointer',
                            '&:hover': {
                                transform: 'scale(1.03)',
                                boxShadow: 6,
                            },
                            '&:hover .hover-icons': {
                                opacity: 1,
                                transform: 'scale(1)',
                            },
                        }}
                    >
                        <CardMedia
                            component="img"
                            height="260"
                            image={product.image}
                            alt={product.name}
                            sx={{
                                objectFit: 'cover',
                                borderTopLeftRadius: 12,
                                borderTopRightRadius: 12,
                            }}
                        />

                        <CardContent sx={{ paddingBottom: '8px' }}>
                            <Typography variant="caption" color="text.secondary">
                                {product.category}
                            </Typography>

                            <Typography variant="h6" fontWeight="600" gutterBottom>
                                {product.name}
                            </Typography>

                            <Typography
                                variant="body2"
                                color="text.secondary"
                                sx={{
                                    display: '-webkit-box',
                                    WebkitBoxOrient: 'vertical',
                                    WebkitLineClamp: 2,
                                    overflow: 'hidden',
                                }}
                            >
                                {product.desc}
                            </Typography>

                            <Typography variant="subtitle1" fontWeight={600} color="primary" mt={1}>
                                ₹{product.price}
                            </Typography>

                            <Box mt={1} display="flex" gap={1} flexWrap="wrap">
                                {product.colors.map((color, index) => (
                                    <Tooltip title={color} key={index}>
                                        <Box
                                            sx={{
                                                width: 18,
                                                height: 18,
                                                backgroundColor: color,
                                                borderRadius: '50%',
                                                border: '1px solid #ccc',
                                                boxShadow: 1,
                                            }}
                                        />
                                    </Tooltip>
                                ))}
                            </Box>

                            <Box mt={1.5}>
                                <Rating
                                    value={product.rating}
                                    precision={0.5}
                                    readOnly
                                    size="small"
                                />
                            </Box>

                            {/* Hover Icons */}
                            <Box
                                className="hover-icons"
                                sx={{
                                    position: 'absolute',
                                    top: 10,
                                    right: 10,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 1,
                                    opacity: 0,
                                    transform: 'scale(0.8)',
                                    transition: 'opacity 0.2s ease, transform 0.2s ease',
                                    zIndex: 10,
                                }}
                                onClick={(e) => e.stopPropagation()}
                            >
                                <Tooltip title="Add to Cart" placement="left">
                                    <ShoppingBasket
                                        sx={{
                                            width: 30,
                                            height: 30,
                                            p: '6px',
                                            backgroundColor: 'white',
                                            color: 'black',
                                            borderRadius: '50%',
                                            cursor: 'pointer',
                                            boxShadow: 2,
                                            '&:hover': {
                                                backgroundColor: 'primary.main',
                                                color: 'white',
                                            },
                                        }}
                                        onClick={() => console.log("Add to cart:", product._id)}
                                    />
                                </Tooltip>

                                <Tooltip title="View Details" placement="left">
                                    <VisibilityOutlined
                                        sx={{
                                            width: 30,
                                            height: 30,
                                            p: '6px',
                                            backgroundColor: 'white',
                                            color: 'black',
                                            borderRadius: '50%',
                                            cursor: 'pointer',
                                            boxShadow: 2,
                                            '&:hover': {
                                                backgroundColor: 'primary.main',
                                                color: 'white',
                                            },
                                        }}
                                        onClick={() =>
                                            navigate(
                                                `/product-category/${product.category}/${product.subCategory}/${product._id}`
                                            )
                                        }
                                    />
                                </Tooltip>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </>
    );
};

export default ProductCard;
