import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import * as fromTrainingsStore from '../../store';

@Component({
  selector: 'tt-browse-trainings-form',
  templateUrl: './browse-trainings-form.component.html',
  styleUrls: ['./browse-trainings-form.component.scss']
})
export class BrowseTrainingsFormComponent implements OnInit {

  @Output()
  formSubmitted: EventEmitter<void>;

  form: FormGroup;
  formSelector = fromTrainingsStore.selectBrowseTrainingsForm;
  formAction = fromTrainingsStore.setSearchTrainingsForm;

  constructor(private fb: FormBuilder) {
    this.formSubmitted = new EventEmitter<void>();
  }

  ngOnInit() {
    this.form = this.buildForm();
  }

  onSubmit(): void {
    this.formSubmitted.emit();
  }

  private buildForm(): FormGroup {
    return this.fb.group({
      'name': '',
      'additionalInfo': '',
      'id': ''
    });
  }

}
