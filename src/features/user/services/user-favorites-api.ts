import api from '../../../libs/api.ts';
import { FavoriteType } from '../types';

export const userFavoritesApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getUserFavorites: builder.query<FavoriteType[], number>({
      query: (id) => `/favorites/${id}`,
    }),
  }),
});

export const { useGetUserFavoritesQuery } = userFavoritesApi;
