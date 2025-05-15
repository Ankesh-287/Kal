import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import API from '../../api/axios';

export const fetchCart = createAsyncThunk('cart/fetchCart', async () => {
  const res = await API.get('/cart', { withCredentials: true });
  return res.data;
});

export const addToCart = createAsyncThunk('cart/addToCart', async (item) => {
  const res = await API.post('/cart', item, { withCredentials: true });
  return res.data;
});

export const updateCartItem = createAsyncThunk('cart/updateItem', async (payload) => {
  const res = await API.put('/cart', payload, { withCredentials: true });
  return res.data;
});

export const removeCartItem = createAsyncThunk('cart/removeItem', async (itemId) => {
  const res = await API.delete(`/cart/${itemId}`, { withCredentials: true });
  return res.data;
});

const cartSlice = createSlice({
  name: 'cart',
  initialState: { items: [], loading: false },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchCart.pending, state => { state.loading = true })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.items = action.payload.items;
        state.loading = false;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.items = action.payload.items;
      })
      .addCase(updateCartItem.fulfilled, (state, action) => {
        state.items = action.payload.items;
      })
      .addCase(removeCartItem.fulfilled, (state, action) => {
        state.items = action.payload.items;
      });
  }
});

export default cartSlice.reducer;
