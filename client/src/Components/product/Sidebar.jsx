import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchAllCategories,
  setSelectedCategory,
  setSelectedSubCategory
} from '../../redux/slices/categorySlice';
import { fetchFilteredProducts } from '../../redux/slices/productSlice';

import {
  Box, Typography, Breadcrumbs, Grid, Card, CardMedia, List, ListItemButton, Collapse
} from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const SidebarWithProducts = () => {
  const dispatch = useDispatch();
  const { categories, selectedCategory, selectedSubCategory } = useSelector((state) => state.category);
  const { products } = useSelector((state) => state.product);

  const [openCategory, setOpenCategory] = React.useState(null);

  useEffect(() => {
    dispatch(fetchAllCategories());
  }, [dispatch, products]);

  useEffect(() => {
    dispatch(fetchFilteredProducts({
      category: selectedCategory,
      subCategory: selectedSubCategory
    }));
  }, [selectedCategory, selectedSubCategory, dispatch]);

  const handleCategoryClick = (category) => {
    setOpenCategory(prev => prev === category.name ? null : category.name);
    dispatch(setSelectedCategory(category.name));
  };

  const handleSubCategoryClick = (sub) => {
    dispatch(setSelectedSubCategory(sub));
  };

  return (
    <Grid container spacing={2} sx={{ mt: 3 }}>
      <Grid item xs={12}>
        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
          <Typography>Home</Typography>
          {selectedCategory && <Typography>{selectedCategory}</Typography>}
          {selectedSubCategory && <Typography>{selectedSubCategory}</Typography>}
        </Breadcrumbs>
      </Grid>

      <Grid item xs={12} md={3}>
        <List component="nav">
          {categories.map((cat) => (
            <Box key={cat.name}>
              <ListItemButton onClick={() => handleCategoryClick(cat)}>
                {cat.name} {openCategory === cat.name ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={openCategory === cat.name} timeout="auto" unmountOnExit>
                {cat.subCategories.map((sub) => (
                  <ListItemButton
                    key={sub}
                    sx={{ pl: 4 }}
                    onClick={() => handleSubCategoryClick(sub)}
                  >
                    {sub}
                  </ListItemButton>
                ))}
              </Collapse>
            </Box>
          ))}
        </List>
      </Grid>

      <Grid item xs={12} md={9}>
        <Grid container spacing={2}>
          {products.map((product) => (
            <Grid item key={product._id} xs={12} sm={6} md={4}>
              <Card>
                <CardMedia
                  component="img"
                  height="200"
                  image={product.image}
                  alt={product.name}
                />
              </Card>
              <Typography variant='h6'>
                {product.name}
              </Typography>
              <Typography>
                {product.desc}
              </Typography>
              <Typography>
              ₹{product.price}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SidebarWithProducts;
