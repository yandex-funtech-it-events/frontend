import { useAppSelector } from '../../../libs/store.ts';
import { authSelectors } from '../../auth/slices';
import { useGetCurrentUserQuery } from '../services/user-api.ts';
import { useGetUserFavoritesQuery } from '../services/user-favorites-api.ts';

export const useCurrentUser = () => {
  const { data: userData } = useGetCurrentUserQuery();
  const { data: favoritesEventsData } = useGetUserFavoritesQuery();
  const favorites = favoritesEventsData?.filter((event) => event.user === userData?.id) || [];
  const token = useAppSelector(authSelectors.getToken);

  return {
    userInfo: userData,
    favoritesEvents: favorites,
    token,
  };
};
