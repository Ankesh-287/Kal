import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'
import ThemeProviderComponent from "./ThemeContext";
import Homepage from './pages/Homepage';
import Navbar from './Components/home/Navbar'
import Category from './Components/product/Category.jsx';
import Contact from './pages/Contact.jsx'
import About from './pages/About'
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Cart from './pages/Cart.jsx';
import ProductDetail from "./Components/product/ProductDetail.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import CheckOut from "./Components/cart/CheckOut.jsx";
import NewProducts from "./Components/product/NewProducts.jsx";
import Footer from "./Components/home/Footer.jsx";
import ProtectedRoutes from './Components/ProtectedRoutes.jsx'


import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUser } from './redux/slices/userSlice';
import ProductListAdmin from "./Components/product/ProductListAdmin.jsx";


const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);
  return (
    <ThemeProviderComponent>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/product-category/:category" element={<Category />} />
          <Route path="/product-category/:category/:subCategory" element={<Category />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products/:category" element={<ProductPage />} />
          <Route path="/products/:category/:subCategory" element={<ProductPage />} />
          <Route path="/admin" element={<ProductListAdmin />} />
          <Route path="/checkout" element={
            <ProtectedRoutes>
              <CheckOut />
            </ProtectedRoutes>
          } />
          <Route path="/page" element={<NewProducts />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProviderComponent>
  );
};

export default App
