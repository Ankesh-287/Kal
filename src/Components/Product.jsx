import { Card, CardActionArea, CardMedia, CardContent, Typography, Grid, IconButton} from '@mui/material';
import React, { useState } from 'react';

const colors = [
  { name: "Black", code: "#000000" },
  { name: "Blue", code: "#0000FF" },
  { name: "Red", code: "#FF0000" }
];

const sizes = [ 'XS', "S", "M", "L", "XL", ]

const Product = ({image, type, name, price}) => {
  const [selectedColor, setSelectedColor] = useState(colors[0].code);

  return (
    <Card sx={{ 
        width:'100%',
        minWidth: "150px" 
        }}>
      <CardActionArea>
        <CardMedia
          component="img"
          width="100%"
          image={image}
          alt="Product Image"
        />
        <CardContent>
          <Typography variant="body1" sx={{ color: 'grey.500', fontSize: '11px', }}>
            {type}
          </Typography>
          <Typography gutterBottom variant="h6" component="div"
            sx={{
              fontWeight: 'bold',
              fontSize: '20px',
            }}
          >
            {name}
          </Typography>
          <Typography variant="body2"
            sx={{
              color: 'grey.600',
              fontWeight: 'bold',
              fontSize: '12px',
            }}
          >
            ${price}
          </Typography>

          <Grid container spacing={2} sx={{ mt: 1 }}>
            {colors.map((color) => (
              <Grid item key={color.name}>
                <IconButton
                  sx={{
                    backgroundColor: color.code,
                    width: 24,
                    height: 24,
                    p: 1,
                    borderRadius: 0,
                    border: selectedColor === color.code ? "2px solid white" : "none",
                    '&:hover': {
                      backgroundColor: color.code,
                      opacity: 0.8,
                      border: "2px solid black"
                    }
                  }}
                  onClick={() => setSelectedColor(color.code)}
                />
              </Grid>
            ))}
          </Grid>

          <Grid container spacing={2} sx={{ mt: 1 }}>
            {sizes.map((size) => (
              <Grid item key={size}>
                <IconButton
                  sx={{
                    width: 24,
                    height: 24,
                    border: "1px solid",
                    borderColor:'grey.400',
                    p: 1,
                    fontSize:'10px',
                    borderRadius: '2px',
                  }}
                > { size} </IconButton>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default Product;
