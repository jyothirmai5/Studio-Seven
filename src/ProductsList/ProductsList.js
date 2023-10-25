import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardMedia, Typography, Container, Grid, Button } from '@mui/material';
import { categories } from '../Constants';
import { useParams } from 'react-router-dom';

const ProductList = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    categories.map((item) => {
      if (item.title === category) {
        setProducts(item.product)
      }
    })
  }, []);

  return (
    <Container>
      <Grid container spacing={2}>
        {products && products.map((product, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
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
