// CheckAuth.jsx
import { Navigate, useLocation } from "react-router-dom";

function CheckAuth({ isAuthenticated, children }) {
  const location = useLocation();

  // Only protect specific routes (e.g., /cart)
  if (!isAuthenticated && location.pathname === "/cart") {
    return <Navigate to="/login" state={{ from: "/cart" }} replace />;
  }

  return children;
}

export default CheckAuth;