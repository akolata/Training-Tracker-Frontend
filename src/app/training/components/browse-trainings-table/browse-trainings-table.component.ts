import {Component, Input, OnInit} from '@angular/core';
import * as fromTrainingModel from '../../model';
import {DataSource} from "@angular/cdk/collections";

@Component({
  selector: 'tt-browse-trainings-table',
  templateUrl: './browse-trainings-table.component.html',
  styleUrls: ['./browse-trainings-table.component.scss']
})
export class BrowseTrainingsTableComponent implements OnInit {

  @Input()
  dataSource: DataSource<fromTrainingModel.TrainingRow>;

  displayedColumns: string[] = ['id', 'name', 'date', 'additionalInfo'];
  constructor() { }

  ngOnInit() {
  }

}
