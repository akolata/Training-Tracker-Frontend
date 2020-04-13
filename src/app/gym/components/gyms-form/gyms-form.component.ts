import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Store} from '@ngrx/store';
import * as fromGymStore from '../../store';

@Component({
  selector: 'tt-gyms-form',
  templateUrl: './gyms-form.component.html',
  styleUrls: ['./gyms-form.component.scss']
})
export class GymsFormComponent implements OnInit {

  form: FormGroup;
  formSelector = fromGymStore.selectBrowseGymsForm;

  constructor(private fb: FormBuilder, private store$: Store<any>) {
  }

  ngOnInit() {
    this.form = this.buildForm();
  }

  search(): void {
    this.store$.dispatch(fromGymStore.BrowseGymActions.setBrowseGymsForm({form: this.form.value}));
    this.store$.dispatch(fromGymStore.BrowseGymActions.searchGyms());
  }

  private buildForm(): FormGroup {
    return this.fb.group({
      name: ''
    });
  }


}
