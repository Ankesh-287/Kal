import axios from 'axios';
import { setOrders, setOrderLoading, setOrderError } from '../slices/orderSlice';

export const fetchOrders = () => async (dispatch) => {
  try {
    dispatch(setOrderLoading(true));
    const res = await axios.get('/api/orders');
    dispatch(setOrders(res.data));
  } catch (err) {
    dispatch(setOrderError(err.message));
  } finally {
    dispatch(setOrderLoading(false));
  }
};