import {CollectionViewer, DataSource} from "@angular/cdk/collections";
import * as trainingModels from '../../model';
import {BehaviorSubject, Observable, Subject} from "rxjs";
import {OnDestroy} from "@angular/core";
import {select, Store} from "@ngrx/store";
import * as fromTrainingStore from '../../store';
import {takeUntil, tap} from "rxjs/operators";

export class TrainingsDataSource implements DataSource<trainingModels.TrainingRow>, OnDestroy {
  private trainings$: BehaviorSubject<trainingModels.TrainingRow[]>;
  private unsubscribe: Subject<void> = new Subject<void>();

  constructor(private store: Store<fromTrainingStore.TrainingsState>) {
    this.trainings$ = new BehaviorSubject<trainingModels.TrainingRow[]>([]);
    this.unsubscribe = new Subject<void>();
    this.store.select(fromTrainingStore.selectTrainings).pipe(
      takeUntil(this.unsubscribe),
      tap((trainings: trainingModels.Training[]) => {
        const rows: trainingModels.TrainingRow[] = [];
        trainings.forEach(t => rows.push({id: t.id, date: t.date, additionalInfo: t.additionalInfo, name: t.name}));
        this.trainings$.next(rows);
      })
    ).subscribe();
  }

  connect(collectionViewer: CollectionViewer): Observable<trainingModels.TrainingRow[] | ReadonlyArray<trainingModels.TrainingRow>> {
    return this.trainings$.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.trainings$.complete();
  }

  ngOnDestroy(): void {
    console.log('TrainingsDataSource onDestroy');
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}
