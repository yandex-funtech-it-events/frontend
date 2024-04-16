import { combineSlices, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import api from './api.ts';
import { filteredQuerySlice } from '../slices/filtered-query-slice.ts';
import { eventSlice } from '../features/event/slices';
import { modalSlice } from '../slices/modal-slice.ts';
import { userSlice } from '../features/user/slices';
import { authSlice } from '../features/auth/slices';

const rootReducer = combineSlices(
  api,
  authSlice,
  filteredQuerySlice,
  eventSlice,
  modalSlice,
  userSlice
);

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
  devTools: process.env.NODE_ENV !== 'production',
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default store;
