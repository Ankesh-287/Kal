import React, { useState, useEffect } from "react";
// import {useDispatch, useSelector} from 'react-redux';
// import {useSearchParams} from 'react-router-dom'
// import {fetchProducts} from '../../redux/actions/productAction'
import { useParams, useNavigate } from "react-router-dom";
import { Box, Grid, Typography, Toolbar, } from "@mui/material";
import Drawbar from "./Drawbar";
import BreadCrum from "../BreadCrum";
import ProductGrid from "./ProductGrid";
import productsData from "../../data/data";

const Category = () => {
  // const dispatch = useDispatch();
  // const {products} = useSelector((state) => state.product);
  // const [searchParams] = useSearchParams();
  // const [activeCategory, setActiveCategory] = useState('All');
  // const [activeSubCategory, setCategory ] = useState('All');
  // const [sortOrder, setSortOrder] = useState('')

  // useEffect(() => {
  //   dispatch(fetchProducts());
  // }, [dispatch]);

  // const categories = Array.from (new Set(products.map((item) => item.category)));

  // const getSubCategories = () => {
  //   if(activeCategory === "All") return [];
  //   const subcats = products
  //   .filter((item) => item.category === activeCategory)
  //   .map((item) => item.subcategory);
  //   return Array.from(new Set(subcats));
  // };

  // const filterProducts = () => {
  //   let updated = [...products];
  //   if(activeCategory !== 'All') {
  //     updated = updated.filter((item) => item.category === activeCategory);
  //   }
  //   if(activeSubCategory !== 'All') {
  //     updated = updated.filter((item) => item.subcategory === activeSubCategory);
  //   }
  //   if(sortOrder === 'lowToHigh') {
  //     updated.sort((a, b) => a.price - b.price);
  //   } else if ( sortOrder === 'highToLow') {
  //     updated.sort((a, b) => b.price - a.price);
  //   }
  //   return updated
  // };

  // const filteredProducts = filterProducts();

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
    <Box sx={{display:"flex"}}>
      <Grid container spacing={1}>
        <Grid item lg={2} >
        <Drawbar productsData={productsData} openCategory={openCategory} handleCategoryClick={handleCategoryClick} handleSubCategoryChange={handleSubcategoryChange} selectedSubCategory={selectedSubcategory} />
        </Grid>
        <Grid item lg={10} sx={{ p: 4 }}>
          {/* <Toolbar /> */}
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
