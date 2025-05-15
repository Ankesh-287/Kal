import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import API from '../../api/axios.js'

export const registerUser = createAsyncThunk('users/register', async (formData, { rejectWithValue }) => {
  try {
    const res = await API.post('/users/register', formData, { withCredentials: true });
    return res.data.user;
  } catch (error) {
    return rejectWithValue(error.response?.data?.message || 'Registration failed');
  }
});

export const loginUser = createAsyncThunk('users/login', async (formData, { rejectWithValue }) => {
  try {
    const res = await API.post('/users/login', formData, { withCredentials: true });
    return res.data.user;
  } catch (err) {
    return rejectWithValue(err.response?.data?.message || 'Login failed');
  }
});

export const logoutUser = createAsyncThunk('users/logout', async () => {
  await API.post('/users/logout')
});


export const fetchUser = createAsyncThunk('users/fetchUser', async (_, { rejectWithValue }) => {
  try {
    const res = await API.get('/users/profile', { withCredentials: true });
    return res.data.user;
  } catch (error) {
    return rejectWithValue(null);
  }
});



const userSlice = createSlice({
  name: 'user',
  initialState: {
    currentUser: null,
    loading: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.currentUser = null;
      localStorage.removeItem('user');
    },
    setUser: (state, action) => {
      state.currentUser = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.currentUser = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.currentUser = action.payload;
        state.isAuthenticated = true;
        localStorage.setItem('user', JSON.stringify(action.payload.user));
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.currentUser = null;
        state.isAuthenticated = false;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.currentUser = action.payload;
      });
  }
});

export const { logout, setUser } = userSlice.actions;
export default userSlice.reducer;
