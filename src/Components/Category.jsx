import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  Box, Grid, Card, CardMedia, CardContent, Typography, Button, Breadcrumbs, Pagination, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText,
  Toolbar,
  Divider,
} from "@mui/material";
import { ExpandLess, ExpandMore, Inbox } from "@mui/icons-material";
import productsData from "../data/data";

const Category = () => {
  const drawerWidth = 260;
  const navigate = useNavigate();
  const { category } = useParams();
  const categoryData = productsData[category] || {};
  const subcategories = Object.keys(categoryData);

  const [selectedSubcategory, setSelectedSubcategory] = useState("");
  const [openCategory, setOpenCategory] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 3;
  
  useEffect(() => {
    setOpenCategory(category); // Open the newly selected category
    setSelectedSubcategory("");
    setCurrentPage(1);
  }, [category]);

  const handleCategoryClick = (selectedCategory) => {
    setOpenCategory((prevCategory) => (prevCategory === selectedCategory ? null : selectedCategory));
  };

  const handleSubcategoryChange = (subcategory, parentCategory) => {
    setSelectedSubcategory(subcategory);
    setCurrentPage(1);
    setOpenCategory(parentCategory);
    navigate(`/product-category/${parentCategory}/${subcategory}`);
  };

  const products = categoryData[selectedSubcategory] || [];
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };


  return (
    <>
      <Grid container spacing={1}>
        {/* Sidebar Drawer */}
        <Grid item>
          <Drawer
            variant="permanent"
            anchor="left"
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                width: drawerWidth,
                boxSizing: "border-box",
                backgroundColor: "#f8f9fa",
              },
            }}
          >
            <Toolbar />
            <Toolbar />
            <Box sx={{ overflow: "auto" }}>
              <List>
                {Object.keys(productsData).map((mainCategory, index) => (
                  <React.Fragment key={mainCategory}>
                    <ListItem disablePadding>
                      <ListItemButton
                        onClick={() => handleCategoryClick(mainCategory)}
                        sx={{
                          backgroundColor: openCategory === mainCategory ? "#007bff" : "transparent",
                          color: openCategory === mainCategory ? "white" : "black",
                          "&:hover": { backgroundColor: "#0056b3", color: "white" },
                        }}
                      >
                        <ListItemIcon sx={{ color: openCategory === mainCategory ? "white" : "black" }}>
                          <Inbox />
                        </ListItemIcon>
                        <ListItemText primary={mainCategory.charAt(0).toUpperCase() + mainCategory.slice(1)} />
                        {openCategory === mainCategory ? <ExpandLess /> : <ExpandMore />}
                      </ListItemButton>
                    </ListItem>
                    {openCategory === mainCategory && (
                      <List >
                        {Object.keys(productsData[mainCategory]).map((subcat) => (
                          <ListItem key={subcat} disablePadding>
                            <ListItemButton
                              onClick={() => handleSubcategoryChange(subcat, mainCategory)}
                              sx={{
                                backgroundColor: selectedSubcategory === subcat ? "#17a2b8" : "transparent",
                                color: selectedSubcategory === subcat ? "white" : "black",
                                "&:hover": { backgroundColor: "#138496", color: "white" },
                              }}
                            >
                              <ListItemText primary={subcat.charAt(0).toUpperCase() + subcat.slice(1)} />
                            </ListItemButton>
                          </ListItem>
                        ))}
                      </List>
                    )}
                    <Divider sx={{ my: 1 }} />
                  </React.Fragment>
                ))}
              </List>
            </Box>
          </Drawer>
        </Grid>

        {/* Main Content */}
        <Grid item lg={9} sx={{ p: 4 }}>
          <Toolbar />
          <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 2 }}>
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              Home
            </Link>
            <Link to={`/product-category/${openCategory}`} style={{ textDecoration: "none", color: "inherit" }}>
            {openCategory}
            </Link>
            {selectedSubcategory && (
              <Typography sx={{ textTransform: "capitalize", fontWeight: "bold" }}>
                {selectedSubcategory}
              </Typography>
            )}
          </Breadcrumbs>

          <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold", textTransform: "capitalize" }}>
            {selectedSubcategory ? selectedSubcategory + " Products" : "Select a Subcategory"}
          </Typography>

          <Grid container spacing={3}>
            {currentProducts.length > 0 ? (
              currentProducts.map((product) => (
                <Grid item xs={12} sm={6} md={4} key={product.id}>
                  <Card sx={{ maxWidth: 300, mx: "auto", textAlign: "center" }}>
                    <CardMedia
                      component="img"
                      height="370"
                      image={product.image}
                      alt={product.name}
                    />
                    <CardContent>
                      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                        {product.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                        ${product.price}
                      </Typography>
                      <Button
                        variant="contained"
                        sx={{
                          backgroundColor: "black",
                          color: "white",
                          "&:hover": { backgroundColor: "#333" },
                        }}
                        onClick={() => navigate(`/product/${product.id}`)}
                      >
                        Add to Cart
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              ))
            ) : (
              selectedSubcategory && (
                <Typography variant="body1" sx={{ mt: 2 }}>
                  No products found in this subcategory.
                </Typography>
              )
            )}
          </Grid>

          {/* Pagination */}
          {products.length > productsPerPage && (
            <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
              <Pagination
                count={Math.ceil(products.length / productsPerPage)}
                page={currentPage}
                onChange={handlePageChange}
                color="primary"
              />
            </Box>
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default Category;
