import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
  const { isAuthenticated, loading } = useSelector((state) => state.user);
  if (loading) return null; // or <Loader />

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoutes;
