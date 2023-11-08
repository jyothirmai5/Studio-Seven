import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import { categories } from '../Constants';
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
  const { category, id } = useParams();
  const navigate = useNavigate();
  const [productDetails, setProductDetails] = useState(undefined);
  const [productImages, setProductImages] = useState([]);
  const [currentImage, setCurrentImage] = useState('');
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
    categories.map((item) => {
      if (item.title === category) {
        item.product.map((product) => {
          if (product.id === id) {
            console.log(product.image)
            setProductDetails(product);
            setProductImages(product.image);
            setCurrentImage(product.image[0]);
          }
        })

      }
    })
  }, []);
  const changeImage = (image) => {
    setCurrentImage(image);
  }

  return (
    productImages &&
    currentImage &&
    productDetails && (
      <Layout>
        <Store.Consumer>
          {({ setCartItems, setFavouriteItems, favouriteItems }) => (
            <div className="small-container single-product">
              <div className="row">
                <IconButton
                  sx={{ mb: 2, color: "#58869e" }}
                  onClick={() => navigate("/")}>
                  <ArrowBackIcon />
                </IconButton>
                <div className="col-2">
                  <img
                    src={require(`../assets/${currentImage}`)}
                    width="100%"
                  ></img>
                  <div className="small-img-row">
                    <div className="small-img-col">
                      <img
                        src={require(`../assets/${productImages[0]}`)}
                        onClick={() => changeImage(productImages[0])}
                        width="100%"
                      ></img>
                      <img
                        src={require(`../assets/${productImages[1]}`)}
                        onClick={() => changeImage(productImages[1])}
                        width="100%"
                      ></img>
                    </div>
                  </div>
                </div>
                <div className="col-2">
                  <ul className="breadcrumbs">
                    <li className="breadcrumbs-items">
                      <a href="http://localhost:3000/" className="breadcrumbs-link">
                        Home
                      </a>
                    </li>
                    <li className="breadcrumbs-items">
                      <a
                        href="http://localhost:3000/Decor/products"
                        className="breadcrumbs-link">
                        Category
                      </a>
                    </li>
                    <li className="breadcrumbs-items">
                      <a href="" className="breadcrumbs-link breadcrumbs-link-active">
                        {category && <p>{category}</p>}
                      </a>
                    </li>
                  </ul>
                  <h1 className="ProductTittle">{productDetails.tilte}</h1>
                  <h4>${productDetails.price}</h4>
                  <input type="number" min={1} max={5} defaultValue={1}></input>
                  <div className="section-text">
                    <a className="btn" onClick={() => {
                      setCartItems(data => [...data, productDetails]);
                      handleClick({ vertical: 'top', horizontal: 'right' });
                    }}>
                      Add To Cart
                    </a>
                    <Snackbar anchorOrigin={{ vertical, horizontal }}
                      open={open}
                      onClose={handleClose}
                      message="I love snacks"
                      key={vertical + horizontal}>
                      <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                        Added to cart!
                      </Alert>
                    </Snackbar>
                    <a className={favouriteItems.some(item => JSON.stringify(item) === JSON.stringify(productDetails)) ? "btn-fav added-favourite" : "btn-fav"}
                      onClick={() => {
                        if (favouriteItems.some(item => JSON.stringify(item) === JSON.stringify(productDetails))) {
                          const updatedArray = favouriteItems.filter(item => item.id !== productDetails.id);
                          setFavouriteItems(updatedArray);
                        } else {
                          setFavouriteItems(data => [...data, productDetails])
                        }
                      }
                      }>
                      &#10084;
                    </a>
                    <h3>Product Description</h3>
                    <p className="ProductDescription">
                      {productDetails.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </Store.Consumer>
      </Layout >
    )
  );
};

export default ProductDetails;
