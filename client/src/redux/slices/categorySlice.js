import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import API from '../../api/axios.js'

export const fetchAllCategories = createAsyncThunk(
  'category/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await API.get('/categories');
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message || error.message);
    }
  }
);

const categorySlice = createSlice({
  name: 'category',
  initialState: {
    categories: [],
    loading: false,
    error: null,
    selectedCategory: null,
    selectedSubCategory: null,
  },
  reducers: {
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
      state.selectedSubCategory = null;
    },
    setSelectedSubCategory: (state, action) => {
      state.selectedSubCategory = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload;
      })
      .addCase(fetchAllCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export const { setSelectedCategory, setSelectedSubCategory } = categorySlice.actions;
export default categorySlice.reducer;
