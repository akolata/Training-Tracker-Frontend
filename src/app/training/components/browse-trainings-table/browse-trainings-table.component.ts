import { Component, OnInit } from '@angular/core';
import * as fromTrainingModel from '../../model';

@Component({
  selector: 'tt-browse-trainings-table',
  templateUrl: './browse-trainings-table.component.html',
  styleUrls: ['./browse-trainings-table.component.scss']
})
export class BrowseTrainingsTableComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'date', 'additionalInfo'];
   data: fromTrainingModel.TrainingRow[] = [
    {
      id: 1,
      name: 'T1',
      additionalInfo: 'A1',
      date: new Date()
    },
     {
       id: 2,
       name: 'T2',
       additionalInfo: 'A2',
       date: new Date()
     },
  ];
  constructor() { }

  ngOnInit() {
  }

}
