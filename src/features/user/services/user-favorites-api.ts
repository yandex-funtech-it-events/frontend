import api from '../../../libs/api.ts';
import { FavoriteType } from '../types';

export const userFavoritesApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getUserFavorites: builder.query<FavoriteType[], void>({
      query: () => `/favorites/`,
    }),
    createUserFavorite: builder.mutation<FavoriteType, Omit<FavoriteType, 'id'>>({
      query: (body) => ({
        url: `/favorites/`,
        method: 'POST',
        body,
      }),
    }),
    deleteUserFavoriteByEventId: builder.mutation<void, number>({
      query: (id) => ({
        url: `/favorites/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useGetUserFavoritesQuery,
  useCreateUserFavoriteMutation,
  useDeleteUserFavoriteByEventIdMutation,
} = userFavoritesApi;
