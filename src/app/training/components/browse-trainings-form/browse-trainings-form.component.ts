import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import * as fromTrainingsModel from '../../model';
import * as fromTrainingsStore from '../../store';
import {Store} from "@ngrx/store";
import {take, tap} from "rxjs/operators";

@Component({
  selector: 'tt-browse-trainings-form',
  templateUrl: './browse-trainings-form.component.html',
  styleUrls: ['./browse-trainings-form.component.scss']
})
export class BrowseTrainingsFormComponent implements OnInit {

  @Output()
  formSubmitted: EventEmitter<fromTrainingsModel.SearchTrainingsForm>;

  form: FormGroup;

  constructor(private fb: FormBuilder, private store: Store<fromTrainingsStore.TrainingsState>) {
    this.formSubmitted = new EventEmitter<fromTrainingsModel.SearchTrainingsForm>();
  }

  ngOnInit() {
    this.form = this.buildForm();
    this.store.select(fromTrainingsStore.selectBrowseTrainingsForm)
      .pipe(
        take(1),
        tap(form => this.form.patchValue(form))
      ).subscribe();
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
