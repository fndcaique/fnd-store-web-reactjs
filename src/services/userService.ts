import { IUser } from '../types/User';

const USER_KEY = 'USER_KEY';

export function login(user: IUser) {
  return new Promise<boolean>((resolve) => {
    setTimeout(() => {
      console.log('user loggin...', user);
      resolve(true);
    }, 3000);
  });
}

export function saveUser(user: IUser) {
  localStorage.setItem(USER_KEY, JSON.stringify(user));
}

export function getUser(): IUser {
  const userString = localStorage.getItem(USER_KEY);
  const user = JSON.parse(userString || '{}');
  return user;
}

export function removeUser() {
  localStorage.removeItem(USER_KEY);
}
