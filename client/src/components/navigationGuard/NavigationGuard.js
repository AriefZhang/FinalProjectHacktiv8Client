import React from "react";
import { useLocation, Navigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function NavigationGuard({ children, setLoginDealer }) {
  const location = useLocation();
  const token = localStorage.getItem("access_token");
  console.log(location.pathname);

  if (!token && location.pathname === "/dealer/dashboard") {
    setLoginDealer(true);
    return <Navigate to="/" state={{ from: location }} replace />;
  } else if (
    token &&
    localStorage.getItem("role") === "Buyer" &&
    (location.pathname === "/dealer/dashboard" || location.pathname === "/dealer/dashboard/sell")
  ) {
    Swal.fire({
      icon: "warning",
      title: "Oops...",
      text: "This feature only available for dealer",
    });
    return <Navigate to="/" state={{ from: location }} replace />;
  } else {
    return children;
  }
}
