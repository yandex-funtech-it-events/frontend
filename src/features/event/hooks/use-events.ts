import { useGetEventsQuery } from '../services';
import { useGetUserFavoritesQuery } from '../../user/services/user-favorites-api.ts';
import { useCurrentUser } from '../../user/hooks/use-current-user.ts';

export const useEvents = () => {
  const { userInfo } = useCurrentUser();
  const { data: events, isLoading } = useGetEventsQuery();
  const { data: favoritesEventsData } = useGetUserFavoritesQuery();
  const favorites = favoritesEventsData?.filter((event) => event.user === userInfo?.id) || [];

  return {
    events,
    isLoading,
    favorites,
  };
};
