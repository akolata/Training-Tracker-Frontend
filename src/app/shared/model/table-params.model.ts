import {PageQuery} from './query-params.model';

export const DEFAULT_PAGE_SIZE = 10;
export const TABLE_PAGE_SIZES = [5, 10, 20];
export const DEFAULT_PAGE_QUERY: PageQuery = {
  page: 0,
  size: DEFAULT_PAGE_SIZE
};
