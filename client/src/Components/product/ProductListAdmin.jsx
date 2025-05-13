import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllProducts } from '../../redux/slices/productSlice';
import {
  Box, Button, TableContainer, Paper, Table, TableHead,
  TableRow, TableBody, TableCell, CircularProgress, Typography
} from '@mui/material';

import ProductUpdateModal from './ProductUpdateModal';
import { updateProduct } from '../../redux/slices/productSlice';


const ProductListAdmin = () => {
  const dispatch = useDispatch();
  const { products = [], loading, error } = useSelector((state) => state.product || {});
  const [editProduct, setEditProduct] = useState(null);

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  const handleUpdate = (id, updates) => {
    dispatch(updateProduct({ id, updates }));
  };

  if (loading) return <CircularProgress />;
  if (error) return <Typography color="error">{error}</Typography>;

  return (
    <Box p={2}>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              {[ 'No.', 'Image', 'Name', 'Colors', 'Size', 'Price', 'Category', 'SubCategory', 'Brand', 'Stock', 'Rating', 'Actions'].map((header) => (
                <TableCell key={header}>{header}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product, index) => (
              <React.Fragment key={product._id}>
                <TableRow >
                  <TableCell>{index +1}</TableCell>
                  <TableCell>
                    <img src={product.image} alt={product.name} width={50} />
                  </TableCell>
                  <TableCell>{product.name}</TableCell>
                  {/* <TableCell>{product.desc}</TableCell> */}
                  <TableCell>{product.colors?.join(', ')}</TableCell>
                  <TableCell>{product.size?.join(', ')}</TableCell>
                  <TableCell>₹{product.price}</TableCell>
                  <TableCell>{product.category}</TableCell>
                  <TableCell>{product.subCategory}</TableCell>
                  <TableCell>{product.brand}</TableCell>
                  <TableCell>{product.stock}</TableCell>
                  <TableCell>{product.rating}</TableCell>
                  <TableCell>
                    <Button variant="contained" onClick={() => setEditProduct(product)}>Update</Button>
                  </TableCell>
                </TableRow>
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <ProductUpdateModal
        open={Boolean(editProduct)}
        onClose={() => setEditProduct(null)}
        product={editProduct}
        onSubmit={handleUpdate}
      />

    </Box>
  );
};

export default ProductListAdmin;
