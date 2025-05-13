import { Inbox, ExpandMore, ExpandLess, NavigateNext, } from '@mui/icons-material';
import { Typography, Breadcrumbs, Grid, Card, CardMedia, List, ListItemButton, Collapse, useTheme, ListItem, ListItemIcon, ListItemText, Rating, Box, IconButton, Select, MenuItem, FormControl, InputLabel } from '@mui/material';

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllCategories, setSelectedCategory, setSelectedSubCategory } from '../../redux/slices/categorySlice';
import { fetchFilteredProducts } from '../../redux/slices/productSlice';
import { useNavigate } from 'react-router-dom';


const SidebarWithProducts = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { categories, selectedCategory, selectedSubCategory } = useSelector((state) => state.category);
  const { products } = useSelector((state) => state.product);
  const [sortOption, setSortOption] = useState('');
  const [openCategory, setOpenCategory] = useState(null);
  const theme = useTheme();

  useEffect(() => {
    dispatch(fetchAllCategories());
  }, [dispatch]);

  useEffect(() => {
    if (selectedCategory) {
      const filters = { category: selectedCategory };
      if (selectedSubCategory) filters.subCategory = selectedSubCategory;
      if (sortOption === 'price-asc') filters.sort = 'asc';
      if (sortOption === 'price-desc') filters.sort = 'desc';
      if (sortOption === 'rating') filters.sort = 'rating';
      if (sortOption === 'latest') filters.sort = 'latest';

      dispatch(fetchFilteredProducts(filters));
    }
  }, [selectedCategory, selectedSubCategory, sortOption, dispatch]);

  const handleCategoryClick = (categoryName) => {
    setOpenCategory((prev) => (prev === categoryName ? null : categoryName));
    dispatch(setSelectedCategory(categoryName));
    dispatch(setSelectedSubCategory(null));
  };

  const handleSubCategoryClick = (sub) => {
    dispatch(setSelectedSubCategory(sub));
  };

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  }

  return (
    <Grid container spacing={2} sx={{ width: '100%' }}>
      <Grid item xs={12} sm={3} md={3} lg={2}>
        <List component="nav">
          {categories.map((cat, index) => (
            <React.Fragment key={cat.name}>
              <ListItem disablePadding>
                <ListItemButton
                  onClick={() => handleCategoryClick(cat.name)}
                  sx={{
                    bgcolor: openCategory === cat.name ? theme.palette.primary.main : 'transparent',
                    color: openCategory === cat.name ? theme.palette.primary.contrastText : theme.palette.text.primary,
                    '&:hover': {
                      bgcolor: theme.palette.primary.dark, color: theme.palette.primary.contrastText,
                    },
                  }}
                >
                  <ListItemIcon
                    sx={{ color: openCategory === cat.name ? theme.palette.primary.contrastText : theme.palette.text.primary, }}>
                    <Inbox />
                  </ListItemIcon>
                  <ListItemText
                    primary={`${cat.name.charAt(0).toUpperCase() + cat.name.slice(1)} ${index}`} />
                  {openCategory === cat.name ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
              </ListItem>

              <Collapse in={openCategory === cat.name} timeout="auto" unmountOnExit>
                <List disablePadding>
                  {cat.subCategories.map((sub) => (
                    <ListItem key={sub} disablePadding>
                      <ListItemButton
                        sx={{
                          pl: 4,
                          bgcolor: selectedSubCategory === sub ? theme.palette.secondary.main : "transparent",
                          color: selectedSubCategory === sub ? theme.palette.secondary.contrastText : theme.palette.text.primary,
                          '&:hover': {
                            bgcolor: theme.palette.secondary.dark, color: theme.palette.secondary.contrastText
                          },
                        }}
                        onClick={() => handleSubCategoryClick(sub)}
                      >
                        <ListItemText primary={sub.charAt(0).toUpperCase() + sub.slice(1)} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            </React.Fragment>
          ))}
        </List>
      </Grid>

      <Grid item xs={12} sm={9} md={9} lg={10} >
        <Grid item xs={6} lg={3} sx={{ position: 'absolute', top: 90, right: 20 }}>
          <FormControl size="small" sx={{ minWidth: 180 }}>
            <InputLabel>Sort By</InputLabel>
            <Select value={sortOption} label="Sort By" onChange={(e) => setSortOption(e.target.value)} >
              <MenuItem value="">Default</MenuItem>
              <MenuItem value="price-asc">Price: Low to High</MenuItem>
              <MenuItem value="price-desc">Price: High to Low</MenuItem>
              <MenuItem value="rating">Rating</MenuItem>
              <MenuItem value="latest">Latest</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} lg={12} paddingY={3}>
          <Breadcrumbs separator={<NavigateNext fontSize="small" />} aria-label="breadcrumb">
            <Typography>Home</Typography>
            {selectedCategory && <Typography>{selectedCategory}</Typography>}
            {selectedSubCategory && <Typography>{selectedSubCategory}</Typography>}
          </Breadcrumbs>
        </Grid>

        <Grid container spacing={3} sx={{ px: 2 }}>
          {products.map((product) => (
            <Grid item key={product._id} xs={6} sm={4} md={3} lg={2} onClick={() => handleProductClick(product._id)}>
              <Card>
                <CardMedia component="img" height="300" image={product.image} alt={product.name} />
              </Card>
              <Typography variant='body2' sx={{ fontWeight: '400', color: 'grey.400' }}>{product.category}</Typography>

              <Typography variant='h6'
                sx={{ fontWeight: '600', color: 'grey.900' }}>{product.name}</Typography>
              <Typography variant='h6'
                sx={{ fontWeight: '600', color: 'grey.900' }}>{product.stock}</Typography>

              <Typography variant='body2' sx={{ display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: 2, overflow: 'hidden', }} >{product.desc}</Typography>

              <Typography variant='subtitle2' sx={{ fontWeight: '800', color: 'grey.600' }}>₹{product.price}</Typography>

              <Grid container spacing={1} paddingY={1}>
                {product.colors.length > 0 ? (
                  product.colors.map((color, index) => (
                    <Grid item key={index}>
                      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid', borderColor: 'grey.300', borderRadius: 0, }}>
                        <IconButton disableTouchRipple sx={{ backgroundColor: color, width: 10, height: 10, borderRadius: 0, }} />
                      </Box>
                    </Grid>
                  ))
                ) : (
                  <p style={{ color: 'grey' }}>No Colors Available</p>
                )}
              </Grid>
              <Rating defaultValue={product.rating} precision={0.5} readOnly></Rating>

            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SidebarWithProducts;
