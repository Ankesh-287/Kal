import { configureStore } from '@reduxjs/toolkit';
import productReducer from './slices/productSlice';
import cartReducer from './slices/cartSlice';
// import orderReducer from './slices/orderSlice';
import userReducer from './slices/userSlice';
import categoryReducer from './slices/categorySlice';

const store = configureStore({
    reducer:{
        product: productReducer,
        cart: cartReducer,
        // order: orderReducer,
        user: userReducer,
        category: categoryReducer
    }
})

export default store;