export interface IUser {
  login: string;
  password: string;
  isAuthenticated?: boolean;
  hasTriedLoadUser?: boolean;
}
