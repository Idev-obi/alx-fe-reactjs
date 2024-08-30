// src/components/ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';

const isAuthenticated = false; // Replace with actual authentication logic

function ProtectedRoute({ children }) {
  return isAuthenticated ? children : <Navigate to="/" />;
}

export default ProtectedRoute;
