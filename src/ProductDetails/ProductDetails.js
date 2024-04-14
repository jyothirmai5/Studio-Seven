import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { PRODUCTS_PATH, CATEGORIES_PATH, FAVORITES_PATH, CART_PATH } from '../Constants';
import "./ProductDetails.css";
import Layout from '../Layout/Layout';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { IconButton } from "@mui/material";
import { Store } from '../Context';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const ProductDetails = () => {
  const { categoryId, productId } = useParams();
  const navigate = useNavigate();
  const [productDetails, setProductDetails] = useState(undefined);
  const [category, setCategory] = useState(undefined);
  const [state, setState] = React.useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });
  const { vertical, horizontal, open } = state;

  const handleClick = (newState) => {
    setState({ ...newState, open: true });
  };
  const handleClose = () => {
    setState({ ...state, open: false });
  };
  useEffect(() => {
    fetchProductDetails();
  }, [productId]);

  const fetchProductDetails = (async () => {
    const response = await axios.get(
      `${PRODUCTS_PATH}/${productId}`
    )
    if (response.data) {
      setProductDetails(response.data);
    }
    const categoryResponse = await axios.get(
      `${CATEGORIES_PATH}/${categoryId}`
    )
    if (categoryResponse) {
      setCategory(categoryResponse.data);
    }
  });

  const addToFavorites = async (productId, isFavorite, setFavouriteItems, fetchFavorites) => {
    const response = await axios.post(
      `${FAVORITES_PATH}`, {
      productId,
      isFavorite
    }
    );
    if (response) {
      fetchProductDetails();
      fetchFavorites(setFavouriteItems);
    }
  }

  const addToCart = async (productId, isInCart, setCartItems, fetchCart) => {
    const response = await axios.post(
      `${CART_PATH}`, {
      productId,
      isInCart
    }
    );
    if (response) {
      fetchProductDetails();
      fetchCart(setCartItems);
    }
  }

  const onFavorite = (productDetails, favouriteItems, setFavouriteItems, fetchFavorites) => {
    if (productDetails.is_favorite) {
      addToFavorites(productDetails.product_id, false, setFavouriteItems, fetchFavorites);
      const updatedArray = favouriteItems.filter(item => item.id !== productDetails.product_id);
      setFavouriteItems(updatedArray);
    } else {
      addToFavorites(productDetails.product_id, true, setFavouriteItems, fetchFavorites);
      setFavouriteItems(data => [...data, productDetails]);
    }
  }

  const onAddCart = (productDetails, cartItems, setCartItems, fetchCart) => {
    if (productDetails.is_in_cart) {
      addToCart(productDetails.product_id, false, setCartItems, fetchCart);
      const updatedArray = cartItems.filter(item => item.id !== productDetails.product_id);
      setCartItems(updatedArray);
    } else {
      addToCart(productDetails.product_id, true, setCartItems, fetchCart);
      setCartItems(data => [...data, productDetails]);
    }
  }

  return (
    productDetails && category && (
      <Store.Consumer>
        {({ setCartItems, setFavouriteItems, favouriteItems, cartItems, categories, fetchFavorites, fetchCart }) => (
          <Layout cartItems={cartItems} favouriteItems={favouriteItems} categories={categories}>
            <div className="small-container single-product">
              <div style={{ display: 'flex' }}>
                <IconButton
                  sx={{ mb: 2, color: "#58869e", margin: 'auto 0px' }}
                  onClick={() => navigate("/")}>
                  <ArrowBackIcon />
                </IconButton>
                <ul className="breadcrumbs">
                  <li className="breadcrumbs-items">
                    <a href="/" className="breadcrumbs-link">
                      Home
                    </a>
                  </li>
                  <li className="breadcrumbs-items">
                    <a
                      href={`/${category.category_id}/products`}
                      className="breadcrumbs-link">
                      Category
                    </a>
                  </li>
                  <li className="breadcrumbs-items">
                    <a href="" className="breadcrumbs-link breadcrumbs-link-active">
                      {category && <p>{category.category_name}</p>}
                    </a>
                  </li>
                </ul>
              </div>
              <div className="row">
                <div className="col-2">
                  <img
                    src={`data:image/jpeg;base64,${productDetails.product_image}`}
                    width="100%"
                  ></img>
                  <div className="small-img-row">
                    <div className="small-img-col">
                      <img
                        src={`data:image/jpeg;base64,${productDetails.product_image}`}
                        width="100%"
                      ></img>
                    </div>
                  </div>
                </div>
                <div className="col-2">
                  <h1 className="ProductTittle">{productDetails.product_name}</h1>
                  <h4>${productDetails.product_price}</h4>
                  <input type="number" min={1} max={5} defaultValue={1}></input>
                  <div className="section-text">
                    <a className="btn" onClick={() => {
                      onAddCart(productDetails, cartItems, setCartItems, fetchCart);
                      handleClick({ vertical: 'bottom', horizontal: 'right' });
                    }}>
                      {productDetails.is_in_cart ? "Remove from Cart" : "Add To Cart"}
                    </a>
                    <Snackbar anchorOrigin={{ vertical, horizontal }}
                      open={open}
                      onClose={handleClose}
                      message="I love snacks"
                      key={vertical + horizontal}>
                      <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                        {productDetails.is_in_cart ? "Added to Cart" : "Removed from Cart"}
                      </Alert>
                    </Snackbar>
                    <a className={productDetails.is_favorite ? "btn-fav added-favourite" : "btn-fav"}
                      onClick={() => {
                        onFavorite(productDetails, favouriteItems, setFavouriteItems, fetchFavorites)
                      }
                      }>
                      &#10084;
                    </a>
                    <h3>Product Description</h3>
                    <p className="ProductDescription">
                      {productDetails.product_description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Layout>
        )}
      </Store.Consumer>)
  )
};

export default ProductDetails;
