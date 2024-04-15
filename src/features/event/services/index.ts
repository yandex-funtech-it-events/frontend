import api from '../../../libs/api.ts';
import { EventType } from '../types';

export const eventApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getEvents: builder.query<EventType[], void>({
      query: () => `/events/`,
    }),
  }),
});

export const { useGetEventsQuery } = eventApi;
