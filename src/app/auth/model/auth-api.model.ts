export interface SignInRequest {
  username: string;
  password: string;
}

export interface SignInResponse {
  accessToken: string;
  tokenType: string;
}

export interface SignUpRequest {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  password: string;
  repeatedPassword: string;
}
