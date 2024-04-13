import { Dayjs } from 'dayjs';

export type FilterDirectionType = {
  [k: string]: {
    directions: string[];
  };
};

export type FiltersType = {
  cities: string[];
  directions: string[];
  activeDirection: string;
  tags: string[];
  format: string;
  isOpenRegister: boolean;
  search: string;
  date: Dayjs | null;
};
