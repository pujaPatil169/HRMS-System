import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import Cookies from 'js-cookie';

const ProtectedRoute = ({ children, role }) => {
  const auth = useSelector((state) => state.auth);
  const location = useLocation();

  // Check if user is authenticated via Redux state and token cookie
  const token = Cookies.get('token');
  const isAuthenticated = auth.isAuthenticated && token;

  if (!isAuthenticated) {
    // Redirect to login if not authenticated
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Check if user has the required role
  if (role && auth.user?.role !== role) {
    // Redirect to unauthorized or access denied page
    return <Navigate to="/unauthorized" replace />;
  }

  // Authorized, render children
  return children;
};

export default ProtectedRoute;
