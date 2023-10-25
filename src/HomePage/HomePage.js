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

const useStyles = makeStyles((theme) => ({
    categoryCard: {
        height: '200px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        '&:hover': {
            cursor: 'pointer',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
    },
    categoryTitle: {
        color: 'white',
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
        <Grid container spacing={2}>
            {categories.map((category, index) => (
                <Grid item xs={12} sm={6} md={3} key={index} onClick={() => redirectToProducts(category.title)}>
                    <Paper
                        className={classes.categoryCard}
                        style={{ backgroundImage: `url(${category.imageUrl})` }}
                    >
                        <Typography variant="h6" className={classes.categoryTitle}>
                            {category.title}
                        </Typography>
                    </Paper>
                </Grid>
            ))}
        </Grid>
    </Layout>);
}

export default HomePage;