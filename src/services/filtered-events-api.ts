import api from '../libs/api.ts';
import { EventType } from '../features/event/types';

export const filteredEventsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getFilteredEvents: builder.query<EventType[], string | void>({
      query: (query) => `/events/${query}`,
    }),
  }),
});

export const { useGetFilteredEventsQuery } = filteredEventsApi;
