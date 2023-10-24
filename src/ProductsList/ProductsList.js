import React from 'react';
import { Card, CardContent, CardMedia, Typography, Container, Grid,Button } from '@mui/material';

let products=[
    {
      title:'Minimalist Kids Bed - Twin size',
      image:'',
      description:'',
      price:'1075$'
    },
    {
      title:'Minimalist Kids Bed - Twin size',
      image:'',
      description:'',
      price:'1075$'
    },
    {
      title:'Minimalist Kids Bed - Twin size',
      image:'',
      description:'',
      price:'1075$'
    },
    {
      title:'Minimalist Kids Bed - Twin size',
      image:'',
      description:'',
      price:'1075$'
    },
    {
      title:'Minimalist Kids Bed - Twin size',
      image:'',
      description:'',
      price:'1075$'
    }
  ]
const ProductList = () => {
  return (
    <Container>
    <Grid container spacing={2}>
      {products.map((product) => (
        <Grid item xs={12} sm={6} md={4} key={product.id}>
          <Card>
            <CardMedia
              component="img"
              height="250"
              image={product.image}
              alt={product.name}
            />
            <CardContent>
              <Typography variant="h6" component="div">
                {product.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Price: ${product.price}
              </Typography>
              <Button variant="contained" color="primary">
                Add to Cart
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Container>
  );
};

export default ProductList;
