import React, { useState } from 'react';
import {
    AppBar,
    Toolbar,
    IconButton,
    InputBase,
    Paper,
    MenuItem,
    Button,
    Menu
} from '@mui/material';
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { makeStyles } from '@mui/styles';
import logo from "../assets/studioseven_logo.svg";
import { useNavigate } from 'react-router-dom';
import { categories } from '../Constants';

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
    MuiPopover: {

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
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState(null);

    const handleHover = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <AppBar position="static" className={classes.root} sx={{ boxShadow: '0 1px 0 0 #ecedeb', margin: '0px auto' }}>
            <Toolbar className={classes.toolbar}
                sx={{ backgroundColor: "#faf5ef", boxShadow: 'none' }}
            >
                <div className='toolbar-content'>
                    <div className='logo-div'>
                        <div className='logo'>
                            <img src={logo} className='logo-banner' alt="logo" onClick={() => navigate('/')}></img>
                        </div>
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
                    </div>
                    <div className='toolbar-functions'>
                        <Button
                            sx={{ color: '#58869e', fontSize: '15px', fontWeight: 700 }}
                            aria-controls="simple-menu"
                            aria-haspopup="true"
                            onMouseEnter={handleHover} // Trigger the dropdown on hover
                        >
                            Categories
                        </Button>
                        <Menu
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            {categories.map((category, index) => (
                                <MenuItem sx={{ color: '#58869e' }} key={index} onClick={() => {
                                    handleClose();
                                    navigate(`/${category.title}/products`);
                                }}>{category.title}</MenuItem>
                            ))}
                        </Menu>
                        <div className='icon-div'>
                            <IconButton
                                sx={{ color: "#58869e" }}
                                onClick={() => navigate('/favourites')}
                            >
                                <FavoriteIcon />
                            </IconButton>
                            <IconButton
                                onClick={() => navigate('/cart')}
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