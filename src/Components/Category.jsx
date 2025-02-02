import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Breadcrumbs,
  Pagination,
} from "@mui/material";
import productsData from "../data/data"; // Import products data

const Category = () => {
  const { category } = useParams(); // Get category from URL
  const products = productsData[category] || []; // Get products of the category

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 3; // Number of products per page

  // Calculate start & end indexes for current page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // Handle Page Change
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <Box sx={{ p: 4 }}>
      {/* Breadcrumbs (Home / Category) */}
      <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 2 }}>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          Home
        </Link>
        <Typography sx={{ textTransform: "capitalize", fontWeight: "bold" }}>
          {category}
        </Typography>
      </Breadcrumbs>

      {/* Category Title */}
      <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold", textTransform: "capitalize" }}>
        {category} Products
      </Typography>

      {/* Products Grid */}
      <Grid container spacing={3}>
        {currentProducts.length > 0 ? (
          currentProducts.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <Card sx={{ maxWidth: 300, mx: "auto", textAlign: "center" }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={`/assets/${product.image}`} // Image Path
                  alt={product.name}
                />
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    {product.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                    ${product.price}
                  </Typography>
                  <Button variant="contained" sx={{ backgroundColor: "black", color: "white" }}>
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))
        ) : (
          <Typography variant="body1" sx={{ mt: 2 }}>
            No products found in this category.
          </Typography>
        )}
      </Grid>

      {/* Pagination */}
      {products.length > productsPerPage && (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
          <Pagination
            count={Math.ceil(products.length / productsPerPage)} // Total pages
            page={currentPage}
            onChange={handlePageChange}
            color="primary"
          />
        </Box>
      )}
    </Box>
  );
};

export default Category;
