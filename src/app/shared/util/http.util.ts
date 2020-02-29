import * as fromSharedModel from '../model';
import {Query} from "@angular/core";

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
