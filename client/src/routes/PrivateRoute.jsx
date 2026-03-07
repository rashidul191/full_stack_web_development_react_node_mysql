import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const PrivateRoute = ({ children, role }) => {
  const { auth, loading } = useContext(AuthContext);

  if (loading) return <h1>Loading...</h1>;

  if (!auth) {
    return <Navigate to="/login" />;
  }
  // role check
  if (role && auth?.auth?.role != role) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default PrivateRoute;
