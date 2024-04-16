import { useGetFilteredEventsQuery } from '../services/filtered-events-api.ts';
import { convertQuery } from '../libs/utils.ts';
import { useAppSelector } from '../libs/store.ts';
import { filteredQuerySelectors } from '../slices/filtered-query-slice.ts';

export const useFilteredEvents = () => {
  const query = useAppSelector(filteredQuerySelectors.getFilteredQuery);
  const signal = useAppSelector(filteredQuerySelectors.getFilteredSignal);
  const convertedQuery = convertQuery(query);
  const { data, isLoading } = useGetFilteredEventsQuery(convertedQuery);

  return {
    data,
    isLoading,
    signal,
  };
};
