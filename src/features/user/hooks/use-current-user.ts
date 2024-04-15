import { useAppSelector } from '../../../libs/store.ts';
import { authSelectors } from '../../auth/slices';
import { useGetCurrentUserQuery } from '../services/user-api.ts';
import { useGetUserFavoritesQuery } from '../services/user-favorites-api.ts';

export const useCurrentUser = () => {
  const { data: userData } = useGetCurrentUserQuery();
  const { data: favoritesEventsData } = useGetUserFavoritesQuery(userData?.id as number);
  const token = useAppSelector(authSelectors.getToken);

  return {
    userInfo: userData,
    favoritesEvents: favoritesEventsData,
    token,
  };
};
