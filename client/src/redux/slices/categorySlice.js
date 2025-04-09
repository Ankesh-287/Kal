import { createSlice } from '@reduxjs/toolkit';

const CategorySlice = createSlice ({
    name: 'category',
    initialState: {
        categories: [],
        loading: false,
        error: null,
    }, 
    reducers: {
        getCategories: (state, action) => {
            state.categories = action.payload;
        },
        setCategoryLoading: (state, action) => {
            state.loading = action.payload;
        },
        setCategoryError: (state, action) => {
            state.error = action.payload;
        },
    },
});

export const { setCategories, setCategoryLoading, setCategoryError} = CategorySlice.actions;
export default CategorySlice.reducer;