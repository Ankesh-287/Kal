import { NavigateNext } from '@mui/icons-material';
import { Typography, Breadcrumbs, Grid, Box, CircularProgress, Pagination, Link } from '@mui/material';

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllCategories, setSelectedCategory, setSelectedSubCategory } from '../redux/slices/categorySlice';
import { fetchFilteredProducts } from '../redux/slices/productSlice';
import { useNavigate, useParams } from 'react-router-dom';
import ProductCategory from '../Components/product/ProductCategory';
import ProductMobileFilter from '../Components/product/ProductMobileFilter';
import ProductFilterMenu from '../Components/product/ProductFilterMenu';
import ProductCard from '../Components/product/ProductCard';

const ProductPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { category, subCategory } = useParams();
    const { products, total, loading } = useSelector((state) => state.product);
    const { categories, selectedCategory, selectedSubCategory } = useSelector((state) => state.category);

    const [sortOption, setSortOption] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [openCategory, setOpenCategory] = useState(null);
    const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

    useEffect(() => {
        if (category) dispatch(setSelectedCategory(category));
        if (subCategory) dispatch(setSelectedSubCategory(subCategory));
        dispatch(fetchAllCategories());
    }, [category, subCategory, dispatch]);

    useEffect(() => { window.scrollTo(0, 0);  }, [currentPage]);

    useEffect(() => {
        if (selectedCategory) {
            const filters = { category: selectedCategory, page: currentPage, limit: 12, };
            if (selectedSubCategory) filters.subCategory = selectedSubCategory;
            if (sortOption) filters.sort = sortOption;
            dispatch(fetchFilteredProducts(filters));
        }
    }, [selectedCategory, selectedSubCategory, sortOption, currentPage, dispatch]);

    const handleCategoryClick = (categoryName) => {
        setOpenCategory((prev) => (prev === categoryName ? null : categoryName));
        dispatch(setSelectedCategory(categoryName));
        dispatch(setSelectedSubCategory(null));
        setCurrentPage(1);
        navigate(`/products/${categoryName}`);
    };

    const handleSubCategoryClick = (sub) => {
        dispatch(setSelectedSubCategory(sub));
        setCurrentPage(1);
        navigate(`/products/${selectedCategory}/${sub}`);
    };

    const handleProductClick = (id) => navigate(`/product/${id}`);

    const FilterSidebar = (
        <ProductCategory categories={categories} openCategory={openCategory} handleCategoryClick={handleCategoryClick} handleSubCategoryClick={handleSubCategoryClick} />
    );

    return (
        <Grid container spacing={2} sx={{ width: '100%' }}>
            <Grid item xs={12} sm={3} md={3} lg={2} display={{ xs: 'none', sm: 'block' }}>{FilterSidebar}</Grid>
            <ProductMobileFilter mobileFilterOpen={mobileFilterOpen} setMobileFilterOpen={setMobileFilterOpen} FilterSidebar={FilterSidebar} />

            <Grid item xs={12} sm={9} md={9} lg={10}>
                <ProductFilterMenu sortOption={sortOption} setSortOption={setSortOption} />
                

                <Grid item xs={12} lg={12} sx={{ px: 2, py: 3 }}>
                    <Breadcrumbs separator={<NavigateNext fontSize="small" />} aria-label="breadcrumb">
                        <Link underline="hover" color="inherit" href="/">Home</Link>
                        {selectedCategory && <Link underline="hover" color="inherit" href={`/products/${selectedCategory}`}>{selectedCategory}</Link>}
                        {selectedSubCategory && <Typography>{selectedSubCategory}</Typography>}
                    </Breadcrumbs>
                </Grid>

                {loading ? (
                    <Box sx={{ textAlign: 'center', py: 5 }}><CircularProgress /></Box>
                ) : (
                    <>
                        <Grid container spacing={3} sx={{ px: 2 }}>
                            <ProductCard products={products} handleProductClick={handleProductClick} />
                        </Grid>
                        <Grid container justifyContent="center" mt={3}>
                            <Pagination
                                count={Math.ceil(total / 12)}
                                page={currentPage}
                                onChange={(e, value) => setCurrentPage(value)}
                                color="primary"
                            />
                        </Grid>
                    </>
                )}
            </Grid>
        </Grid>
    );
};

export default ProductPage;