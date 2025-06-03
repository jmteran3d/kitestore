import React from "react";
import { useAuth } from "../../hooks";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
  const { loading, user } = useAuth();

  if (loading) {
    return <div>Cargando ruta protegida...</div>;
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
};