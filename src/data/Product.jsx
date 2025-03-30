import { useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Grid, Typography, Button, IconButton } from "@mui/material";
import { Add, Remove } from "@mui/icons-material";
import productsData from "../data/data";

const ProductDetail = () => {
  const { id } = useParams(); // Get product ID from URL
  const product = Object.values(productsData)
    .flat()
    .find((item) => item.id === parseInt(id)); // Find product by ID

  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const isInCart = cart.some((item) => item.id === product?.id);

  const handleCart = (product) => {
    setCart((prevCart) => {
      if (isInCart) {
        return prevCart.filter((item) => item.id !== product.id);
      } else {
        return [...prevCart, { ...product, quantity } ];
      }
    });
  };

  if (!product) {
    return <Typography variant="h5">Product not found.</Typography>;
  }

  return (
    <Box sx={{ width: "100%", p: 4 }}>
      <Grid container spacing={4} justifyContent="center">
        {/* Product Image */}
        <Grid item xs={12} md={6}>
          <Box sx={{ width: "100%" }}>
            <img
              src={`/assets/${product.image}`}
              alt={product.name}
              style={{ width: "100%", borderRadius: "10px" }}
            />
          </Box>
        </Grid>

        {/* Product Details */}
        <Grid item xs={12} md={6}>
          <Typography variant="body1" sx={{ color: "grey.500", fontSize: "20px" }}>
            {product.category?.toUpperCase() || "Category"}
          </Typography>

          <Typography variant="h4" sx={{ fontWeight: "bold", mt: 1 }}>
            {product.name}
          </Typography>

          <Typography variant="h6" sx={{ color: "grey.600", fontWeight: "bold", mt: 1 }}>
            ${product.price}
          </Typography>

          {/* Quantity Selector */}
          <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
            <IconButton onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}>
              <Remove />
            </IconButton>
            <Typography variant="h6" sx={{ mx: 2 }}>
              {quantity}
            </Typography>
            <IconButton onClick={() => setQuantity((prev) => prev + 1)}>
              <Add />
            </IconButton>
          </Box>

          {/* Add to Cart Button */}
          <Button variant="contained" sx={{ mt: 2, backgroundColor: "black", color: "white" }}
            onClick={handleCart()}>
            Add to Cart
          </Button>

          {/* Description */}
          <Typography variant="body1" sx={{ mt: 3, color: "grey.700" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dapibus interdum eros.
            Our T-Shirts are 100% Cotton, 260gsm, Breathable Fabric.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductDetail;
