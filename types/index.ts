export interface Movie {
  id: number;
  imbdId: string;
  posterURL: string;
  title: string;
}

export interface User {
  name: string;
  email: string;
  password: string;
}

export interface UserRes {
  message: string;
  success: boolean;
  newuser: User;
  error: boolean;
}
