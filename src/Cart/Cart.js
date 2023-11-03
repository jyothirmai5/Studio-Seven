import React, { useState } from 'react';
import Layout from '../Layout/Layout';
import "./Cart.css";
import { Box, Button, Grid } from '@mui/material';
import logo from "../assets/studioseven_logo.svg";
import { categories } from '../Constants';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

function Cart() {

    return (
        <Layout>
            <div style={{ margin: '50px' }}>
                <h1 className='text-color'>Your Shopping Basket</h1>
                <hr style={{ borderWidth: "0.5px" }} />
                <h3 className='text-color'>1 Product</h3>
                <Grid container spacing={3}>
                    <Grid item sm={7} className='box-container'>
                        {categories[0].product.map((product) => (
                            <Box className="box">
                                <Grid container className='grid-container'>
                                    <Grid item xs={3}>
                                        <img width="100px" src={require(`../assets/Decor/D1/image1.jpeg`)}></img>
                                    </Grid>
                                    <Grid item xs={9} sx={{ pl: 6 }}>
                                        <div className='product-name'>
                                            Maya Arial Metal Cocktail Table - Purple
                                        </div>

                                        <div className='product-name'>$90</div>
                                        <div className='quantity-div'>
                                            <div style={{ display: 'flex' }}><CalendarMonthIcon fontSize='x-small' sx={{ mt: "2px", mr: 1 }} /><div>Choose delivery date at checkout</div></div>
                                            <div>Quantity: 1</div>
                                        </div>
                                    </Grid>
                                </Grid>
                            </Box>))}
                    </Grid>
                    <Grid item sm={5}>
                        <Box className="box">
                            <Box className="checkout-box">
                                <div className='grid-container checkout-grid-items'>
                                    <div>Total MRP</div>
                                    <div><b>$90</b></div>
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
                                <b>$90</b>
                            </div>
                            <Button className='checkout-btn'>Checkout</Button>
                        </Box>
                    </Grid>
                </Grid>
            </div>
        </Layout >);
}

export default Cart;