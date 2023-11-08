import Layout from '../Layout/Layout';
import SlickCarousel from '../SlickCarousel/SlickCarousel';
import { makeStyles } from '@mui/styles';
import {
    Paper,
    Grid,
    Typography,
} from '@mui/material';
import { categories } from '../Constants';
import { useNavigate } from 'react-router-dom';
import SalePc from "../assets/banner/offer_banner_pc/studioseven_offer_banner1.gif";
import "./HomePage.css";

const useStyles = makeStyles((theme) => ({
    categoryCard: {
        height: "500px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        "&:hover": {
            cursor: "pointer",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
        },
    },
    categoryTitle: {
        color: "#58869e",
        textAlign: "center",
        paddingTop: "20px",
        fontSize:"1rem"
    },


}));
function HomePage() {
    const classes = useStyles();
    const navigate = useNavigate();
    const redirectToProducts = (title) => {
        navigate('/' + title + '/products')
    }
    return (<Layout>
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
            <div class="category-content">
                <Grid container spacing={2}>
                    {categories.map((category, index) => (
                        <Grid item xs={12} sm={6} md={3} key={index} onClick={() => redirectToProducts(category.title)}>
                            <Paper
                                className={classes.categoryCard}
                                style={{ backgroundImage: `url(${category.imageUrl})` }}
                            ></Paper>
                            <Typography variant="h4" className={classes.categoryTitle}>
                                {category.title}
                            </Typography>

                        </Grid>
                    ))}
                </Grid>
            </div>
        </div>
    </Layout>);
}

export default HomePage;
