import React, { useState } from 'react';
import { Box, CardMedia, Grid } from '@mui/material';
import { Search } from '@mui/icons-material';

function ProductFrame({ productImageRef, image, name, images = [] }) {
    const [mainImage, setMainImage] = useState(image || images[0]);

    return (
        <Grid item xs={12} md={6}>
            {/* Main Image Display */}
            <Box sx={{ position: 'relative' }}>
                <CardMedia
                    component="img"
                    image={mainImage}
                    alt={name}
                    sx={{ width: '100%', borderRadius: 2 }}
                    ref={productImageRef}
                />
                <Search
                    sx={{
                        position: 'absolute',
                        top: 12,
                        right: 6,
                        width: 40,
                        height: 40,
                        p: 1,
                        backgroundColor: 'white',
                        color: 'black',
                        borderRadius: '50%',
                    }}
                />
            </Box>

            {/* Thumbnails */}
            <Grid container spacing={2} sx={{ py: 2 }}>
                {images.map((img, idx) => (
                    <Grid item xs={4} key={idx}>
                        <Box
                            sx={{
                                position: 'relative',
                                cursor: 'pointer',
                                border: mainImage === img ? '2px solid black' : '1px solid #ccc',
                                borderRadius: 1,
                                overflow: 'hidden',
                            }}
                            onClick={() => setMainImage(img)}
                        >
                            <CardMedia
                                component="img"
                                image={img}
                                alt={`${name} - ${idx}`}
                                sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Grid>
    );
}

export default ProductFrame;
