import {AfterViewInit, Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import * as fromTrainingModel from '../../model';
import * as fromSharedModel from '@tt-shared/model';
import * as fromSharedUtils from '@tt-shared/util';
import * as fromTrainingStore from '../../store';
import {DataSource} from '@angular/cdk/collections';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {merge, Observable, Subject} from 'rxjs';
import {take, takeUntil, tap} from 'rxjs/operators';
import {Sort} from '@angular/material/sort/typings/sort';
import {Store} from "@ngrx/store";

@Component({
  selector: 'tt-browse-trainings-table',
  templateUrl: './browse-trainings-table.component.html',
  styleUrls: ['./browse-trainings-table.component.scss']
})
export class BrowseTrainingsTableComponent implements OnInit, AfterViewInit, OnDestroy {

  @Input()
  dataSource: DataSource<fromTrainingModel.TrainingRow>;
  @Output()
  stateChanged: EventEmitter<fromSharedModel.TableState>;

  @ViewChild(MatPaginator, {static: true})
  paginator: MatPaginator;
  @ViewChild(MatSort, {static: true})
  sort: MatSort;
  paginationState$: Observable<fromSharedModel.PaginationState>;
  isLoading$: Observable<boolean>;

  displayedColumns: string[] = ['id', 'name', 'date', 'additionalInfo'];
  pageSizes = fromSharedModel.TABLE_PAGE_SIZES;
  private unsubscribe: Subject<void>;

  constructor(private store: Store<fromTrainingStore.TrainingsState>) {
    this.unsubscribe = new Subject<void>();
    this.stateChanged = new EventEmitter<fromSharedModel.TableState>();
  }

  ngOnInit() {
    this.store.select(fromTrainingStore.selectTrainingsTableState).pipe(
      take(1),
      tap(state => {
        this.paginator.pageSize = state.page.size;
        this.paginator.pageIndex = state.page.page;
      })
    ).subscribe();
    this.paginationState$ = this.store.select(fromTrainingStore.selectTrainingsPaginationState);
    this.isLoading$ = this.store.select(fromTrainingStore.selectTrainingsLoading);
  }

  ngAfterViewInit(): void {
    this.sort.sortChange.pipe(
      takeUntil(this.unsubscribe),
      tap((sort: Sort) => this.paginator.pageIndex = 0)
    ).subscribe();

    merge(this.sort.sortChange, this.paginator.page).pipe(
      takeUntil(this.unsubscribe),
      tap(() => this.pageOrSortChanged())
    ).subscribe();
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  private pageOrSortChanged() {
    const sort: fromSharedModel.SortQuery = fromSharedUtils.materialSortToSortQuery(this.sort.active, this.sort.direction);
    const page: fromSharedModel.PageQuery = fromSharedUtils.materialPageToPageQuery(this.paginator.pageSize, this.paginator.pageIndex);
    this.stateChanged.emit({sort, page});
  }
}
