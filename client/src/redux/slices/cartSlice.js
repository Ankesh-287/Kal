import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import API from '../../api/axios.js';

export const fetchCart = createAsyncThunk('cart/fetchCart', async (_, thunkAPI) => {
  const res = await API.get('/api/cart', { withCredentials: true });
  return res.data;
});

export const addToCart = createAsyncThunk('cart/addToCart', async (item, thunkAPI) => {
  const res = await API.post('/api/cart', item, { withCredentials: true });
  return res.data;
});

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchCart.pending, state => { state.loading = true; })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.items = action.payload;
      });
  },
});

export default cartSlice.reducer;
