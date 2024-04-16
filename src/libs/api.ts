import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from './store.ts';

const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).authSlice?.token;

      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }

      headers.set(
        'Authorization',
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzEzODkzMzUxLCJpYXQiOjE3MTMyODg1NTEsImp0aSI6IjFmN2QxNGMwOTlhYTQzMmM5ODIyZmUxMTZmNzJmYjU5IiwidXNlcl9pZCI6MX0.53VLYVOzXO9EDUnLPCqsRjzRRmbXB4z_GhWajfShx0M'
      );

      return headers;
    },
  }),
  endpoints: () => ({}),
});

export default api;
