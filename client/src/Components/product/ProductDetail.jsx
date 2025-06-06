import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { addToCart } from '../../redux/slices/cartSlice';
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
import { fetchUser } from '../../redux/slices/userSlice';

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
    const { currentUser } = useSelector((state) => state.user);

    const handleIncrease = () => setQuantity(quantity + 1);
    const handleDecrease = () => quantity > 1 && setQuantity(quantity - 1);

    const hasCartItems = () => {
        const cart = JSON.parse(localStorage.getItem("cart") || "[]");
        return cart.length > 0;
    };

    const handleAddCart = () => {
        // cartItem.productId = cartItem.productId.toString();

        if (!selectedColor || !selectedSize) {
            alert("Please select color and size");
            return;
        }

        const cartItem = {
            productId: product._id,
            name: product.name,
            price: product.price,
            image: product.image,
            color: selectedColor,
            size: selectedSize,
            quantity,
        };

        setAddingToCart(true);
        if (currentUser) {
            dispatch(addToCart(cartItem)).then(() => {
                setAddingToCart(false);
                setShowCart(true);
            });
        } else {
            const cart = JSON.parse(localStorage.getItem("cart") || "[]");
            const index = cart.findIndex(
                item =>
                    item.productId.toString() === cartItem.productId.toString() &&
                    item.name === cartItem.name &&
                    item.price === cartItem.price &&
                    item.color === cartItem.color &&
                    item.size === cartItem.size

            );
            if (index !== -1) {
                cart[index].quantity += cartItem.quantity;
            } else {
                cart.push(cartItem);
            }
            localStorage.setItem("cart", JSON.stringify(cart));
            window.dispatchEvent(new Event("storage"));
            setTimeout(() => {
                setAddingToCart(false);
                setShowCart(true);
            }, 800);
        }
    };

    useEffect(() => {
        dispatch(fetchUser());
    }, [dispatch])

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


                    <ProductFrame
                        image={product?.image}
                        images={product?.images}
                        name={product?.name}
                        productImageRef={productImageRef}
                    />

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