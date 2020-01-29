import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import * as fromModel from '../../model';
import {AuthService} from '../../../core/services';
import * as fromAuthStore from '../../reducers';
import {AuthActions} from '../../reducers';
import * as fromGlobalStore from '../../../reducers';
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

  constructor(
    private fb: FormBuilder,
    private service: AuthService,
    private store: Store<fromGlobalStore.AppState>) {
    this.signInForm = this.buildSignInForm();
  }

  ngOnInit() {
    this.signInError$ = this.store.pipe(select(fromAuthStore.selectSignInError));
  }

  onSignInSubmit() {
    const form: fromModel.SignInForm = this.signInForm.value;
    this.store.dispatch(AuthActions.signIn({payload: {form}}));
  }

  private buildSignInForm(): FormGroup {
    return this.fb.group({
      'username': ['', Validators.required],
      'password': ['', Validators.required]
    });
  }
}
