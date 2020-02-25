import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import * as fromGymPages from './pages';
import * as fromGymDialogs from './dialogs';
import * as fromGymServices from './services';
import {MaterialModule} from '@app/material/material.module';
import {GymRoutingModule} from './gym-routing.module';
import {SharedModule} from '@tt-shared/shared.module';


@NgModule({
  declarations: [
    ...fromGymDialogs.dialogs,
    ...fromGymPages.pages
  ],
  entryComponents: [
    ...fromGymDialogs.dialogs
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    GymRoutingModule
  ],
  providers: [
    ...fromGymServices.services
  ]
})
export class GymModule {
}
