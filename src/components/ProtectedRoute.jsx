import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

export default function ProtectedRoute({ children }) {
  if (useAuth()) {
    return (
      <>
        <div>ProtectedRoutes</div>
        {children}
        <Outlet />
      </>
    );
  }
  return <Navigate to="/login" />;
}
