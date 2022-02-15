export interface IUserState {
    id: number;
    username: string;
    isAuth: string | null;
    error: string | null;
    repeatedUser: any[] | [];
}
export interface ISignUpData {
    userName: string;
    email: string;
    password: string;
}
export interface ISignInData {
    userName: string,
    password: string
  }