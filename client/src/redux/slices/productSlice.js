import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';
import API from '../../api/axios.js'

export const fetchProduct = createAsyncThunk('product/fetchProduct', async (id) => {
    const res = await API.get(`/products/${id}`);
    return res.data;
})

export const fetchSubcategoryProducts = createAsyncThunk('product/fetchSubcategoryProducts', async (subcategory) => {
    const res = await API.get(`/products/subcategory/${subcategory}`);
    return { products: res.data };
})

export const fetchAllProducts = createAsyncThunk(
    'product/fetchAllProducts',
    async () => {
        const res = await API.get('/products');
        return { products: res.data.data };
    }
);

export const fetchFilteredProducts = createAsyncThunk(
    'product/fetchFilteredProducts',
    async (filters) => {
        const { category, subCategory, sort } = filters;

        const cleanedFilters = Object.fromEntries(
            Object.entries({ category, subCategory, sort }).filter(([_, v]) => v != null)
        );

        const query = new URLSearchParams(cleanedFilters).toString();
        const res = await axios.get(`/api/products?${query}`);
        return res.data;
    }
);

export const updateProduct = createAsyncThunk(
    'product/updateProduct',
    async ({ id, updates }) => {
        const res = await API.put(`/products/${id}`, updates);
        return res.data;
    }
);

const productSlice = createSlice({
    name: 'product',
    initialState: {
        products: [],
        subcategoryProducts: [],
        product: null,
        loading: false,
        total: 0,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllProducts.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchAllProducts.fulfilled, (state, action) => {
                state.products = Array.isArray(action.payload.products) ? action.payload.products : [];
                state.total = action.payload.total || 0;
                state.loading = false;
            })
            .addCase(fetchAllProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(fetchFilteredProducts.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchFilteredProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.products = Array.isArray(action.payload.data) ? action.payload.data : [];
                state.total = action.payload.total || 0;
            })
            .addCase(fetchFilteredProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(fetchProduct.fulfilled, (state, action) => {
                state.loading = false;
                state.product = action.payload.data;
            })
            .addCase(fetchSubcategoryProducts.fulfilled, (state, action) => {
                state.subcategoryProducts = Array.isArray(action.payload.products) ? action.payload.products : [];
                state.total = action.payload.products?.length || 0; 
            });

    },
});

export default productSlice.reducer;
