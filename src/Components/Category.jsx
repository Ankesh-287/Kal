import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Box, Grid, Typography, Toolbar, } from "@mui/material";
import Drawbar from "./Drawbar";
import BreadCrum from "./BreadCrum";
import ProductGrid from "./ProductGrid";
import productsData from "../data/data";

const Category = () => {
  const { category, subcategory } = useParams();
  const navigate = useNavigate();
  const categoryData = productsData[category] || {};
  const subcategories = Object.keys(categoryData);
  const products = subcategory ? categoryData[subcategory] || [] : [];

  const [selectedSubcategory, setSelectedSubcategory] = useState("");
  const [openCategory, setOpenCategory] = useState(category);

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 3;

  useEffect(() => {
    setOpenCategory(category);
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

  return (
    <>
    <Box>
      <Grid container spacing={1}>
        <Grid item lg={3} >
        <Drawbar productsData={productsData} openCategory={openCategory} handleCategoryClick={handleCategoryClick} handleSubCategoryChange={handleSubcategoryChange} selectedSubCategory={selectedSubcategory} />
        </Grid>
        <Grid item lg={9} sx={{ p: 4 }}>
          <Toolbar />
          <BreadCrum openCategory={openCategory} selectedSubCategory={selectedSubcategory} />
          <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold' }}>
            {selectedSubcategory ? `${selectedSubcategory} Products` : "Select a Subcategory"}
          </Typography>
          <ProductGrid products={categoryData[selectedSubcategory] || []} productsPerPage={productsPerPage} currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </Grid>
      </Grid>
    </Box>
    </>
  );
};

export default Category;
