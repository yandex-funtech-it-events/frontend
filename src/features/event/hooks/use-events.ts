import { useCurrentUser } from '../../user/hooks/use-current-user.ts';
import { useGetEventsQuery } from '../services';

export const useEvents = () => {
  const { data: events, isLoading } = useGetEventsQuery();
  const { userInfo, favoritesEvents } = useCurrentUser();

  return {
    events,
    isLoading,
  };
};
