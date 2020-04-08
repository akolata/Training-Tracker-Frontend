import * as fromSharedModel from '../model';
import {HttpHeaders} from "@angular/common/http";
import * as moment from 'moment';

export function toHttpParams(obj: any) {
  const params: any = {};
  Object.entries(obj)
    .forEach((entry: any[]) => {
      let value = entry[1];
      if (value !== null && value !== '') {
        switch (value.constructor.name) {
          case 'String':
            value = value.toString().trim();
            break;
          case 'Number':
            value = value.toString().trim().replace(',', '.');
            break;
          case 'Date':
            value = (<Date>value).toISOString();
            break;
          case 'Moment':
            value = moment(value).toISOString();
        }
        params[entry[0]] = value;

      }

    });
  return params;
}

export function sortQueryToHttpParams(sortQuery: fromSharedModel.SortQuery) {
  if (!sortQuery || !sortQuery.property) {
    return {};
  }
  if (!sortQuery.direction) {
    return {sort: sortQuery.property};
  }
  return {sort: `${sortQuery.property},${sortQuery.direction}`};
}

export function pageQueryToHttpParams(pageQuery: fromSharedModel.PageQuery) {
  let query = {...pageQuery};
  if (query.page) {
    query.page += 1;
  }
  return query;
}

export function httpHeadersToPagination(headers: HttpHeaders) {
  let pageNumber = +headers.get('Page-Number');
  if (pageNumber) {
    pageNumber -= 1;
  }
  return {
    pageNumber,
    pageSize: +headers.get('Page-Size'),
    totalPages: +headers.get('Page-Total-Pages'),
    totalElements: +headers.get('Page-Total-Elements')
  };
}
