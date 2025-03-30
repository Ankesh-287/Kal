import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import ThemeProviderComponent from "./ThemeContext";
import Homepage from './pages/Homepage';
import Footer from './Components/Footer.jsx'
import Navbar from './Components/Navbar'
import Category from './Components/Category.jsx';
import Contact from './pages/Contact.jsx'
import About from './pages/About'
import Login from './pages/Login.jsx';
import Cart from './Components/Cart.jsx';
import ProductDetail from "./Components/ProductDetail.jsx";
import './App.css'

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
        </Routes>

        <Footer />
      </Router>
    </ThemeProviderComponent>
  );
};


// sx = {{
//   '& label.Mui-focused': {
//     color: '#A0AAB4',
//                                         },
//   '& .MuiInput-underline:after': {
//     borderBottomColor: '#B2BAC2',
//                                         },
//   '& .MuiOutlinedInput-root': {
//     '& fieldset': {
//       borderColor: '#E0E3E7',
//                                             },
//     '&:hover fieldset': {
//       borderColor: '#B2BAC2',
//                                             },
//     '&.Mui-focused fieldset': {
//       borderColor: '#6F7E8C',
//                                             },
//   },
// }}


export default App
