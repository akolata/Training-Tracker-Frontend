import { Component, OnInit } from '@angular/core';
import * as fromTrainingsModel from '../../model';
import * as fromTrainingsStore from '../../store';
import {Store} from "@ngrx/store";

@Component({
  selector: 'tt-browse-training-page',
  templateUrl: './browse-training.page.html',
  styleUrls: ['./browse-training.page.scss']
})
export class BrowseTrainingPage implements OnInit {

  constructor(private store: Store<any>) { }

  ngOnInit() {
  }

  searchTrainings(form: fromTrainingsModel.SearchTrainingsForm): void {
    this.store.dispatch(fromTrainingsStore.BrowseTrainingsActions.setSearchTrainingsForm({form}));
  }

}
