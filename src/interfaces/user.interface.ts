export interface User {
  userName: string,
  email: string,
  password: string
}

export interface IUser extends User{
  id: string;
}