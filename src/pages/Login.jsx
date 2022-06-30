import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import styled from 'styled-components';
import { lightColor } from '../AppColors';
import Button from '../components/Button';
import InputField from '../components/InputField';
import Loading from '../components/Loading';
import { loginActionThunk } from '../store/reducers/userReducer';

const LoginStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;

  h1,
  p {
    margin-bottom: 10px;
  }

  form {
    height: 250px;
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 1px solid ${lightColor};
    border-radius: 3px;
    padding: 30px;
  }
`;

export default function Login() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const isLoggedIn = useSelector(
    (globalState) => globalState.user.isAuthenticated,
  );
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    dispatch(loginActionThunk({ login, password }));
  };

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <LoginStyled>
      <h1>
        Hello! Welcome to the
        { ' ' }
        <strong>Fnd Store</strong>
      </h1>
      <p>Please login to continue...</p>
      <form onSubmit={ handleSubmit }>
        <InputField
          id="login"
          labelText="Login"
          value={ login }
          onChange={ (event) => setLogin(event.target.value) }
        />
        <InputField
          id="password"
          type="password"
          labelText="Password"
          value={ password }
          onChange={ (event) => setPassword(event.target.value) }
        />
        { isLoading ? (
          <Loading />
        ) : (
          <Button primary fullWidth>
            Submit
          </Button>
        ) }
      </form>
    </LoginStyled>
  );
}
