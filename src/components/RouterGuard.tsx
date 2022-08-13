import { PropsWithChildren } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

function RouterGuard({ children }: PropsWithChildren) {
  const location = useLocation();
  const isAuth = useAuth();
  const publicRoutes = ['/login'];

  console.log(isAuth, location.pathname);

  if (!isAuth && !publicRoutes.includes(location.pathname)) {
    console.log('navigate to login...');
    return <Navigate to="/login" />;
  }

  return (
    <>
      <div>RouterGuard</div>
      {children}
    </>
  );
}

export default RouterGuard;
