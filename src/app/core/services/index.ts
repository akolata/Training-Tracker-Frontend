import {AuthService} from './auth.service';
import {ErrorMessageResolverService} from './error-message-resolver.service';
import {ValidationService} from './validation.service';
import {ServerDetailsService} from './server-details.service';

export const services = [AuthService, ErrorMessageResolverService, ValidationService, ServerDetailsService];

export * from './auth.service';
export * from './error-message-resolver.service';
export * from './validation.service';
export * from './server-details.service';
