// store/AuthGuard.jsx
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const AuthGuard = ({ userType = "seeker" }) => {
  // For development/testing - you can set this based on actual auth
  const isAuthenticated = true;

  // Get user type from your auth context/state
  // This is just an example - replace with your actual auth logic
  const currentUserType = "employer"; // or 'seeker'

  if (!isAuthenticated) {
    return <Navigate to={`/${userType}/login`} replace />;
  }

  // Check if user has correct type
  if (userType && currentUserType !== userType) {
    // Redirect to appropriate dashboard
    if (currentUserType === "employer") {
      return <Navigate to="/employer/dashboard" replace />;
    } else {
      return <Navigate to="/seeker/dashboard" replace />;
    }
  }

  return <Outlet />;
};

export default AuthGuard;
