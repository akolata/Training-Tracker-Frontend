export enum SortDirection {
  ASC = 'ASC',
  DESC = 'DESC'
}

export interface PageQuery {
  page?: number;
  size?: number;
}

export interface SortQuery {
  property?: string;
  direction?: SortDirection;
}


export interface TableState {
  sort: SortQuery;
  page: PageQuery;
}
