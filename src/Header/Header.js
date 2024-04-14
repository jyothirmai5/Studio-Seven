import React, { useState } from 'react';
import {
    AppBar,
    Toolbar,
    IconButton,
    InputBase,
    Paper,
    MenuItem,
    Button,
    Menu, Drawer, List, ListItem, ListItemText
} from '@mui/material';
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { styled } from "@mui/system";
import logo from "../assets/studioseven_logo.svg";
import { useNavigate } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import MenuIcon from '@mui/icons-material/Menu';

const useStyles = styled((theme) => ({
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
    MuiPopover: {},
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

function Header({ categories, cartItems, favouriteItems }) {
    const classes = useStyles();
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState(null);
    const [isDrawerOpen, setDrawerOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            navigate(`/products/${searchTerm}`)
        }
    };

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const menuItems = [
        { text: 'Home', link: '/' },
        { text: 'Favourites', link: '/favourites' },
        { text: 'Cart', link: '/cart' },
        // Add more menu items as needed
    ];
    const toggleDrawer = (open) => () => {
        setDrawerOpen(open);
    };
    const handleHover = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <AppBar position="static" className={classes.root} sx={{ boxShadow: '0 1px 0 0 #ecedeb', margin: '0px auto' }}>
                <Toolbar className={classes.toolbar}
                    sx={{ backgroundColor: "#faf5ef", boxShadow: 'none' }}
                >

                    <div className='toolbar-content'>
                        <div className='sp-menu'>
                            <IconButton
                                edge="start"
                                aria-label="menu"
                                onClick={toggleDrawer(true)}
                            >
                                <MenuIcon />
                            </IconButton>
                        </div>
                        <div className='logo-div'>
                            <div className='logo'>
                                <img src={logo} className='logo-banner' alt="logo" onClick={() => navigate('/')}></img>
                            </div>
                            <div className='search'>
                                <Paper
                                    component="form"
                                    sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '300px', height: '80%', boxShadow: 'none' }}
                                >
                                    <InputBase
                                        sx={{ ml: 1, flex: 1 }}
                                        placeholder="Search..."
                                        inputProps={{ 'aria-label': 'search...' }}
                                        value={searchTerm}
                                        onChange={handleChange}
                                        onKeyPress={handleKeyPress}
                                    />
                                    <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                                        <SearchIcon />
                                    </IconButton>
                                </Paper>
                            </div>
                        </div>
                        <div className='toolbar-functions'>
                            <Button
                                sx={{ color: '#58869e', fontSize: '15px', fontWeight: 700 }}
                                aria-controls="simple-menu"
                                aria-haspopup="true"
                                onClick={handleHover} // Trigger the dropdown on hover
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
                                        navigate(`/${category.category_id}/products`);
                                    }}>{category.category_name}</MenuItem>
                                ))}
                            </Menu>
                            <div className='icon-div'>
                                <IconButton
                                    sx={{ color: "#58869e" }}
                                    onClick={() => navigate('/favourites')}
                                >
                                    <Badge badgeContent={favouriteItems ? favouriteItems.length : 0} color="warning">
                                        <FavoriteIcon />
                                    </Badge>
                                </IconButton>
                                <IconButton
                                    onClick={() => navigate('/cart')}
                                    sx={{ color: "#58869e" }}>
                                    <Badge badgeContent={cartItems ? cartItems.length : 0} color="warning">
                                        <ShoppingCartIcon />
                                    </Badge>
                                </IconButton>
                            </div>
                        </div>
                    </div>
                </Toolbar>
            </AppBar>
            <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)}>
                <List>
                    {menuItems.map((item) => (
                        <ListItem style={{ cursor: "pointer" }} key={item.text} onClick={() => navigate(item.link)}>
                            <ListItemText primary={item.text} />
                        </ListItem>
                    ))}
                </List>
            </Drawer></>
    );
}

export default Header;