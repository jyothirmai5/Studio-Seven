import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import HomePage from '../HomePage/HomePage';
import ProductsList from '../ProductsList/ProductsList';
import ProductDetails from '../ProductDetails/ProductDetails';
import Favourites from '../Favourites/Favourites';
import Cart from '../Cart/Cart';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/:category/products" element={<ProductsList />} />
        <Route path="/:category/products/:id" element={<ProductDetails />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;
