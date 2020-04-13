import {CollectionViewer, DataSource} from '@angular/cdk/collections';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {Store} from '@ngrx/store';
import {takeUntil, tap} from 'rxjs/operators';
import * as fromCoreModels from '@tt-core/model';
import * as fromGymStore from '../../store';

export class GymsTableDatasource implements DataSource<fromCoreModels.Gym> {
  private gyms$: BehaviorSubject<fromCoreModels.Gym[]> = new BehaviorSubject([]);
  private unsubscribe: Subject<void> = new Subject<void>();

  constructor(private store: Store<any>) {
    this.store.select(fromGymStore.selectGyms)
      .pipe(
        takeUntil(this.unsubscribe),
        tap(gyms => this.gyms$.next(gyms))
      )
      .subscribe();
  }

  connect(collectionViewer: CollectionViewer): Observable<fromCoreModels.Gym[] | ReadonlyArray<fromCoreModels.Gym>> {
    return this.gyms$.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.gyms$.complete();
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
