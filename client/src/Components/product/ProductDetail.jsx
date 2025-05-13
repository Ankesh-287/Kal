import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { fetchProduct } from '../../redux/slices/productSlice';
import { Box, Divider, Grid, Typography, CircularProgress, Backdrop } from '@mui/material';
import ProductFrame from './ProductFrame';
import ProductColor from './ProductColor';
import ProductSize from './ProductSize';
import ProductQuantity from './ProductQuantity';
import ExpandBars from '../ExpandBars';
import SuggetionProducts from './SuggetionProducts';
import CartPanel from '../cart/CartPanel';
import ProductText from './ProductText';

function ProductDetail() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const productImageRef = useRef(null);
    const [quantity, setQuantity] = useState(1);
    const [selectedColor, setSelectedColor] = useState(null);
    const [selectedSize, setSelectedSize] = useState(null);
    const [showCart, setShowCart] = useState(false);
    const [addingToCart, setAddingToCart] = useState(false);
    const { product, loading, error } = useSelector((state) => state.product);

    const handleIncrease = () => setQuantity(quantity + 1);
    const handleDecrease = () => quantity > 1 && setQuantity(quantity - 1);
    
    const hasCartItems = () => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    return cart.length > 0;
};

    const handleAddCart = () => {
        
        if (!selectedColor || !selectedSize) {
            alert("Please select color and size");
            return;
        }

        setAddingToCart(true);

        const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

        const existingItemIndex = cartItems.findIndex((item) =>
            item.id === product.id && item.color === selectedColor && item.size === selectedSize
        );

        if (existingItemIndex !== -1) {
            cartItems[existingItemIndex].quantity += quantity;
        } else {
            cartItems.push({
                id: product?._id,
                name: product?.name,
                price: product?.price,
                image: product?.image,
                color: selectedColor,
                size: selectedSize,
                quantity: quantity,
            });
        }

        localStorage.setItem("cart", JSON.stringify(cartItems));
        window.dispatchEvent(new Event("storage"));

        setTimeout(() => {
            setAddingToCart(false);
            setShowCart(true);
        }, 800);
    };

    useEffect(() => {
        dispatch(fetchProduct(id));
    }, [dispatch, id]);

    useEffect(() => {
        if (product) {
            setSelectedColor(product?.colors?.[0] || null);
            setSelectedSize(product?.size?.[0] || null);
        }
    }, [product]);


    return (
        <>
            {(loading || addingToCart) && (
                <Backdrop
                    open={true}
                    sx={{
                        zIndex: 1200,
                        color: '#fff',
                        backdropFilter: 'blur(4px)',
                        backgroundColor: 'rgba(0, 0, 0, 0.2)',
                        flexDirection: 'column',
                    }}
                >
                    <CircularProgress color="inherit" />
                    <Typography variant="subtitle2" mt={2}>
                        {loading ? "Loading Product..." : "Adding to Cart..."}
                    </Typography>
                </Backdrop>
            )}

            <Box sx={{ display: 'flex', flexDirection: 'column', width: { xs: '100%', lg: "80%" }, m: 'auto', p: 3 }}>
                <Grid container justifyContent="center" spacing={4}>


                    <ProductFrame image={product?.image} name={product?.name} productImageRef={productImageRef} />

                    <Grid item xs={12} md={6}>

                        <ProductText category={product?.category} name={product?.name} price={product?.price} stock={product?.stock} desc={product?.desc} />

                        <ProductColor colors={product?.colors} setSelectedColor={setSelectedColor} selectedColor={selectedColor} />

                        <ProductSize
                            sizes={product?.size}
                            setSelectedSize={setSelectedSize}
                            selectedSize={selectedSize}
                            onClear={() => {
                                setSelectedColor(null);
                                setSelectedSize(null);
                            }}
                        />

                        <Divider />

                        <ProductQuantity
                            quantity={quantity}
                            handleDecrease={handleDecrease}
                            handleAddCart={handleAddCart}
                            handleIncrease={handleIncrease}
                        />

                        <Divider sx={{ my: 4 }} />

                        <ExpandBars
                            expandTitle="Description"
                            subTitle="About the product"
                            subDesc={product?.desc}
                            subList="100% Cotton"
                        />

                        {/* <Box sx={{
                            width: '60px',
                            height: '24px',
                            display: 'flex',
                            justifyContent: 'space-between',
                            position: 'absolute',
                            alignItems: 'center',
                            top: 15,
                            right: 0,
                            my: 2,
                        }}>
                            <ArrowBackIos onClick={goToPrevProduct} sx={{ cursor: 'pointer', border: '1px solid', p: '5px' }} />
                            <ArrowForwardIos onClick={goToNextProduct} sx={{ cursor: 'pointer', border: '1px solid', p: '5px' }} />
                        </Box> */}
                        
                    </Grid>

                    <Divider sx={{ my: 4 }} />
                    {/* {showSticky && (
                        <StickySubHeader
                            product={product}
                            quantity={quantity}
                            selectedColor={selectedColor}
                            selectedSize={selectedSize}
                            handleAddCart={handleAddCart}
                        />
                    )} */}
                </Grid>

                <SuggetionProducts />
                {showCart && hasCartItems() && <CartPanel />}{showCart && <CartPanel />}
            </Box>
        </>
    );
}

export default ProductDetail;