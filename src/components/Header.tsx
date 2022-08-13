import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { lightColor } from '../AppColors';
import { logout } from '../store/reducers/userReducer';
import Button from './Button';

const HeaderStyled = styled.header`
  display: flex;
  height: 80px;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  margin-bottom: 10px;
  border-bottom: 1px solid ${lightColor};
`;

export default function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <HeaderStyled>
      <h1>Fnd Store</h1>
      <Button onClick={handleLogout}>Logout</Button>
    </HeaderStyled>
  );
}
