import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Header from './components/Header';
import ProtectedRoute from './components/ProtectedRoute';
import useAuth from './hooks/useAuth';
import Home from './pages/Home';
import Login from './pages/Login';
import { loadUser } from './store/reducers/user';
import styled from 'styled-components';
import { darkColor, lightColor } from './AppColors';

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

  return (
    <AppStyled>
      {isLoggedIn && <Header />}
      <Routes>
        <Route path="login" element={<Login />}></Route>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        >
          <Route path="hello" element={<h1>Hello</h1>} />
        </Route>
        <Route path="good" element={<h1>Good</h1>} />
        <Route path="*" element={<h1>Not found</h1>}></Route>
      </Routes>
    </AppStyled>
  );
}

export default App;
