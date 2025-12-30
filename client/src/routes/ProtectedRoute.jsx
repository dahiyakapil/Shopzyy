import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = () => {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  if (!isAuth) {
    return <Navigate replace to="/admin/login" />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
