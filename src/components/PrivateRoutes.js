import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  let auth = localStorage.getItem("token");
  auth.token ? <Outlet /> : <Navigate to="/login" />;
  // return auth.token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
