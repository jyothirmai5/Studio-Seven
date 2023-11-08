import React from 'react';
import { Card, CardContent, CardMedia, Typography, Container, Grid, Button, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Layout from '../Layout/Layout';
import { Store } from '../Context';
import './Favourites.css';
import EmptyPage from '../EmptyPage/EmptyPage';

const Favourites = () => {
    const navigate = useNavigate();

    return (
        <Layout>
            <Store.Consumer>
                {({ favouriteItems }) => (
                    favouriteItems.length !== 0 ?
                        <Container sx={{ margin: '50px' }}>
                            <h1 className='text-color'>Your Favourite List</h1>
                            <div className='each-card'>
                                {favouriteItems && favouriteItems.map((product, index) => (
                                    <Card>
                                        <CardMedia
                                            component="img"
                                            height="250"
                                            image={require(`../assets/${product.image[0]}`)}
                                            alt={product.name}
                                        />
                                        <CardContent>
                                            <Typography variant="h6" component="div">
                                                {product.tilte}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Price: ${product.price}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </Container> :
                        <Container sx={{ margin: '50px', height: '50vh' }}>
                            <EmptyPage></EmptyPage></Container>
                )}
            </Store.Consumer>
        </Layout>
    );
};

export default Favourites;
