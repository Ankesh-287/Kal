import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import ThemeProviderComponent from "./ThemeContext";
import Homepage from './pages/Homepage';
import Footer from './Components/Footer.jsx'
import Navbar from './Components/home/Navbar'
import Category from './Components/product/Category.jsx';
import Contact from './pages/Contact.jsx'
import About from './pages/About'
import Login from './pages/Login.jsx';
import Cart from './pages/Cart.jsx';
import ProductDetail from "./Components/product/ProductDetail.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import './App.css'
import CheckOut from "./Components/cart/CheckOut.jsx";

const App = () => {
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
          <Route path="/product-detail/:id" element={<ProductDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/checkout" element={<CheckOut />} />
        </Routes>

        <Footer />
      </Router>
    </ThemeProviderComponent>
  );
};

export default App
