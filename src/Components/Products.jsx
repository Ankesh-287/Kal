import React, { useState } from 'react'
import { Grid, Box } from '@mui/material'
import Product from './Product.jsx'
import Heading from './Heading.jsx'


function Products() {
    const [products, setProducts] = useState([
        { id: 1, type: "MEN", name: "Product 1", price: 10, image:'https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-09-a-400x488.jpg' },
        { id: 2, type: "WOMEN", name: "Product 2", price: 20, image:'https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-06-a-400x488.jpg' },
        { id: 3, type: "MEN", name: "Product 3", price: 30, image:'https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-10-a-400x488.jpg' },
        { id: 4, type: "WOMEN", name: "Product 4", price: 50, image: 'https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-08-a-400x488.jpg'},

    ])
    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    width: {md:'100%', lg:"80%"},
                }}
            >
                
                <Grid container spacing={3} justifyContent="center"
                    sx={{
                        width: '100%',
                        m: 'auto',
                    }}
                >
                    <Grid item xs={12} lg={12} >
                        <Heading title="Popular T-Shirts" />
                    </Grid>
                    {products.map((product) => (
                        <Grid item key={product.id} xs={6} sm={4} md={3} lg={3} >
                            <Product image={product.image} type={product.type} name={product.name} price={product.price} />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </>
    )
}

export default Products
