import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'tt-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  signInForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.signInForm = this.buildSignInForm();
  }

  ngOnInit() {
  }

  onSignInSubmit() {
    console.log(this.signInForm.value);
  }

  private buildSignInForm(): FormGroup {
    return this.fb.group({
      'username': ['', Validators.required],
      'password': ['', Validators.required]
    });
  }
}
