import {Component} from '@angular/core';
import * as fromServices from '../../services';
import {FormGroup, ValidationErrors} from '@angular/forms';

@Component({
  selector: 'tt-base',
  template: '',
  styles: []
})
export class BaseComponent {

  constructor(public errorMessageResolverService: fromServices.ErrorMessageResolverService) {
  }

  public getErrorMessage(name: string, labelToDisplay: string, form: FormGroup) {
    const errors: ValidationErrors = form.get(name).errors;
    return this.errorMessageResolverService.resolveErrorMsg(errors, labelToDisplay);
  }
}
