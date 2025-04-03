import React, { useEffect, useState } from 'react';
import ExpandBars from '../ExpandBars';
import { Box, Grid, Typography, Divider, CardMedia } from '@mui/material';
import { useParams } from 'react-router-dom';
import productsData from '../../data/data';
import SuggetionProducts from '../SuggetionProducts';
import ProductQuantity from './ProductQuantity';
import ProductSize from './ProductSize';
import ProductColor from './ProductColor';
import CartPanel from '../cart/CartPanel';
import { Search } from '@mui/icons-material';

function ProductDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [showCart, setShowCart] = useState(false);
    const [selectedColor, setSelectedColor] = useState(null);
    const [selectedSize, setSelectedSize] = useState(null);

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

        if (getProduct) {
            setProduct(getProduct);
            setSelectedColor(getProduct.colors.length > 0 ? getProduct.colors[0] : null);
            setSelectedSize(getProduct.size.length > 0 ? getProduct.size[0] : null);
        }
    }, [id]);

    const handleIncrease = () => setQuantity(quantity + 1);
    const handleDecrease = () => quantity > 1 && setQuantity(quantity - 1);

    if (!product) return <Typography variant="h6"> Product Not Found </Typography>;

    const handleAddCart = () => {
        const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

        const existingItemIndex = cartItems.findIndex((item) => item.id === product.id && item.color === selectedColor && item.size === selectedSize);

        if (existingItemIndex !== -1) {
            cartItems[existingItemIndex].quantity += quantity;
        } else {
            cartItems.push({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                color: selectedColor,
                size: selectedSize,
                quantity: quantity,
            });
        }
        console.log(cartItems);
        setShowCart(true);

        localStorage.setItem("cart", JSON.stringify(cartItems));

        window.dispatchEvent(new Event("storage"));
        alert("Product added to Cart!");
    };

    return (
        <>
            <Box sx={{ display: 'flex', flexDirection: 'column', width: { xs: '100%', lg: "80%" }, m: 'auto', p: 3 }}>
                <Grid container justifyContent="center" spacing={4}>
                    <Grid item xs={12} md={6}>
                                <Box sx={{ position: 'relative' }}>
                                    <CardMedia component="img" image={product.image} alt={product.name} sx={{ width: '100%', }} />
                                    <Search sx={{
                                        position: 'absolute', top: 12, right: 6, width: 40, height: 40, p: 1, backgroundColor: 'white', color: 'black', borderRadius: '50%'
                                    }} />
                                </Box>
                        <Grid container spacing={2} sx={{py:2}}>
                            <Grid item xs={6} md={6}>
                                <Box sx={{ position: 'relative' }}>
                                    <CardMedia component="img" image={product.image} alt={product.name} sx={{ width: '100%', }} />
                                    <Search sx={{
                                        position: 'absolute', top: 12, right: 6, width: 40, height: 40, p: 1, backgroundColor: 'white', color: 'black', borderRadius: '50%'
                                    }} />
                                </Box>
                            </Grid>
                            <Grid item xs={6} md={6}>
                                <Box sx={{ position: 'relative' }}>
                                    <CardMedia component="img" image={product.image} alt={product.name} sx={{ width: '100%', }} />
                                    <Search sx={{
                                        position: 'absolute', top: 12, right: 6, width: 40, height: 40, p: 1, backgroundColor: 'white', color: 'black', borderRadius: '50%'
                                    }} />
                                </Box>
                            </Grid>
                            <Grid item xs={6} md={6}>
                                <Box sx={{ position: 'relative' }}>
                                    <CardMedia component="img" image={product.image} alt={product.name} sx={{ width: '100%', }} />
                                    <Search sx={{
                                        position: 'absolute', top: 12, right: 6, width: 40, height: 40, p: 1, backgroundColor: 'white', color: 'black', borderRadius: '50%'
                                    }} />
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Typography variant="body2" sx={{ color: 'gray', fontSize: '18px' }}>
                            MEN {product.category}
                        </Typography>
                        <Typography variant="h4" sx={{ fontWeight: 'bold', mt: 1 }}>{product.name}</Typography>
                        <Typography variant="h5" sx={{ fontWeight: 'bold', mt: 1 }}>
                            Rs {product.price}
                            <span style={{ fontSize: '14px', color: 'gray.300', fontWeight: '100' }}> & Free Shipping </span>
                        </Typography>

                        <Typography variant="body1" sx={{ mt: 1, color: 'gray' }}>{product.desc}</Typography>

                        <ProductColor colors={product.colors} setSelectedColor={setSelectedColor} selectedColor={selectedColor} />
                        <ProductSize sizes={product.size} setSelectedSize={setSelectedSize} selectedSize={selectedSize} />

                        <Divider />

                        <ProductQuantity quantity={quantity} handleAddCart={handleAddCart} handleDecrease={handleDecrease} handleIncrease={handleIncrease} />

                        <Divider sx={{ my: 4 }} />

                        <ExpandBars expandTitle="Description" subTitle="About the product" subDesc={product.desc} subList="100% Cotton" />
                    </Grid>
                </Grid>

                <Divider sx={{ my: 4 }} />
                <SuggetionProducts />
                {showCart && <CartPanel />}
            </Box>
        </>
    );
}

export default ProductDetail;
