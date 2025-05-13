import React, { useEffect, useRef, useState } from 'react';
import ExpandBars from '../ExpandBars';
import { Box, Grid, Typography, Divider } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import productsData from '../../data/data';
import SuggetionProducts from './SuggetionProducts';
import ProductQuantity from './ProductQuantity';
import ProductSize from './ProductSize';
import ProductColor from './ProductColor';
import CartPanel from '../cart/CartPanel';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
// import StickySubHeader from './StickySubheader.jsx';
import ProductFrame from './ProductFrame';

function ProductDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const productId = parseInt(id);

    const goToPrevProduct = () => { if (productId > 1) { navigate(`/product-detail/${productId - 1}`); } };

    const goToNextProduct = () => {
        const nextId = productId + 1;
        if (isValidProduct(nextId)) navigate(`/product-detail/${nextId}`);
    };


    const isValidProduct = (id) => {
        for (const category in productsData) {
            for (const subCategory in productsData[category]) {
                if (productsData[category][subCategory].some(p => p.id === id)) return true;
            }
        }
        return false;
    };

    const productImageRef = useRef(null);
    const [showSticky, setShowSticky] = useState(false);
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

    useEffect(() => {
        const handleScroll = () => {
            if (productImageRef.current) {
                const top = productImageRef.current.getBoundingClientRect().top;
                setShowSticky(top <= 0);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

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


                    <ProductFrame image={product.image} name={product.name} productImageRef={productImageRef} />

                    <Grid item xs={12} md={6} sx={{ position: 'relative' }}>
                        <Typography variant="body2" sx={{ color: 'gray', fontWeight: '300' }}>
                            {product.type.toUpperCase()}
                        </Typography>
                        <Typography variant="h5" sx={{ fontWeight: '600', mt: 1 }}> {product.name} </Typography>

                        <Typography variant="h6" sx={{ display: 'inline-block', fontWeight: '600', mt: 1 }}>  Rs {product.price} </Typography>

                        <Typography variant="subtitle2" sx={{ display: 'inline-block', color: 'grey', fontWeight: '400' }}> & Free Shipping </Typography>

                        <Typography variant="subtitle2" sx={{ mt: 1, color: 'grey', fontWeight: '400' }}>{product.desc}</Typography>

                        <ProductColor colors={product.colors} setSelectedColor={setSelectedColor} selectedColor={selectedColor} />

                        <ProductSize
                            sizes={product.size}
                            setSelectedSize={setSelectedSize}
                            selectedSize={selectedSize}
                            onClear={() => {
                                setSelectedColor(null);
                                setSelectedSize(null);
                            }}
                        />

                        <Divider />

                        <ProductQuantity quantity={quantity} handleAddCart={handleAddCart} handleDecrease={handleDecrease} handleIncrease={handleIncrease} />

                        <Divider sx={{ my: 4 }} />

                        <ExpandBars expandTitle="Description" subTitle="About the product" subDesc={product.desc} subList="100% Cotton" />

                        <Box sx={{
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
                        </Box>
                    </Grid>


                </Grid>
                <Divider sx={{ my: 4 }} />
                {/* {showSticky && (
                    <StickySubHeader
                        product={product}
                        // quantity={quantity}
                        // selectedColor={selectedColor}
                        // selectedSize={selectedSize}
                        handleAddCart={handleAddCart}
                    />
                )} */}
                <SuggetionProducts />
                {showCart && <CartPanel />}
            </Box>
        </>
    );
}

export default ProductDetail;
