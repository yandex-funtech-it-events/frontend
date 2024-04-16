import { useAppDispatch, useAppSelector } from '../libs/store.ts';
import { Dayjs } from 'dayjs';
import { filteredQueryActions, filteredQuerySelectors } from '../slices/filtered-query-slice.ts';

export const useFilteredQuery = () => {
  const query = useAppSelector(filteredQuerySelectors.getFilteredQuery);
  const dispatch = useAppDispatch();
  const hasQuery = Object.values(query).some((item) => {
    if (Array.isArray(item)) {
      return item.length !== 0;
    } else {
      return Boolean(item);
    }
  });

  const handleChangeFilteredQuery = (
    key: string,
    value: string[] | string | boolean | Dayjs | null
  ) => {
    dispatch(
      filteredQueryActions.setFilteredQuery({
        [key]: value,
      })
    );
  };

  const handleResetFilteredQuery = () => {
    dispatch(filteredQueryActions.resetFilteredQueries());
  };

  return {
    ...query,
    hasQuery,
    onChange: handleChangeFilteredQuery,
    onReset: handleResetFilteredQuery,
  };
};
