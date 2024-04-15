import api from '../../../libs/api.ts';
import { UserType } from '../types';

export const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getCurrentUser: builder.query<UserType, void>({
      query: () => `/users/me`,
    }),
  }),
});

export const { useGetCurrentUserQuery } = userApi;
