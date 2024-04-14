import React from 'react';
import { Card, CardContent, CardMedia, Typography, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Layout from '../Layout/Layout';
import { Store } from '../Context';
import './Favourites.css';
import EmptyPage from '../EmptyPage/EmptyPage';

const Favourites = () => {
    const navigate = useNavigate();

    const redirectToProduct = (categoryId, productId) => {
        navigate(`/${categoryId}/products/${productId}`)
    }

    return (
        <Store.Consumer>
            {({ favouriteItems, cartItems, categories }) => (
                <Layout cartItems={cartItems} favouriteItems={favouriteItems} categories={categories}>
                    {favouriteItems.length !== 0 ?
                        <Container sx={{ margin: '50px' }}>
                            <h1 className='text-color'>Your Favourite List</h1>
                            <div className='each-card'>
                                {favouriteItems && favouriteItems.map((product, index) => (
                                    <Card
                                        style={{ minWidth: '250px' }}
                                        onClick={() => redirectToProduct(product.category_id, product.product_id)}>
                                        <CardMedia
                                            component="img"
                                            height="250"
                                            src={`data:image/jpeg;base64,${product.product_image}`}
                                            alt={product.product_name}
                                        />
                                        <CardContent>
                                            <Typography variant="h6" component="div">
                                                {product.product_name}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Price: ${product.product_price}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </Container> :
                        <Container sx={{ margin: '50px', height: '50vh' }}>
                            <EmptyPage></EmptyPage></Container>}
                </Layout>
            )}
        </Store.Consumer>
    );
};

export default Favourites;
