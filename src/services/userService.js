const USER_KEY = 'USER_KEY';

export function login(user) {
  return new Promise((resolve) =>
    setTimeout(() => {
      console.log('user loggin...', user);
      resolve();
    }, 3000)
  );
}

export function saveUser(user) {
  localStorage.setItem(USER_KEY, JSON.stringify(user));
}

export function getUser() {
  const userString = localStorage.getItem(USER_KEY);
  const user = JSON.parse(userString);

  return user;
}

const userService = {
  login,
  saveUser,
  getUser
};

export default userService;
