import api from '../../../libs/api.ts';
import { EventType } from '../types';

export const eventApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getEvents: builder.query<EventType[], void>({
      query: () => `/events/`,
    }),
    getEventById: builder.query<EventType, string>({
      query: (id) => `/events/${id}/`,
    }),
  }),
});

export const { useGetEventsQuery, useGetEventByIdQuery } = eventApi;
