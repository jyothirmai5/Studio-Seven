import React from 'react';
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Button,
    InputBase,
    Paper
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#222 !important',
        marginBottom: '24px'
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    logo: {
        fontWeight: 'bold !important',
        fontSize: '24px !important',
    },
    search: {
        position: 'relative',
        borderRadius: '12px',
        backgroundColor: '#f2f2f2',
        '&:hover': {
            backgroundColor: '#e0e0e0',
        },
        marginRight: '12px',
        marginLeft: 0,
        width: '100%',
    },
    searchIcon: {
        padding: '24px',
        height: '100%',
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: '24px',
        // vertical padding + font size from searchIcon
        paddingLeft: '24px',
        // transition: theme.transitions.create('width'),
        width: '100%',
    },
    accountIcon: {
        marginLeft: '12px',
    },
}));

function Header() {
    const classes = useStyles();
    return (
        <AppBar position="static" className={classes.root}>
            <Toolbar className={classes.toolbar}>
                <Typography className={classes.logo}>Seven For Kids</Typography>
                <Paper
                    component="form"
                    sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
                >
                    <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="Search..."
                        inputProps={{ 'aria-label': 'search...' }}
                    />
                    <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                        <SearchIcon />
                    </IconButton>
                </Paper>
                <Button color="inherit">Categories</Button>
                <IconButton color="inherit">
                    <FavoriteIcon />
                </IconButton>
                <IconButton color="inherit">
                    <ShoppingCartIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}

export default Header;