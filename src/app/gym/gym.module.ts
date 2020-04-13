import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from '@app/material/material.module';
import {GymRoutingModule} from './gym-routing.module';
import {SharedModule} from '@tt-shared/shared.module';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import * as fromGymsComponents from './components';
import * as fromGymPages from './pages';
import * as fromGymDialogs from './dialogs';
import * as fromGymServices from './services';
import * as fromGymStore from './store';


@NgModule({
  declarations: [
    ...fromGymDialogs.dialogs,
    ...fromGymPages.pages,
    ...fromGymsComponents.components,
  ],
  entryComponents: [
    ...fromGymDialogs.dialogs
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    GymRoutingModule,
    StoreModule.forFeature('gym', fromGymStore.gymReducerMap),
    EffectsModule.forFeature([...fromGymStore.effects])
  ],
  providers: [
    ...fromGymServices.services
  ]
})
export class GymModule {
}
