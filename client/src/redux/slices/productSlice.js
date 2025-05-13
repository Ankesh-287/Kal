import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';
import API from '../../api/axios.js'

export const fetchProduct = createAsyncThunk('product/fetchProduct', async(id) => {
    const res = await API.get(`/products/${id}`);
    return res.data;
})

export const fetchAllProducts = createAsyncThunk(
    'product/fetchAllProducts',
    async () => {
        const res = await API.get('/products');
        return res.data.data;
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
        product: null,
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
        })
        .addCase(fetchProduct.fulfilled, (state, action) => {
            state.loading = false;
            state.product = action.payload.data;
        });
    },
});

export default productSlice.reducer;
