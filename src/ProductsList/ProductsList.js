import React, { useEffect, useState } from "react";
import axios from 'axios';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Container,
  Grid,
  Button,
  IconButton,
} from "@mui/material";
import { PRODUCTS_BY_CATEGORY, PRODUCTS_BY_SEARCH } from "../Constants";
import { useParams, useNavigate } from "react-router-dom";
import Layout from "../Layout/Layout";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "./ProductsList.css";
import { Store } from '../Context';

const ProductList = () => {
  const { categoryId, searchText } = useParams();
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const redirectToProductDetails = (product) => {
    navigate("/" + product.category_id + "/products/" + product.product_id);
  };

  useEffect(() => {
    if (categoryId) {
      const fetchProducts = (async () => {
        const response = await axios.get(
          `${PRODUCTS_BY_CATEGORY}/${categoryId}`
        )
        if (response.data) {
          setProducts(response.data);
        }
      });
      fetchProducts();
    } else if (searchText) {
      const fetchProductsUsingSearchText = (async () => {
        const response = await axios.get(
          `${PRODUCTS_BY_SEARCH}?q=${searchText}`
        )
        if (response.data) {
          setProducts(response.data);
        }
      });
      fetchProductsUsingSearchText();
    }
  }, [categoryId, searchText]);

  return (
    <Store.Consumer>
      {({ categories, cartItems, favouriteItems }) => (
        <Layout categories={categories} cartItems={cartItems} favouriteItems={favouriteItems}>
          <Container sx={{ padding: "40px" }}>
            <IconButton
              sx={{ mb: 2, color: "#58869e" }}
              onClick={() => navigate("/")}
            >
              <ArrowBackIcon />
            </IconButton>
            <Grid container spacing={2}>
              {products &&
                products.map((product, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <Card>
                      <CardMedia
                        component="img"
                        height="330"
                        src={`data:image/jpeg;base64,${product.product_image}`}
                        alt={product.product_name}
                      />
                      <CardContent variant="outline" className="my-card">
                        <Typography variant="h6" component="div">
                          {product.product_name}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            fontSize: "23px",
                            fontWeight: "bold",
                            padding: "8px",
                            color: "#58869e",
                            fontFamily: "Poppins",
                          }}
                          color="text.secondary"
                        >
                          Price: ${product.product_price}
                        </Typography>
                        <Button
                          variant="contained"
                          className="my-button"
                          onClick={() => redirectToProductDetails(product)}
                        >
                          Show more
                        </Button>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
            </Grid>
          </Container>
        </Layout>
      )}
    </Store.Consumer>);
};

export default ProductList;
