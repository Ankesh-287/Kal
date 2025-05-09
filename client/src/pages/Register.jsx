import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../redux/slices/userSlice';
import { Container, TextField, Button, Box, Typography, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [form, setForm] = useState({ firstname: '', lastname: '', phone: '', email: '', password: '', cpassword: '' });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      if (form.password !== form.cpassword) {
        form.password= "";
        form.cpassword= "";
        alert("Passwords do not match");
        return;
      }

      const result = await dispatch(registerUser(form));
      if (registerUser.fulfilled.match(result)) {
        navigate('/login');
      } else {
        console.log('Register failed', result.payload || 'Unknown error');
      }
    } catch (err) {
      console.log('Register failed', err); 
    }
  };

  
  
  return (
    <Container maxWidth="sm" sx={{ height: '100vh' }}>
      <Paper elevation={3} sx={{ padding: 4, mt: 8 }}>
        <Typography variant="h5" fontWeight={600} textAlign="center" gutterBottom>
          Create Your Account
        </Typography>

        <Box component="form" onSubmit={handleSubmit} noValidate autoComplete="off">
          <TextField
            autoComplete="off"
            fullWidth
            size='small'
            label="First Name"
            variant="outlined"
            margin="normal"
            value={form.firstname}
            onChange={(e) => setForm({ ...form, firstname: e.target.value })}
          />
          <TextField
            autoComplete="off"
            fullWidth
            size='small'
            label="Last Name"
            variant="outlined"
            margin="normal"
            value={form.lastname}
            onChange={(e) => setForm({ ...form, lastname: e.target.value })}
          />
          <TextField
            autoComplete="off"
            fullWidth
            size='small'
            label="Phone"
            variant="outlined"
            margin="normal"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />
          <TextField
            autoComplete="off"
            fullWidth
            size='small'
            label="Email"
            variant="outlined"
            type="email"
            margin="normal"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <TextField
            autoComplete="off"
            fullWidth
            size='small'
            label="Password"
            variant="outlined"
            type="password"
            margin="normal"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
          <TextField
            autoComplete="off"
            fullWidth
            size='small'
            label="Confirm Password"
            variant="outlined"
            type="password"
            margin="normal"
            value={form.cpassword}
            onChange={(e) => setForm({ ...form, cpassword: e.target.value })}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, py: 1.5 }}
          >
            Register
          </Button>

          <Typography variant="body1" color="initial" sx={{ p: 4 }}> Already have an account ?<span onClick={() => navigate('/login')}> login here </span> </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default Register;
