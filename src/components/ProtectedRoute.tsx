import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

export default function ProtectedRoute({ children }: { children: any }) {
  if (useAuth()) {
    return (
      <>
        <div>ProtectedRoutes</div>
        { children }
        <Outlet />
      </>
    );
  }
  return <Navigate to="/login" />;
}
