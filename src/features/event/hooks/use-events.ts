import { useGetEventsQuery } from '../services';

export const useEvents = () => {
  const { data: events, isLoading } = useGetEventsQuery();

  return {
    events,
    isLoading,
  };
};
