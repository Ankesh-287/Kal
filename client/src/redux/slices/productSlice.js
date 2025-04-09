import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchAllProducts = createAsyncThunk(
    'product/fetchAllProducts',
    async () => {
        const res = await axios.get('api/products');
        return res.data;
    }
);

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
            state.products = action.payload.data;
        })
        .addCase(fetchAllProducts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    },
});

export default productSlice.reducer;
