import { useAppSelector } from '../../../libs/store.ts';
import { authSelectors } from '../../auth/slices';
import { useGetCurrentUserQuery } from '../services/user-api.ts';

export const useCurrentUser = () => {
  const { data: userData } = useGetCurrentUserQuery();
  const token = useAppSelector(authSelectors.getToken);

  return {
    userInfo: userData,
    token,
  };
};
