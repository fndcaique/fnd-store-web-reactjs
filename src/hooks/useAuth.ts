import { useSelector } from 'react-redux';
import { getUser } from '../services/userService';
import { IStore } from '../store/index';
import { IUser } from '../types/User';

const useAuth = () => {
  console.log('useAuth...');

  const user = useSelector<IStore, IUser>((globalState) => globalState.user);
  if (!user.hasTriedLoadUser) {
    const userLoaded = getUser();
    console.log('is auth1:', userLoaded && userLoaded.isAuthenticated);

    return userLoaded && userLoaded.isAuthenticated;
  }
  console.log('is auth2:', user && user.isAuthenticated);

  console.log('use auth user:', user);
  return user && user.isAuthenticated;
};

export default useAuth;
