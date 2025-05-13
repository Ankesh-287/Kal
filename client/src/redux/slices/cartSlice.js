import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import API from '../../api/axios.js';

export const fetchCart = createAsyncThunk('cart/fetchCart', async (_, thunkAPI) => {
    try {
        const res = await API.get('/cart');
        return res.data;
    } catch (err) {
        return thunkAPI.rejectWithValue(err.response?.data?.message || 'Failed to fetch cart');
    }
});

export const addToCart = createAsyncThunk(
    'cart/addToCart',
    async ({ productId, quantity, color, size }, thunkAPI) => {
        try {
            const res = await API.post('/cart/add', { productId, quantity, color, size });
            return res.data;
        } catch (err) {
            return thunkAPI.rejectWithValue(err.response?.data?.message || 'Failed to add to cart');
        }
    }
);

export const removeFromCart = createAsyncThunk(
    'cart/removeFromCart',
    async ({ productId, color, size }, thunkAPI) => {
        try {
            const res = await API.put('/cart/remove', { productId, color, size });
            return res.data;
        } catch (err) {
            return thunkAPI.rejectWithValue(err.response.data.message || 'Error removing item');
        }
    }
);

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        loading: false,
        error: null,
    },
    reducers: {
        clearCartState: (state) => {
            state.items = [];
            state.loading = false;
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCart.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchCart.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload.items;
            })
            .addCase(fetchCart.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })


            .addCase(addToCart.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(addToCart.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload.items;
            })
            .addCase(addToCart.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })


            .addCase(removeFromCart.pending, (state) => {
                state.loading = true;
            })
            .addCase(removeFromCart.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload.items;
            })
            .addCase(removeFromCart.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export const { clearCartState } = cartSlice.actions;
export default cartSlice.reducer;
