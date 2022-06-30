import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import { darkColor, lightColor } from './AppColors';
import Header from './components/Header';
import RouterGuard from './components/RouterGuard';
import useAuth from './hooks/useAuth';
import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import { loadUser } from './store/reducers/userReducer';

const AppStyled = styled.div`
  color: ${lightColor};
  background-color: ${darkColor};
  min-height: 100vh;

  input {
    color: ${lightColor};
    background-color: ${darkColor};
  }
`;

function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useAuth();

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  useEffect(() => {
    console.log('simulate did mount');
  }, []);

  useEffect(() => {
    console.log('simulate did update');
  }, []);

  return (
    <AppStyled>
      { isLoggedIn && <Header /> }
      <RouterGuard>
        <Routes>
          <Route path="login" element={ <Login /> } />
          <Route
            path="/"
            element={ (
              // <ProtectedRoute>
              <Home />
              // </ProtectedRoute>
            ) }
          >
            <Route path="hello" element={ <h1>Hello</h1> } />
          </Route>
          <Route path="good" element={ <h1>Good</h1> } />
          <Route path="*" element={ <NotFound /> } />
        </Routes>
      </RouterGuard>
    </AppStyled>
  );
}

export default App;
