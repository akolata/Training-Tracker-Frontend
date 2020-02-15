import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {select, Store} from '@ngrx/store';
import * as fromGlobalStore from '../../../reducers';
import * as fromModel from '../../model';
import * as fromCoreComponents from '../../../core/components';
import * as fromCoreServices from '../../../core/services';
import * as fromAuthStore from '../../reducers';
import * as fromCoreValidators from '../../../core/validators';
import {Observable} from 'rxjs';

@Component({
  selector: 'tt-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent extends fromCoreComponents.BaseComponent implements OnInit {

  signUpForm: FormGroup;
  signUpError$: Observable<string>;

  constructor(
    private fb: FormBuilder,
    private store: Store<fromGlobalStore.AppState>,
    errorMessageResolverService: fromCoreServices.ErrorMessageResolverService,
    private validationService: fromCoreServices.ValidationService) {
    super(errorMessageResolverService);
    this.signUpForm = this.buildSignUpForm();
  }

  ngOnInit(): void {
    this.signUpError$ = this.store.pipe(select(fromAuthStore.selectSignUpError));
  }

  onSubmit(): void {
    const form: fromModel.SignUpForm = this.signUpForm.value;
    this.store.dispatch(fromAuthStore.AuthActions.signUp({payload: {form}}));
  }

  private buildSignUpForm(): FormGroup {
    return this.fb.group({
      'firstName': [
        '',
        [Validators.required, Validators.minLength(2), Validators.maxLength(60)]
      ],
      'lastName': [
        '',
        [Validators.required, Validators.minLength(2), Validators.maxLength(60)]
      ],
      'email': [
        '',
        [Validators.required, Validators.email, Validators.maxLength(200)],
        [fromCoreValidators.TTAsyncValidators.emailExists(this.validationService)]
      ],
      'username': [
        '',
        [Validators.required, Validators.minLength(2), Validators.maxLength(60)],
        [fromCoreValidators.TTAsyncValidators.usernameExists(this.validationService)]
      ],
      'password': [
        '',
        [Validators.required, Validators.minLength(8), Validators.maxLength(60)]
      ],
      'repeatedPassword': [
        '',
        [Validators.required, Validators.minLength(8), Validators.maxLength(60)]
      ],
    });
  }
}
