import * as fromServices from '../services';
import {AbstractControl, Validators} from '@angular/forms';
import {timer} from 'rxjs';
import {map, switchMap} from 'rxjs/operators';
import {HttpResponse} from '@angular/common/http';

export class TTAsyncValidators {

  static readonly EMAIL_EXISTS = 'emailExists';
  static readonly USERNAME_EXISTS = 'usernameExists';
  static readonly ERRORS_KEYS = [TTAsyncValidators.EMAIL_EXISTS, TTAsyncValidators.USERNAME_EXISTS];

  static emailExists(validationService: fromServices.ValidationService) {
    return (control: AbstractControl) => {
      const email = control.value;
      if (Validators.email(control) !== null) {
        return null;
      }
      return timer(500)
        .pipe(
          switchMap(() => validationService.verifyEmail(email)),
          map((response: HttpResponse<any>) => {
            if (response.status === 404) {
              return null;
            }
            const error = {};
            error[TTAsyncValidators.EMAIL_EXISTS] = true;
            return error;
          })
        );
    };
  }

  static usernameExists(validationService: fromServices.ValidationService) {
    return (control: AbstractControl) => {
      const username = control.value;
      if (!control.value || control.value.trim() === '') {
        return null;
      }
      return timer(500)
        .pipe(
          switchMap(() => validationService.verifyUsername(username)),
          map((response: HttpResponse<any>) => {
            if (response.status === 404) {
              return null;
            }
            const error = {};
            error[TTAsyncValidators.USERNAME_EXISTS] = true;
            return error;
          })
        );
    };
  }
}
