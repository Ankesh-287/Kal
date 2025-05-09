import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../redux/slices/userSlice';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Paper, TextField, Typography, Container, Alert, Snackbar } from '@mui/material';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success',
  });
  const showSnackbar = (message, severity) => {
    setSnackbar({ open: true, message, severity });
  };
  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resultAction = await dispatch(loginUser(formData));
  
      if (loginUser.fulfilled.match(resultAction)) {
        showSnackbar('Login successful!', 'success');
        navigate('/');
      } else {
        showSnackbar(resultAction.payload || 'Login failed', 'error');
      }
    } catch (err) {
      showSnackbar('Something went wrong', 'error');
    }
  };

  return (
    <Container maxWidth="sm" sx={{ height: '100vh' }}>
      <Paper elevation={3} sx={{ padding: 4, mt: 8 }}>
        <Typography variant="h5" fontWeight={600} textAlign="center" gutterBottom>
          Login
        </Typography>

        <Box component="form" onSubmit={handleSubmit} noValidate autoComplete="off">
          <TextField
            fullWidth
            size="small"
            name="email"
            value={formData.email}
            label="Email"
            variant="outlined"
            type="email"
            margin="normal"
            onChange={handleChange}
          />
          <TextField
            fullWidth
            size="small"
            name="password"
            value={formData.password}
            label="Password"
            variant="outlined"
            type="password"
            margin="normal"
            onChange={handleChange}
          />

          <Button
            fullWidth
            type="submit"
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
          >
            Submit
          </Button>

          <Typography variant="body1" sx={{ mt: 2 }}>
            Don’t have an account?{' '}
            <span
              style={{ color: 'blue', cursor: 'pointer' }}
              onClick={() => navigate('/register')}
            >
              Register here
            </span>
          </Typography>
        </Box>
      </Paper>
      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbar.severity} sx={{ width: '100%' }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Login;
