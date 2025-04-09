import axios from 'axios';
import {setProducts, setLoading, setError } from '../slices/productSlice';

export const fetchProducts = () => async (dispatch) => {
    try {
        dispatch(setLoading(true));
        const res = await axios.get('/api/products');
        dispatch(setProducts(res.data));
    } catch (error) {
        dispatch(setError(error.message));
    } finally {
        dispatch(setLoading(false));
    }
}