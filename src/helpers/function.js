import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

export const ProtectedRadius = () => {
  const { user } = useAuthContext();

  function isAllowed() {
    if (user.email === "islam@gmail.com") {
      return true;
    } else {
      return false;
    }
  }

  isAllowed() ? <Outlet /> : <Navigate to="/login" />;
};
