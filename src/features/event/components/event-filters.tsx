import { Box, FormControlLabel, SelectChangeEvent, Stack, Switch } from '@mui/material';
import * as React from 'react';
import { DatePicker } from '@mui/x-date-pickers';
import { citiesMock, filtersDirectionsMock, filtersStatusMock } from '../../../libs/constants.ts';
import Search from '../../../components/search.tsx';
import MultiSelect from '../../../components/multi-select.tsx';
import { useFilteredQuery } from '../../../hooks/use-filtered-query.ts';
import ClearFilters from '../../../components/filters/clear-filters.tsx';
import Tags from '../../../components/filters/tags.tsx';
import Directions from '../../../components/filters/directions.tsx';
import Statuses from '../../../components/filters/statuses.tsx';
import SubDirections from '../../../components/filters/sub-directions.tsx';

const EventFilters = () => {
  const {
    cities,
    tags,
    directions,
    activeDirection,
    format,
    isOpenRegister,
    search,
    date,
    onReset,
    onChange,
    hasQuery,
  } = useFilteredQuery();

  const handleChangeSelect = (event: SelectChangeEvent<typeof cities>) => {
    const {
      target: { value },
    } = event;
    onChange('cities', typeof value === 'string' ? value.split(',') : value);
  };

  return (
    <Stack
      pt={8}
      pb={10}
      px={8}
      spacing={8}
      borderRadius={5}
      sx={{
        border: '1px solid rgba(0, 0, 0, 0.12)',
      }}
    >
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Box width={1} display="flex" alignItems="center" gap={10}>
          <Search
            value={search}
            onChange={(e) => {
              onChange('search', e.target.value);
            }}
          />

          <MultiSelect
            options={citiesMock}
            value={cities}
            onChange={handleChangeSelect}
            onReset={() => {
              onChange('cities', []);
            }}
          />

          <DatePicker
            value={date}
            onChange={(value) => {
              onChange('date', value);
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
                checked={isOpenRegister}
                onChange={(e) => {
                  onChange('isOpenRegister', e.target.checked);
                }}
              />
            }
            label="Открыта регистрация"
          />
        </Box>

        {hasQuery && <ClearFilters onClick={onReset} />}
      </Box>

      {tags.length > 0 && (
        <Tags
          tags={tags}
          onDelete={(item) =>
            onChange(
              'tags',
              tags.filter((tag) => tag !== item)
            )
          }
        />
      )}

      <Box display="flex" alignItems="center" gap={10}>
        <Directions
          onClick={(item) => {
            if (!directions.includes(item)) {
              onChange('directions', [...directions, item]);
            }

            onChange('activeDirection', activeDirection === item ? '' : item);
          }}
          directions={Object.keys(filtersDirectionsMock)}
          activeDirections={directions}
        />

        <Statuses
          statuses={filtersStatusMock}
          format={format}
          onClick={(item) => {
            onChange('format', item);
          }}
        />
      </Box>

      {filtersDirectionsMock[activeDirection]?.directions.length > 0 && activeDirection && (
        <SubDirections
          directions={filtersDirectionsMock[activeDirection]?.directions}
          tags={tags}
          onClick={(item) => onChange('tags', [...tags, item])}
          onDelete={(item) =>
            onChange(
              'tags',
              tags.filter((tag) => tag !== item)
            )
          }
          onClose={() => {
            onChange('activeDirection', '');
          }}
        />
      )}
    </Stack>
  );
};

export default EventFilters;
