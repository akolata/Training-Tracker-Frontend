import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import * as fromUserPages from './pages';

const routes: Routes = [
  {
    path: '',
    component: fromUserPages.UserProfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {

}
