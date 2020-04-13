import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {GymsTableDatasource} from '@app/gym/components/gyms-table/gyms-table.datasource';
import {Store} from '@ngrx/store';
import {merge, Observable, Subject} from 'rxjs';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {takeUntil, tap} from 'rxjs/operators';
import * as fromSharedModels from '@tt-shared/model';
import * as fromCoreModels from '@tt-core/model';
import * as fromGymStore from '../../store';
import * as fromSharedUtils from '@tt-shared/util';

@Component({
  selector: 'tt-gyms-table',
  templateUrl: './gyms-table.component.html',
  styleUrls: ['./gyms-table.component.scss']
})
export class GymsTableComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;

  dataSource: DataSource<fromCoreModels.Gym>;
  columns = ['name'];
  pageSizes = [...fromSharedModels.TABLE_PAGE_SIZES];
  isLoading$: Observable<boolean>;
  paginationState$: Observable<fromSharedModels.PaginationState>;
  private unsubscribe: Subject<void> = new Subject<void>();

  constructor(private store$: Store<any>) {
    this.dataSource = new GymsTableDatasource(store$);
  }

  ngOnInit() {
    this.isLoading$ = this.store$.select(fromGymStore.selectIsLoading);
    this.paginationState$ = this.store$.select(fromGymStore.selectBrowseGymsPaginationState);
  }

  ngAfterViewInit(): void {
    this.sort.sortChange
      .pipe(
        takeUntil(this.unsubscribe),
        tap(() => this.paginator.pageIndex = 0)
      )
      .subscribe();

    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        takeUntil(this.unsubscribe),
        tap(() => this.triggerSearchAction())
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  private triggerSearchAction(): void {
    console.log('triggerSearchAction');
    const sort: fromSharedModels.SortQuery = fromSharedUtils.materialSortToSortQuery(this.sort.active, this.sort.direction);
    const page: fromSharedModels.PageQuery = fromSharedUtils.materialPageToPageQuery(this.paginator.pageSize, this.paginator.pageIndex);
    this.store$.dispatch(fromGymStore.BrowseGymActions.setBrowseGymsTableState(
      {
        tableState: {
          page,
          sort
        }
      }));
  }
}
