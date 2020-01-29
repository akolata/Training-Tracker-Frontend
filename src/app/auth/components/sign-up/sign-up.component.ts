import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import * as fromGlobalStore from '../../../reducers';
import * as fromModel from '../../model';
import {AuthActions} from '../../reducers';

@Component({
  selector: 'tt-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

  signUpForm: FormGroup;

  constructor(private fb: FormBuilder, private store: Store<fromGlobalStore.AppState>) {
    this.signUpForm = this.buildSignUpForm();
  }

  onSubmit(): void {
    const form: fromModel.SignUpForm = this.signUpForm.value;
    this.store.dispatch(AuthActions.signUp({payload: {form}}));
  }

  private buildSignUpForm(): FormGroup {
    return this.fb.group({
      'firstName': ['', Validators.required],
      'lastName': ['', Validators.required],
      'email': ['', [Validators.required, Validators.email]],
      'username': ['', [Validators.required]],
      'password': ['', Validators.required],
      'repeatedPassword': ['', Validators.required]
    });
  }
}
