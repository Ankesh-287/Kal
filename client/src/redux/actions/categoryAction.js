import  axios from 'axios';
import  {setCategories, setCategoryLoading, setCategoryError} from '../slices/categorySlice';

export const fetchCategories = () => async(dispatch) => {
    try {
        dispatch(setCategoryLoading(true));
        const res = await axios.get('/api/categories')
        dispatch(setCategories(res.data));
    } catch (error) {
        dispatch(setCategoryError(err.message));
    } finally {
        dispatch(setCategoryLoading(false));
    }
}