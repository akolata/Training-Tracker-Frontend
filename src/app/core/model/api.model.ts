import {User} from './user.model';

export interface ApiGenericClientErrorResponse {
  errorMsg: string;
}

export interface UserProfileResponse {
  user: User;
}
