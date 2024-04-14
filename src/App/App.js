import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import React, { useEffect, useState } from 'react';
import HomePage from '../HomePage/HomePage';
import ProductsList from '../ProductsList/ProductsList';
import ProductDetails from '../ProductDetails/ProductDetails';
import Favourites from '../Favourites/Favourites';
import Cart from '../Cart/Cart';
import { Store } from '../Context';
import HelpPage from '../HelpPage/HelpPage';
import axios from 'axios';
import { CART_PATH, CATEGORIES_PATH, FAVORITES_PATH } from '../Constants';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [favouriteItems, setFavouriteItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    let total = 0;
    cartItems.map((item) => {
      total = item.product_price + total;
    });
    setTotalPrice(total.toFixed(2));
  }, [cartItems])

  useEffect(() => {
    const fetchCategories = (async () => {
      const response = await axios.get(
        `${CATEGORIES_PATH}`
      )
      if (response.data) {
        setCategories(response.data);
      }
    });
    fetchCategories();
    fetchFavorites();
    fetchCart();
  }, []);

  const fetchFavorites = async () => {
    const response = await axios.get(
      `${FAVORITES_PATH}`
    )
    if (response.data) {
      setFavouriteItems(response.data);
    }
  };

  const fetchCart = async () => {
    const response = await axios.get(
      `${CART_PATH}`
    )
    if (response.data) {
      setCartItems(response.data);
    }
  };

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Store.Provider value={{ categories, favouriteItems, cartItems }}><HomePage /></Store.Provider>} />
        <Route path="/:categoryId/products" element={<Store.Provider value={{ categories, favouriteItems, cartItems }}><ProductsList /></Store.Provider>} />
        <Route path="/products/:searchText" element={<Store.Provider value={{ categories, favouriteItems, cartItems }}><ProductsList /></Store.Provider>} />
        <Route path="/:categoryId/products/:productId" element={<Store.Provider value={{ categories, setCartItems, setFavouriteItems, favouriteItems, cartItems, fetchFavorites, fetchCart }}><ProductDetails /></Store.Provider>} />
        <Route path="/favourites" element={<Store.Provider value={{ categories, favouriteItems, cartItems }}><Favourites /></Store.Provider>} />
        <Route path="/cart" element={<Store.Provider value={{ categories, cartItems, setCartItems, totalPrice, favouriteItems, fetchCart }}><Cart /></Store.Provider>} />
        <Route path="/help" element={<HelpPage></HelpPage>} />
      </Routes>
    </Router>
  );
}

export default App;
