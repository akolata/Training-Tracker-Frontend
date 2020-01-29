import {Component, OnInit} from '@angular/core';
import * as fromCoreServices from './core/services';
import {Router} from "@angular/router";

@Component({
  selector: 'tt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private router: Router, private authService: fromCoreServices.AuthService) {
  }

  ngOnInit(): void {
    if (this.authService.isSignedOut()) {
      this.signOut();
    }
  }

  displayIfSignedIn() {
    return this.authService.isSignedIn();
  }

  displayIfSignedOut() {
    return this.authService.isSignedOut();
  }

  signOut() {
    this.authService.removeToken();
    this.router.navigateByUrl('/sign-in');
  }
}
