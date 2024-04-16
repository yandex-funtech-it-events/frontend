import api from '../../../libs/api.ts';
import { EventType, ReportsType } from '../types';

export const eventApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getEvents: builder.query<EventType[], void>({
      query: () => `/events/`,
    }),
    getEventsById: builder.query<EventType, string>({
      query: (id) => `/events/${id}/`,
    }),
    getAllReports: builder.query<ReportsType[], string>({
      query: (event_id) => `/reports/${event_id}/`,
    }),
  }),
});

export const { useGetEventsQuery, useGetEventsByIdQuery, useGetAllReportsQuery } = eventApi;
