import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import * as fromCoreServices from '@app/core/services';
import * as fromGymServices from '../../services';
import * as fromGymModel from '../../models';
import {HttpErrorResponse} from '@angular/common/http';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'tt-add-gym',
  templateUrl: './add-gym.dialog.html',
  styleUrls: ['./add-gym.dialog.scss']
})
export class AddGymDialog implements OnInit {

  addGymForm: FormGroup;
  addGymError: string;

  constructor(
    private errorService: fromCoreServices.ErrorMessageResolverService,
    private fb: FormBuilder,
    private service: fromGymServices.GymService,
    private dialogRef: MatDialogRef<AddGymDialog>) {
  }

  ngOnInit() {
    this.addGymForm = this.initForm();
  }

  onSubmit(): void {
    this.addGymError = null;
    const request: fromGymModel.CreateGymRequest = {
      name: this.addGymForm.get('name').value.trim()
    };
    this.service.createGym(request)
      .subscribe(
        () => this.closeDialog(true),
        (error: HttpErrorResponse) => this.addGymError = error.error.errorMsg
      );
  }

  getErrorMessage() {
    return this.errorService.resolveErrorMsg(this.addGymForm.get('name').errors, 'Name');
  }

  closeDialog(gymCreated: boolean): void {
    this.dialogRef.close(gymCreated);
  }

  private initForm(): FormGroup {
    return this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(255)]]
    });
  }

}
