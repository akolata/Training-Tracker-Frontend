import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import * as fromAuthModel from '../../model';
import * as fromAuthStore from '../../reducers';
import * as fromGlobalStore from '@app/reducers';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';

@Component({
  selector: 'tt-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  signInForm: FormGroup;
  signInError$: Observable<String>;

  constructor(private fb: FormBuilder, private store: Store<fromGlobalStore.AppState>) {
    this.signInForm = this.buildSignInForm();
  }

  ngOnInit() {
    this.signInError$ = this.store.pipe(select(fromAuthStore.selectSignInError));
  }

  onSignInSubmit() {
    const form: fromAuthModel.SignInForm = this.signInForm.value;
    this.store.dispatch(fromAuthStore.AuthActions.signIn({payload: {form}}));
  }

  private buildSignInForm(): FormGroup {
    return this.fb.group({
      'username': ['', Validators.required],
      'password': ['', Validators.required]
    });
  }
}
