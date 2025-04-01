import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Button, Card, CardContent, CardMedia, Grid, Pagination, Typography } from '@mui/material';


const ProductGrid = ({products, productsPerPage, currentPage, setCurrentPage}) => {
    const navigate = useNavigate();
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  return (
    <>
      <Grid container spacing={3}>
        {currentProducts.length > 0 ? (
            currentProducts.map((product) => (
                <Grid item xs={12} sm={6} lg={4} key={product.id}>
                    <Card sx={{maxWidth: 300, mx:"auto", textAlign:'center'}}>
                        <CardMedia component="img" height="370" image={product.image} alt={product.name} />
                        <CardContent>
                            <Typography variant='h6' sx={{fontWeight:'bold'}}> {product.name}</Typography>
                            <Typography variant='body2' color='text.secondary' sx={{mb:1}}> Rs {product.price}</Typography>
                            <Button variant='contained'
                            sx={{backgroundColor: 'black', color:'white', "&:hover":{backgroundColor:'#333'}
                        }} onClick={() => navigate(`/product-detail/${product.id}`)}
                            > View Details</Button>
                        </CardContent>
                    </Card>
                </Grid>
            ))
        ):(
            <Typography variant="body1" sx={{ mt: 2 }}>No products found in this subcategory.</Typography>
        )}
      </Grid>
      {products.length > productsPerPage && (
        <Box sx={{ display: 'flex', justifyContent:'center', mt: 3 }}>
            <Pagination 
            count={Math.ceil(products.length / productsPerPage)}
            page={currentPage}
            onChange={(event, value) => setCurrentPage(value)} />
        </Box>
      )}
    </>
  )
}

export default ProductGrid;
