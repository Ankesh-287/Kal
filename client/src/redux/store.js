import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 

import productReducer from './slices/productSlice';
import cartReducer from './slices/cartSlice';
// import orderReducer from './slices/orderSlice';
import userReducer from './slices/userSlice';
import categoryReducer from './slices/categorySlice';

const rootReducer = combineReducers({
  product: productReducer,
  cart: cartReducer,
  // order: orderReducer,
  user: userReducer,
  categories: categoryReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user'] 
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
});

export const persistor = persistStore(store);
