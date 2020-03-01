export interface PaginationState {
  pageNumber: number;
  pageSize: number;
  totalPages: number;
  totalElements: number;
}

export const DEFAULT_PAGINATION_STATE: PaginationState = {
  pageNumber: 0,
  pageSize: 10,
  totalPages: 0,
  totalElements: 0
};
