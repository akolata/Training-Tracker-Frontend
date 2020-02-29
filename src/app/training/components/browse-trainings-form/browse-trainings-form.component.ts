import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import * as fromTrainingsModel from '../../model';

@Component({
  selector: 'tt-browse-trainings-form',
  templateUrl: './browse-trainings-form.component.html',
  styleUrls: ['./browse-trainings-form.component.scss']
})
export class BrowseTrainingsFormComponent implements OnInit {

  @Output()
  formSubmitted: EventEmitter<fromTrainingsModel.SearchTrainingsForm>;

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formSubmitted = new EventEmitter<fromTrainingsModel.SearchTrainingsForm>();
  }

  ngOnInit() {
    this.form = this.buildForm();
  }

  onSubmit(): void {
    this.formSubmitted.emit(this.form.value);
  }

  private buildForm(): FormGroup {
    return this.fb.group({
      'name': '',
      'additionalInfo': '',
      'id': ''
    });
  }

}
