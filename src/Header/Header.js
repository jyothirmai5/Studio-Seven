import React from 'react';
import {
    AppBar,
    Toolbar,
    IconButton,
    Button,
    InputBase,
    Paper
} from '@mui/material';
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { makeStyles } from '@mui/styles';
import logo from "../assets/studioseven_logo.svg";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#222 !important',
        marginBottom: '24px',
        boxShadow: 'none',
    }, 
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between',
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
        <AppBar position="static" className={classes.root} sx={{ boxShadow: '0 1px 0 0 #ecedeb', margin: '0px auto' }}>
            <Toolbar className={classes.toolbar}
                sx={{ backgroundColor: "#faf5ef", boxShadow: 'none' }}
            >
                <div className='toolbar-content'>
                    <div className='logo'>
                        <img src={logo} className='logo-banner' alt="logo"></img>
                    </div>
                    <div className='toolbar-functions'>
                        <Paper
                            component="form"
                            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '300px', height: '80%', boxShadow: 'none' }}
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
                        <Button
                            sx={{ color: "#58869e", margin: '10px', fontWeight: 'bold' }}
                        >
                            Categories
                        </Button>
                        <div className='icon-div'>
                            <IconButton
                                sx={{ color: "#58869e" }}>
                                <FavoriteIcon />
                            </IconButton>
                            <IconButton
                                sx={{ color: "#58869e" }}>
                                <ShoppingCartIcon />
                            </IconButton>
                        </div>
                    </div>
                </div>
            </Toolbar>
        </AppBar>
    );
}

export default Header;