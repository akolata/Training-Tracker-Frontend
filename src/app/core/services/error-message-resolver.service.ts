import {Injectable} from '@angular/core';
import {ValidationErrors} from '@angular/forms';
import * as fromCoreValidators from '../validators';

@Injectable()
export class ErrorMessageResolverService {


  private static isCustomErrorMessage(key: string) {
    return fromCoreValidators.TTAsyncValidators.ERRORS_KEYS.indexOf(key) !== -1;
  }

  private static resolveCustomErrorMessage(errorName: string, error: any, labelToDisplay: string): string {
    if (errorName === fromCoreValidators.TTAsyncValidators.USERNAME_EXISTS
      || errorName === fromCoreValidators.TTAsyncValidators.EMAIL_EXISTS) {
      return `${labelToDisplay} is already taken`;
    } else {
      return `${labelToDisplay} is invalid`;
    }
  }

  private static resolveErrorMessage(errorName: string, error: any, labelToDisplay: string): string {
    if (errorName === 'required') {
      return `${labelToDisplay} is required`;
    } else if (errorName === 'minlength') {
      return `${labelToDisplay} should has at least ${error.requiredLength} character(s)`;
    } else if (errorName === 'maxlength') {
      return `${labelToDisplay} should has up to ${error.requiredLength} character(s)`;
    } else if (errorName === 'email') {
      return 'Value is not a valid email'
    } else {
      return `${labelToDisplay} is invalid`;
    }
  }

  resolveErrorMsg(errors: ValidationErrors, labelToDisplay: string): string {
    if (!errors || Object.keys(errors).length === 0) {
      return '';
    }
    const keys = Object.keys(errors);
    const firstError: string = keys[0];
    if (ErrorMessageResolverService.isCustomErrorMessage(firstError)) {
      return ErrorMessageResolverService.resolveCustomErrorMessage(firstError, errors[firstError], labelToDisplay);
    }
    return ErrorMessageResolverService.resolveErrorMessage(firstError, errors[firstError], labelToDisplay);
  }
}
