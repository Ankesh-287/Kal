import axios from 'axios';
import { setUserInfo, setUserLoading, setUserError } from '../slices/userSlice';

export const loginUser = (credentials) => async (dispatch) => {
  try {
    dispatch(setUserLoading(true));
    const res = await axios.post('/api/users/login', credentials);
    dispatch(setUserInfo(res.data));
  } catch (err) {
    dispatch(setUserError(err.message));
  } finally {
    dispatch(setUserLoading(false));
  }
};