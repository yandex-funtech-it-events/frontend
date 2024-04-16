import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FilteredQueryType } from '../types';

type FilteredQueryStateType = {
  query: FilteredQueryType;
  signal: boolean;
};

const initialState: FilteredQueryStateType = {
  query: {
    cities: [],
    directions: [],
    activeDirection: '',
    tags: [],
    format: '',
    isOpenRegister: false,
    search: '',
    date: null,
  },
  signal: false,
};

export const filteredQuerySlice = createSlice({
  name: 'filteredQuerySlice',
  initialState,
  reducers: {
    setFilteredQuery: (state, action: PayloadAction<Partial<FilteredQueryType>>) => {
      state.query = { ...state.query, ...action.payload };
      state.signal = true;
    },
    resetFilteredQueries: (state) => {
      state.query = {
        cities: [],
        directions: [],
        activeDirection: '',
        tags: [],
        format: '',
        isOpenRegister: false,
        search: '',
        date: null,
      };
      state.signal = false;
    },
  },
  selectors: {
    getFilteredQuery: (state) => state.query,
    getFilteredSignal: (state) => state.signal,
  },
});

export const { actions: filteredQueryActions, selectors: filteredQuerySelectors } =
  filteredQuerySlice;
