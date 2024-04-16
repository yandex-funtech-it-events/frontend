import { createSlice } from '@reduxjs/toolkit';
import { EventType, ReportsType } from '../types';
import { eventApi } from '../services';

type EventStateType = {
  events: EventType[];
  event: EventType | null;
  reports: ReportsType[];
};

const initialState: EventStateType = {
  events: [],
  event: null,
  reports: [],
};

export const eventSlice = createSlice({
  name: 'eventSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(eventApi.endpoints.getEvents.matchFulfilled, (state, { payload }) => {
      state.events = payload;
    });
    builder.addMatcher(eventApi.endpoints.getEventsById.matchFulfilled, (state, { payload }) => {
      state.event = payload;
    });
  },
  selectors: {
    getEvents: (state) => state.events,
    getEvent: (state) => state.event,
  },
});

export const { actions: eventActions, selectors: eventSelectors } = eventSlice;
