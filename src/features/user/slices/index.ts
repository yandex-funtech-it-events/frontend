import { createSlice } from '@reduxjs/toolkit';
import { userApi } from '../services/user-api.ts';
import { FavoriteType, UserType } from '../types';
import { userFavoritesApi } from '../services/user-favorites-api.ts';

type UserStateType = {
  user: UserType | null;
  favoritesEvents: FavoriteType[];
};

const initialState: UserStateType = {
  user: null,
  favoritesEvents: [],
};

export const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(userApi.endpoints.getCurrentUser.matchFulfilled, (state, { payload }) => {
      state.user = payload;
    });
    builder.addMatcher(
      userFavoritesApi.endpoints.getUserFavorites.matchFulfilled,
      (state, { payload }) => {
        state.favoritesEvents = payload;
      }
    );
  },
  selectors: {
    getCurrentUser: (state) => state.user,
    getFavoritesEvents: (state) => state.favoritesEvents,
  },
});

export const { actions: userActions, selectors: userSelectors } = userSlice;
