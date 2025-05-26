import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PublicRoutes = ({ children }) => {
  const { user } = useSelector((state) => state.user);
  return user && user._id ? <Navigate to="/" /> : children;
};

export default PublicRoutes;
