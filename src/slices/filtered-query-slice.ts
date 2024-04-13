import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FilteredQueryType } from '../types';

type FilteredQueryStateType = {
  query: FilteredQueryType;
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
};

export const filteredQuerySlice = createSlice({
  name: 'filteredQuerySlice',
  initialState,
  reducers: {
    setFilteredQuery: (state, action: PayloadAction<Partial<FilteredQueryType>>) => {
      state.query = { ...state.query, ...action.payload };
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
    },
  },
  selectors: {
    getFilteredQuery: (state) => state.query,
  },
});

export const { actions: filteredQueryActions, selectors: filteredQuerySelectors } =
  filteredQuerySlice;
