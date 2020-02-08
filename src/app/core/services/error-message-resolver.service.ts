import {Injectable} from "@angular/core";
import {ValidationErrors} from "@angular/forms";

@Injectable()
export class ErrorMessageResolverService {


  resolveErrorMsg(errors: ValidationErrors, labelToDisplay: string): string {
    if (!errors || Object.keys(errors).length === 0) {
      return '';
    }
    const keys = Object.keys(errors);
    const firstError: string = keys[0];
    return ErrorMessageResolverService.resolveErrorMessage(firstError, errors[firstError], labelToDisplay);
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
}
