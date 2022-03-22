import { Navigate } from "react-router-dom";

function ProtectedRoute({ children, name }) {
  if (!localStorage.login && name !== "login") {
    return <Navigate to='/login' />;
  }
  if (localStorage.login && name === "login") {
    return <Navigate to='/' />;
  }
  return children;
}

export default ProtectedRoute;
