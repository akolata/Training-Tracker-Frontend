import {NoAuthGuard} from './no-auth-guard.service';
import {AuthGuard} from './auth-guard.service';

export const guards = [
  NoAuthGuard,
  AuthGuard
];

export * from './no-auth-guard.service';
export * from './auth-guard.service';
