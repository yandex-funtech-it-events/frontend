import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_BASE_URL,
    prepareHeaders: (headers) => {
      headers.set(
        'Authorization',
        `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzEzNzI1MjcyLCJpYXQiOjE3MTMxMjA0NzIsImp0aSI6IjMxODI4ZDQ3MzQyZjQ5YTk5NWMxMTgzMjBjMDg0MWYwIiwidXNlcl9pZCI6M30.IP2FJRWp9RHnrw5rMtD28Y9quMWQVGiRGQ2K6ThlW2E`
      );
      return headers;
    },
  }),
  endpoints: () => ({}),
});

export default api;
