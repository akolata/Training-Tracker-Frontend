import {Component} from '@angular/core';
import * as fromTrainingsStore from '../../store';
import * as fromSharedModel from '@tt-shared/model';
import {Store} from '@ngrx/store';
import {TrainingsDataSource} from '@app/training/pages/browse-training-page/trainings.data-source';

@Component({
  selector: 'tt-browse-training-page',
  templateUrl: './browse-training.page.html',
  styleUrls: ['./browse-training.page.scss']
})
export class BrowseTrainingPage {

  datasource;

  constructor(private store: Store<fromTrainingsStore.TrainingsState>) {
    this.datasource = new TrainingsDataSource(store);
  }

  searchTrainings(): void {
    this.store.dispatch(fromTrainingsStore.searchTrainings());
  }

  onTableStateChanged(tableState: fromSharedModel.TableState): void {
    this.store.dispatch(fromTrainingsStore.setSearchTrainingTableState({tableState}));
  }

}
