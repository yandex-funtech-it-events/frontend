import api from '../../../libs/api.ts';
import { FavoriteType } from '../types';

export const userFavoritesApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getUserFavorites: builder.query<FavoriteType[], void>({
      query: () => `/favorites/`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Favorites' as const, id })),
              { type: 'Favorites', id: 'LIST' },
            ]
          : [{ type: 'Favorites', id: 'LIST' }],
    }),
    createUserFavorite: builder.mutation<FavoriteType, Omit<FavoriteType, 'id'>>({
      query: (body) => ({
        url: `/favorites/`,
        method: 'POST',
        body,
      }),
      invalidatesTags: (result) => [{ type: 'Favorites', id: result?.id }, { type: 'Favorites' }],
    }),
    deleteUserFavoriteByEventId: builder.mutation<void, number>({
      query: (id) => ({
        url: `/favorites/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: () => [{ type: 'Favorites' }],
    }),
  }),
});

export const {
  useGetUserFavoritesQuery,
  useCreateUserFavoriteMutation,
  useDeleteUserFavoriteByEventIdMutation,
} = userFavoritesApi;
