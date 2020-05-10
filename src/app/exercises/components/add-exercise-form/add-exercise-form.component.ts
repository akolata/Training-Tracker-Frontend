import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {Observable, Subject} from 'rxjs';
import {takeUntil, tap} from 'rxjs/operators';
import {BaseComponent} from '@tt-core/components';
import {Actions, ofType} from '@ngrx/effects';
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

  @ViewChild('addExerciseForm', {static: true})
  private addExerciseForm: NgForm;

  form: FormGroup;
  types: fromSharedModels.SelectItem[] = [];
  errorMsg$: Observable<string>;
  isPending$: Observable<boolean>;

  private unsubscribe: Subject<void>;

  constructor(
    errorsResolverService: fromCoreServices.ErrorMessageResolverService,
    private fb: FormBuilder,
    private store: Store<any>,
    private actions$: Actions) {
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
    this.actions$
      .pipe(
        ofType(fromExercisesStore.CreateExerciseActions.createExerciseSuccess),
        takeUntil(this.unsubscribe),
        tap(() => this.addExerciseForm.resetForm()
        )
      )
      .subscribe();
    this.errorMsg$ = this.store.select(fromExercisesStore.selectCreateExerciseErrorMsg);
    this.isPending$ = this.store.select(fromExercisesStore.selectExerciseCreationPending);
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
