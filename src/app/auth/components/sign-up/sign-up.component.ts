import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'tt-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  signUpForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.signUpForm = this.buildSignUpForm();
  }

  ngOnInit() {
  }

  private buildSignUpForm(): FormGroup {
    return this.fb.group({
      'firstName': ['', Validators.required],
      'lastName': ['', Validators.required],
      'email': ['', [Validators.required, Validators.email]],
      'password': ['', Validators.required],
      'repeatedPassword': ['', Validators.required]
    });
  }
}
