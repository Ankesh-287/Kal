import { useLocation } from 'react-router-dom';
import Navbar from '../Components/home/Navbar';
import Footer from '../Components/home/Footer';

const Layout = ({ children }) => {
  const location = useLocation();
  const hideNavbarFooter = location.pathname === '/login' || location.pathname === '/register';

  return (
    <>
      {!hideNavbarFooter && <Navbar />}
      {children}
      {!hideNavbarFooter && <Footer />}
    </>
  );
};

export default Layout;
