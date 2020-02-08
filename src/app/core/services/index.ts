import {AuthService} from './auth.service';
import {ErrorMessageResolverService} from './error-message-resolver.service';

export const services = [AuthService, ErrorMessageResolverService];

export * from './auth.service';
export * from './error-message-resolver.service';
