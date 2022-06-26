import { useSelector } from 'react-redux';

const useAuth = () => {
  const user = useSelector((globalState) => globalState.user);
  return user && user.isAuthenticated;
};

export default useAuth;
