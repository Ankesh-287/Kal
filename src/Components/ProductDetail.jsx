import React, { useEffect, useState } from 'react';
import { Remove, Add } from '@mui/icons-material';
import ExpandBars from './ExpandBars';
import { Box, Grid, Typography, Button, Divider, IconButton } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import productsData from '../data/data';

const colors = [
    { name: "Black", code: "#000000" },
    { name: "Pink", code: "#faedeb" },
    { name: "White", code: "#fff" }
];

const sizes = ['XS', "S", "M", "L", "XL",]

function ProductDetail() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [product, setProduct] = useState();
    const [selectedColor, setSelectedColor] = useState(colors[0].code);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        const productId = parseInt(id, 10);
        let getProduct = null;

        for (const category in productsData) {
            for (const subCategory in productsData[category]) {
                const productList = productsData[category][subCategory];
                getProduct = productList.find((prod) => prod.id === productId);
                if (getProduct) break;
            }
            if (getProduct) break;
        }
        setProduct(getProduct);
    }, [id])

    const handleIncrease = () => setQuantity(quantity + 1);
    const handleDecrease = () => quantity > 1 && setQuantity(quantity - 1);

    if (!product) return <Typography variant="h6"> Product Not Found </Typography>

    const handleAddCart = () => {
        const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

        const existingItemIndex = cartItems.findIndex(item => item.id === product.id);

        if (existingItemIndex !== -1) {
            cartItems[existingItemIndex].quantity += quantity;
        } else {
            cartItems.push({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                color: selectedColor,
                size: sizes[0],
                quantity: quantity,
            });
        }

        localStorage.setItem("cart", JSON.stringify(cartItems));

        window.dispatchEvent(new Event("storage"));
        navigate(`/cart`);
        alert("Product added to Cart!")
    }
    return (
        <>
            <Box sx={{ width: '100%', p: 4 }}>
                <Grid container justifyContent="center" spacing={4}>
                    <Grid item xs={12} md={6}>
                        <Box>
                            <img
                                src={product.image}
                                alt={product.name}
                                style={{ width: '100%' }}
                            />
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Typography variant="body2" sx={{ color: 'gray', fontSize: '18px' }}>
                            MEN
                            {product.category}
                        </Typography>
                        <Typography variant="h4" sx={{ fontWeight: 'bold', mt: 1 }}>
                            {product.name}
                        </Typography>
                        <Typography variant="h5" sx={{ fontWeight: 'bold', mt: 1 }}>
                            {/* $17.00 – $19.00 */}
                            Rs {product.price}
                            <span style={{ fontSize: '14px', color: 'gray.300', fontWeight: '100' }}> & Free Shipping </span>
                        </Typography>

                        <Typography variant="body1" sx={{ mt: 1, color: 'gray' }}>
                            {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dapibus interdum eros. In blandit velit a lacus laoreet dictum. */}
                            {product.desc}
                        </Typography>

                        <Grid container spacing={2} sx={{ mt: 1, pl: '8px' }}>
                            {colors.map((color) => (
                                <Grid item key={color.name}>
                                    <IconButton
                                        sx={{
                                            backgroundColor: color.code,
                                            p: 2,
                                            borderRadius: 0,
                                            border: '1px solid ',
                                            borderColor: 'grey.300',
                                            // border: selectedColor === color.code ? "2px solid grey" : "none",
                                            '&:hover': {
                                                backgroundColor: color.code,
                                                opacity: 0.8,
                                                border: "2px solid grey"
                                            }
                                        }}
                                        onClick={() => setSelectedColor(color.code)}
                                    />
                                </Grid>
                            ))}
                        </Grid>

                        <Grid container spacing={2} sx={{ mt: 1 }}>
                            {sizes.map((size) => (
                                <Grid item key={size}>
                                    <IconButton
                                        sx={{
                                            px: 2,
                                            border: "1px solid",
                                            borderColor: 'grey.400',
                                            fontSize: '16px',
                                            borderRadius: '2px',
                                        }}
                                    > {size} </IconButton>
                                </Grid>
                            ))}
                            {
                                <p> Text </p>
                            }
                        </Grid>

                        <Divider />

                        <Box sx={{ display: 'flex', alignItems: 'center', mt: 3 }}>
                            <IconButton onClick={handleDecrease} sx={{ border: '1px solid gray', borderRadius: 0 }}>
                                <Remove />
                            </IconButton>
                            <Typography variant="h6" sx={{ mx: 2 }}>
                                {quantity}
                            </Typography>
                            <IconButton onClick={handleIncrease} sx={{ border: '1px solid gray', borderRadius: 0 }}>
                                <Add />
                            </IconButton>
                            <Button variant="contained" sx={{ backgroundColor: 'black', color: 'white', mx: 3, px: 3 }}
                                onClick={handleAddCart}>
                                Add to Cart
                            </Button>
                        </Box>

                        <Divider sx={{ my: 4 }} />

                        <ExpandBars
                            expandTitle="Description"
                            subTitle="About the product"
                            subDesc="Our T-Shirts are lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
                            subList="100% Cotton" />
                    </Grid>
                </Grid>

                {/* Related Products */}
                <Divider sx={{ my: 4 }} />
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
            </Box>
        </>
    );
}

export default ProductDetail;
