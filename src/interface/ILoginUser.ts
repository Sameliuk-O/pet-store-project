export interface ILoginUser {
  password?: string;
  username: string;
}

export interface LoginState extends ILoginUser {
  auth?: boolean;
  token: string;
}

export interface IToken {
  token: string;
}
