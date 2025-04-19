import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

export const fetchAllProducts = createAsyncThunk(
    'product/fetchAllProducts',
    async () => {
        const res = await axios.get('/api/products');
        return res.data.data;
    }
);

export const fetchFilteredProducts = createAsyncThunk(
    'product/fetchFilteredProducts',
    async (filters) => {
        const {category, subCategory, sort} = filters;
        const query = new URLSearchParams({ category, subCategory, sort}). toString();
        const res = await axios.get(`/api/products?${query}`);
        return res.data;
    }
)

const productSlice = createSlice({
    name: 'product',
    initialState: {
        products: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchAllProducts.pending, (state) => {
            state.loading = true;
        })
        .addCase(fetchAllProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.products = action.payload;
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
            state.products = action.payload.data; 
        })
        .addCase(fetchFilteredProducts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    },
});

export default productSlice.reducer;
