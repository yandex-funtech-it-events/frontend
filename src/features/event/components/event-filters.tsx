import {
  Box,
  Chip,
  FormControlLabel,
  IconButton,
  SelectChangeEvent,
  Stack,
  Switch,
} from '@mui/material';
import * as React from 'react';
import { CloseOutlined } from '@mui/icons-material';
import { DatePicker } from '@mui/x-date-pickers';
import {
  citiesMock,
  defaultFilterValues,
  filtersDirectionsMock,
  filtersStatusMock,
} from '../../../libs/constants.ts';
import { useState } from 'react';
import { FiltersType } from '../../../types';
import Search from '../../../components/search.tsx';
import MultiSelect from '../../../components/multi-select.tsx';

const EventFilters = () => {
  const [filterState, setFilterState] = useState<FiltersType>({
    cities: [],
    directions: [],
    activeDirection: '',
    tags: [],
    format: '',
    isOpenRegister: false,
    search: '',
    date: null,
  });

  const handleChangeSelect = (event: SelectChangeEvent<typeof filterState.cities>) => {
    const {
      target: { value },
    } = event;

    setFilterState((prev) => ({
      ...prev,
      cities: typeof value === 'string' ? value.split(',') : value,
    }));
  };

  return (
    <Stack
      pt={8}
      pb={10}
      px={8}
      spacing={8}
      borderRadius={5}
      sx={{
        border: '1px solid black',
      }}
    >
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Box width={1} display="flex" alignItems="center" gap={10}>
          <Search
            value={filterState.search}
            onChange={(e) => {
              setFilterState((prev) => ({
                ...prev,
                search: e.target.value,
              }));
            }}
          />

          <MultiSelect
            options={citiesMock}
            value={filterState.cities}
            onChange={handleChangeSelect}
            onReset={() =>
              setFilterState((prev) => ({
                ...prev,
                cities: [],
              }))
            }
          />

          <DatePicker
            value={filterState.date}
            onChange={(value) => {
              setFilterState((prev) => ({
                ...prev,
                date: value,
              }));
            }}
            slotProps={{ textField: { placeholder: 'Выбор даты' } }}
            format="DD/MM/YYYY"
            sx={{
              width: '280px',
              '& .MuiInputBase-root': {
                height: '40px',
              },
            }}
          />

          <FormControlLabel
            control={
              <Switch
                checked={filterState.isOpenRegister}
                onChange={(e) => {
                  setFilterState((prev) => ({
                    ...prev,
                    isOpenRegister: e.target.checked,
                  }));
                }}
              />
            }
            label="Открыта регистрация"
          />
        </Box>

        {Object.values(filterState).some((item) => {
          if (Array.isArray(item)) {
            return item.length !== 0;
          } else {
            return Boolean(item);
          }
        }) && (
          <IconButton
            onClick={() => {
              setFilterState(defaultFilterValues);
            }}
            sx={{
              background: '#FF4D00',
              '&:hover': {
                background: '#FF6E2C',
              },
            }}
          >
            <CloseOutlined
              sx={{
                color: 'white',
              }}
            />
          </IconButton>
        )}
      </Box>

      {filterState.tags.length > 0 && (
        <Box display="flex" flexWrap="wrap" gap={3}>
          {filterState.tags.map((item) => (
            <Chip
              key={item}
              size="medium"
              variant="outlined"
              label={item}
              onDelete={() =>
                setFilterState((prev) => ({
                  ...prev,
                  tags: filterState.tags.filter((tag) => tag !== item),
                }))
              }
            />
          ))}
        </Box>
      )}

      <Box display="flex" alignItems="center" gap={10}>
        <Box display="flex" gap={3}>
          {Object.keys(filtersDirectionsMock).map((item) => (
            <Chip
              key={item}
              size="medium"
              label={item}
              onClick={() => {
                if (!filterState.directions.includes(item)) {
                  setFilterState((prev) => ({
                    ...prev,
                    directions: [...prev.directions, item],
                  }));
                }

                setFilterState((prev) => ({
                  ...prev,
                  activeDirection: filterState.activeDirection === item ? '' : item,
                }));
              }}
              sx={{
                color: filterState.directions.includes(item) ? 'white' : '',
                background: filterState.directions.includes(item) ? 'rgba(0, 0, 0, 0.70)' : '',
                '&:hover': {
                  background: filterState.directions.includes(item) ? 'rgba(0, 0, 0, 0.87)' : '',
                },
              }}
            />
          ))}
        </Box>

        <Box display="flex" gap={3}>
          {filtersStatusMock.map((item) => (
            <Chip
              key={item.label}
              size="medium"
              label={item.label}
              onClick={() => {
                setFilterState((prev) => ({
                  ...prev,
                  format: item.label,
                }));
              }}
              sx={{
                color: filterState.format === item.label ? 'white' : '',
                background: filterState.format === item.label ? 'rgba(0, 0, 0, 0.70)' : '',
                '&:hover': {
                  background: filterState.format === item.label ? 'rgba(0, 0, 0, 0.87)' : '',
                },
              }}
            />
          ))}
        </Box>
      </Box>

      {filtersDirectionsMock[filterState.activeDirection]?.directions.length > 0 &&
        filterState.activeDirection && (
          <Box
            px={4}
            py={5}
            display="flex"
            justifyContent="space-between"
            gap={7}
            borderRadius={4}
            sx={{
              background: 'rgba(20, 18, 22, 0.05)',
            }}
          >
            <Box display="flex" flexWrap="wrap" gap={3}>
              {filtersDirectionsMock[filterState.activeDirection]?.directions.map((el) => {
                if (filterState.tags.includes(el)) {
                  return (
                    <Chip
                      key={el}
                      size="medium"
                      variant="outlined"
                      label={el}
                      onClick={() => {
                        setFilterState((prev) => ({
                          ...prev,
                          tags: [...prev.tags, el],
                        }));
                      }}
                      onDelete={() => {
                        setFilterState((prev) => ({
                          ...prev,
                          tags: filterState.tags.filter((tag) => tag !== el),
                        }));
                      }}
                    />
                  );
                } else {
                  return (
                    <Chip
                      key={el}
                      size="medium"
                      variant="outlined"
                      label={el}
                      onClick={() => {
                        setFilterState((prev) => ({
                          ...prev,
                          tags: [...prev.tags, el],
                        }));
                      }}
                    />
                  );
                }
              })}
            </Box>

            <IconButton
              onClick={() => {
                setFilterState((prev) => ({
                  ...prev,
                  activeDirection: '',
                }));
              }}
              sx={{
                alignSelf: 'flex-start',
              }}
            >
              <CloseOutlined />
            </IconButton>
          </Box>
        )}
    </Stack>
  );
};

export default EventFilters;
