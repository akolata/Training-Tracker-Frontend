import * as fromSharedModel from '../model';

export function materialSortToSortQuery(property, sortDirection) {
  const direction: fromSharedModel.SortDirection = sortDirection === "asc"
    ? fromSharedModel.SortDirection.ASC
    : sortDirection === "desc"
      ? fromSharedModel.SortDirection.DESC
      : null;
  return {
    property,
    direction
  };
}

export function materialPageToPageQuery(size, page) {
  return {
    page,
    size
  };
}
