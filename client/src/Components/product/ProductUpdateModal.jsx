import React, { useState, useEffect } from 'react';
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  Grid,
} from '@mui/material';

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};

const ProductUpdateModal = ({ open, onClose, product, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    desc: '',
    price: '',
    stock: '',
    category: '',
    subCategory: '',
    brand: '',
    image: '',
    colors: '',
    size: '',
  });

  useEffect(() => {
  if (product) {
    setFormData({
      name: product.name || '',
      desc: product.desc || '',
      price: product.price || '',
      stock: product.stock || '',
      category: product.category || '',
      subCategory: product.subCategory || '',
      brand: product.brand || '',
      image: product.image || '',
      colors: Array.isArray(product.colors) ? product.colors.join(', ') : '',
      size: Array.isArray(product.size) ? product.size.join(', ') : '',
    });
  }
}, [product]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
  const updatedData = {
    ...formData,
    colors: formData.colors.split(',').map(c => c.trim()),
    size: formData.size.split(',').map(s => s.trim()),
  };
  onSubmit(product._id, updatedData);
  onClose();
  
};

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={modalStyle}>
        <Typography variant="h6" mb={2}>
          Update Product
        </Typography>
        <Grid container spacing={2}>
          {Object.entries(formData).map(([key, value]) => (
            <Grid item xs={6} key={key}>
              <TextField
                fullWidth
                label={key.charAt(0).toUpperCase() + key.slice(1)}
                name={key}
                value={value}
                onChange={handleChange}
              />
            </Grid>
          ))}
        </Grid>
        <Box mt={3} display="flex" justifyContent="flex-end">
          <Button onClick={onClose} sx={{ mr: 2 }}>
            Cancel
          </Button>
          <Button variant="contained" onClick={handleSubmit}>
            Save
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default ProductUpdateModal;
