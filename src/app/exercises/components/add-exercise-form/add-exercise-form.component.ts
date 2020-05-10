import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {Observable, Subject} from 'rxjs';
import {takeUntil, tap} from 'rxjs/operators';
import {BaseComponent} from '@tt-core/components';
import * as fromSharedModels from '@tt-shared/model';
import * as fromCoreModels from '@tt-core/model';
import * as fromCoreServices from '@tt-core/services';
import * as fromCoreUtils from '@tt-core/utils';
import * as fromExercisesModels from '../../models';
import * as fromExercisesStore from '../../store';

@Component({
  selector: 'tt-add-exercise-form',
  templateUrl: './add-exercise-form.component.html',
  styleUrls: ['./add-exercise-form.component.scss']
})
export class AddExerciseFormComponent extends BaseComponent implements OnInit, OnDestroy {

  form: FormGroup;
  types: fromSharedModels.SelectItem[] = [];
  errorMsg$: Observable<string>;

  private unsubscribe: Subject<void>;

  constructor(
    errorsResolverService: fromCoreServices.ErrorMessageResolverService,
    private fb: FormBuilder,
    private store: Store<any>) {
    super(errorsResolverService);
    this.unsubscribe = new Subject<void>();
  }

  ngOnInit() {
    this.form = this.buildForm();
    this.store.select(fromExercisesStore.selectExercisesTypes)
      .pipe(
        takeUntil(this.unsubscribe),
        tap((types: fromCoreModels.ExerciseType[]) => {
          types.forEach(type => {
            this.types.push({
              name: fromCoreUtils.ExercisesUtil.exerciseTypeToDisplayName(type),
              value: type
            })
          })
        })
      )
      .subscribe();
    this.errorMsg$ = this.store.select(fromExercisesStore.selectCreateExerciseErrorMsg);
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  onSubmit(): void {
    const formToDispatch: fromExercisesModels.CreateExerciseForm = this.form.value;
    this.store.dispatch(fromExercisesStore.CreateExerciseActions.createExercise({form: formToDispatch}));
  }

  private buildForm(): FormGroup {
    return this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(255)]],
      type: ['', [Validators.required]]
    });
  }

}
