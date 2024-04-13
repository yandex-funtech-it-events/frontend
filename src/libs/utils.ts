import { FilteredQueryType } from '../types';

export const convertQuery = (query: FilteredQueryType) => {
  const queryArr = [];

  for (const key in query) {
    const value = query[key as keyof FilteredQueryType];
    if (Array.isArray(value)) {
      for (const elem of value) {
        queryArr.push(`${key}=${elem}`);
      }
    } else if (value) {
      queryArr.push(`${key}=${value}`);
    }
  }

  const queryStr = queryArr.join('&');

  return queryStr ? `?${queryStr}` : '';
};
