import React, { useState } from 'react';
import Layout from '../Layout/Layout';
import "./Cart.css";
import { Box, Button, Grid, Container } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { CART_PATH } from '../Constants';
import axios from 'axios';
import { Store } from '../Context';
import { useNavigate } from 'react-router-dom';
// importing thankyou popup
import ThankYouPopup from '../ThankYouPopup/ThankYouPopup';
import EmptyPage from '../EmptyPage/EmptyPage';

function Cart() {
    const [showThankYouPopup, setShowThankYouPopup] = useState(false);
    const navigate = useNavigate();

    const handleCheckout = () => {
        setShowThankYouPopup(true);
        // Logic for handling checkout
        // Show the thank you popup after successful checkout
    };

    const callClearCart = (fetchCart, setCartItems) => {
        const clearCart = async (fetchCart) => {
            const response = await axios.delete(
                `${CART_PATH}/clear`
            );
            if (response) {
                fetchCart(setCartItems);
            }
        }
        clearCart(fetchCart);
        navigate('/');
    }

    const handleCloseThankYouPopup = () => {
        setShowThankYouPopup(false);
    };

    const redirectToProduct = (categoryId, productId) => {
        navigate(`/${categoryId}/products/${productId}`)
    }

    return (
        <Store.Consumer>
            {({ cartItems, categories, setCartItems, totalPrice, favouriteItems, fetchCart }) => (
                <Layout categories={categories} cartItems={cartItems} favouriteItems={favouriteItems}>
                    {cartItems.length !== 0 ?
                        <div style={{ margin: '50px' }}>
                            <h1 className='text-color'>Your Shopping Basket</h1>
                            <hr style={{ borderWidth: "0.5px" }} />
                            <h3 className='text-color'>{cartItems.length} Products</h3>
                            <Grid container spacing={3}>
                                <Grid item sm={7} className='box-container'>
                                    {cartItems.map((product) => (
                                        <Box className="box" onClick={() => redirectToProduct(product.category_id, product.product_id)}>
                                            <Grid container className='grid-container'>
                                                <Grid item xs={3}>
                                                    <img width="100px"
                                                        src={`data:image/jpeg;base64,${product.product_image}`}
                                                    ></img>
                                                </Grid>
                                                <Grid item xs={9} sx={{ pl: 6 }}>
                                                    <div className='product-name'>
                                                        {product.product_name}
                                                    </div>

                                                    <div className='product-name'>${product.product_price}</div>
                                                    <div className='quantity-div'>
                                                        <div style={{ display: 'flex' }}><CalendarMonthIcon fontSize='x-small' sx={{ mt: "2px", mr: 1 }} /><div>Choose delivery date at checkout</div></div>
                                                        <div>Quantity: 1</div>
                                                    </div>
                                                </Grid>
                                            </Grid>
                                        </Box>))
                                    }
                                </Grid>
                                <Grid item sm={5}>
                                    <Box className="box">
                                        <Box className="checkout-box">
                                            <div className='grid-container checkout-grid-items'>
                                                <div>Total MRP</div>
                                                <div><b>${totalPrice}</b></div>
                                            </div>
                                            <div className='grid-container checkout-grid-items'>
                                                <div>Offer Discount</div>
                                                <div><b>-$90</b></div>
                                            </div>
                                            <div className='grid-container checkout-grid-items'>
                                                <div>Furniture & Large Items Shipping</div>
                                                <div><b>$90</b></div>
                                            </div>
                                        </Box>
                                        <div style={{ padding: '16px' }} className='grid-container checkout-grid-items'>
                                            <b>Total</b>
                                            <b>${totalPrice}</b>
                                        </div>
                                        <Button className='checkout-btn' onClick={() => handleCheckout(fetchCart, setCartItems)}>Checkout</Button>
                                    </Box>
                                </Grid>
                            </Grid>
                            <ThankYouPopup open={showThankYouPopup} onClose={handleCloseThankYouPopup}
                                clearCart={() => callClearCart(fetchCart, setCartItems)} />
                        </div> :
                        <Container sx={{ padding: '40px', height: '50vh' }}>
                            <EmptyPage></EmptyPage></Container>}
                </Layout >
            )}
        </Store.Consumer>
    );
}

export default Cart;