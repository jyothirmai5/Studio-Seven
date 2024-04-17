import Layout from '../Layout/Layout';
import SlickCarousel from '../SlickCarousel/SlickCarousel';
import { styled } from "@mui/system";
import {
    Paper,
    Typography,
} from '@mui/material';
import { PRODUCTS_PATH } from '../Constants';
import { useNavigate } from 'react-router-dom';
import SalePc from "../assets/banner/offer_banner_pc/studioseven_offer_banner1.gif";
import "./HomePage.css";
import { Store } from '../Context';
import axios from 'axios';

const categoryCard = styled('div')(({ theme }) => ({
    height: "500px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    '&:hover': {
        cursor: "pointer",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
}));

const categoryTitle = styled('div')(({ theme }) => ({
    color: "#58869e",
    textAlign: "center",
    paddingTop: "20px",
    fontSize: "1rem"
}));

function HomePage() {
    const navigate = useNavigate();

    const redirectToProducts = async (category) => {
        const response = await axios.get(
            `${PRODUCTS_PATH}/${category.category_id}`
        )
        console.log('category products', response);
        navigate('/' + category.category_id + '/products')
    }
    return (
        <Store.Consumer>
            {({ categories, cartItems, favouriteItems }) => (
                <Layout categories={categories} cartItems={cartItems} favouriteItems={favouriteItems}>
                    <SlickCarousel />
                    <div className='main-content'>
                        <div className='hp-sale'>
                            <div className='sale-title'>
                                <h1>SALE</h1>
                            </div>
                            <div className='sale-pc'><img src={SalePc} className="sale-image" alt="sale" onClick={() => navigate('/')}></img></div>

                        </div>
                        <div className='category-title'>
                            <h1>CATEGORY</h1>
                        </div>
                        <div className="category-content">
                            {categories.map((category, index) => (
                                <div className='each-category-card' key={index} onClick={() => redirectToProducts(category)}>
                                    <Paper
                                        className={categoryCard}
                                    ></Paper>
                                    <img className='category-image' src={`data:image/jpeg;base64,${category.category_image}`}></img>
                                    <Typography variant="h4" className={categoryTitle}>
                                        {category.category_name}
                                    </Typography>

                                </div>
                            ))}
                        </div>
                    </div>
                </Layout>
            )}
        </Store.Consumer>);
}

export default HomePage;
