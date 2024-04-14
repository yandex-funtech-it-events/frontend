import { createSlice } from '@reduxjs/toolkit';
import { EventType } from '../types';
import { eventApi } from '../services';

type EventStateType = {
  events: EventType[];
};

const initialState: EventStateType = {
  events: [],
};

export const eventSlice = createSlice({
  name: 'eventSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(eventApi.endpoints.getEvents.matchFulfilled, (state, { payload }) => {
      state.events = payload;
    });
  },
  selectors: {
    getEvents: (state) => state.events,
  },
});

export const { actions: eventActions, selectors: eventSelectors } = eventSlice;