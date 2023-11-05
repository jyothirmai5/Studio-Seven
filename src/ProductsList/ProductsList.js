import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardMedia, Typography, Container, Grid, Button, IconButton } from '@mui/material';
import { categories } from '../Constants';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '../Layout/Layout';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const ProductList = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const redirectToProductDetails = (id) => {
    navigate('/' + category + '/products/' + id);
  }
  useEffect(() => {
    categories.map((item) => {
      if (item.title === category) {
        setProducts(item.product)
      }
    })
  }, [category]);

  return (
    <Layout>
      <Container sx={{ padding: '40px' }}>
        <IconButton sx={{ mb: 2, color: '#58869e' }} onClick={() => navigate('/')}>
          <ArrowBackIcon />
        </IconButton>
        <Grid container spacing={2}>
          {products && products.map((product, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card>
                <CardMedia
                  component="img"
                  height="250"
                  image={require(`../assets/${product.image[0]}`)}
                  alt={product.name}
                />
                <CardContent>
                  <Typography variant="h6" component="div">
                    {product.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Price: ${product.price}
                  </Typography>
                  <Button variant="contained" color='primary' onClick={() => redirectToProductDetails(product.id)}>
                    Show more
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Layout>
  );
};

export default ProductList;
