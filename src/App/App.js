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

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [favouriteItems, setFavouriteItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    let total = 0;
    cartItems.map((item) => {
      total = item.price + total;
    });
    setTotalPrice(total);
  }, [cartItems])
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Store.Provider value={{ favouriteItems, cartItems }}><HomePage /></Store.Provider>} />
        <Route path="/:category/products" element={<Store.Provider value={{ favouriteItems, cartItems }}><ProductsList /></Store.Provider>} />
        <Route path="/:category/products/:id" element={<Store.Provider value={{ setCartItems, setFavouriteItems, favouriteItems, cartItems }}><ProductDetails /></Store.Provider>} />
        <Route path="/favourites" element={<Store.Provider value={{ favouriteItems, cartItems }}><Favourites /></Store.Provider>} />
        <Route path="/cart" element={<Store.Provider value={{ cartItems, setCartItems, totalPrice, favouriteItems }}><Cart /></Store.Provider>} />
        <Route path="/help" element={<HelpPage></HelpPage>} />
      </Routes>
    </Router>
  );
}

export default App;
