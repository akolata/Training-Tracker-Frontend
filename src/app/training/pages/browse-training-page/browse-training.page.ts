import { Component, OnInit } from '@angular/core';
import * as fromTrainingsModel from '../../model';
import * as fromTrainingsStore from '../../store';
import * as fromSharedModel from '@tt-shared/model';
import {Store} from "@ngrx/store";
import {TrainingsDataSource} from "@app/training/pages/browse-training-page/trainings.data-source";

@Component({
  selector: 'tt-browse-training-page',
  templateUrl: './browse-training.page.html',
  styleUrls: ['./browse-training.page.scss']
})
export class BrowseTrainingPage implements OnInit {

  datasource;

  constructor(private store: Store<any>) {
    this.datasource = new TrainingsDataSource(store);
  }

  ngOnInit() {
  }

  searchTrainings(form: fromTrainingsModel.SearchTrainingsForm): void {
    this.store.dispatch(fromTrainingsStore.BrowseTrainingsActions.setSearchTrainingsForm({form}));
  }

  onTableStateChanged(tableState: fromSharedModel.TableState): void {
    this.store.dispatch(fromTrainingsStore.setSearchTrainingTableState({tableState}));
  }

}
