// components/AuthGuard.jsx
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const AuthGuard = () => {
  // Default to true for development/testing
  const isAuthenticated = true; // Always authenticated for now
  
  // For production, you would check actual auth:
  // const isAuthenticated = !!localStorage.getItem('seekerToken') || true;
  
  return isAuthenticated ? <Outlet /> : <Navigate to="/jobseeker/login" replace />;
};

export default AuthGuard;