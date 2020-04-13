import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {environment} from '@env/environment';
import * as fromCoreServices from './core/services';
import * as fromAuthStore from '@app/auth/reducers';
import * as fromCoreStore from '@tt-core/store';

@Component({
  selector: 'tt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  displayServerDetails: boolean;

  constructor(
    private router: Router,
    private authService: fromCoreServices.AuthService,
    private store: Store<any>) {
  }

  ngOnInit(): void {
    if (this.authService.isSignedOut()) {
      this.store.dispatch(fromAuthStore.getUserProfileFailure());
      this.signOut();
    } else {
      const jwt = this.authService.getToken();
      const id = this.authService.getUserId(jwt);
      this.store.dispatch(fromAuthStore.getUserProfile({id}))
    }

    this.displayServerDetails = environment.displayServerDetails;
    if (this.displayServerDetails) {
      this.store.dispatch(fromCoreStore.CoreActions.getServerInfo());
      this.store.dispatch(fromCoreStore.CoreActions.getServerStatus());
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
