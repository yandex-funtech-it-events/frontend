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
import { citiesMock, filtersDirectionsMock, filtersStatusMock } from '../../../libs/constants.ts';
import Search from '../../../components/search.tsx';
import MultiSelect from '../../../components/multi-select.tsx';
import { useFilteredQuery } from '../../../hooks/use-filtered-query.ts';

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

        {hasQuery && (
          <IconButton
            onClick={onReset}
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

      {tags.length > 0 && (
        <Box display="flex" flexWrap="wrap" gap={3}>
          {tags.map((item) => (
            <Chip
              key={item}
              size="medium"
              variant="outlined"
              label={item}
              onDelete={() =>
                onChange(
                  'tags',
                  tags.filter((tag) => tag !== item)
                )
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
                if (!directions.includes(item)) {
                  onChange('directions', [...directions, item]);
                }

                onChange('activeDirection', activeDirection === item ? '' : item);
              }}
              sx={{
                color: directions.includes(item) ? 'white' : '',
                background: directions.includes(item) ? 'rgba(0, 0, 0, 0.70)' : '',
                '&:hover': {
                  background: directions.includes(item) ? 'rgba(0, 0, 0, 0.87)' : '',
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
                onChange('format', item.label);
              }}
              sx={{
                color: format === item.label ? 'white' : '',
                background: format === item.label ? 'rgba(0, 0, 0, 0.70)' : '',
                '&:hover': {
                  background: format === item.label ? 'rgba(0, 0, 0, 0.87)' : '',
                },
              }}
            />
          ))}
        </Box>
      </Box>

      {filtersDirectionsMock[activeDirection]?.directions.length > 0 && activeDirection && (
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
            {filtersDirectionsMock[activeDirection]?.directions.map((el) => {
              if (tags.includes(el)) {
                return (
                  <Chip
                    key={el}
                    size="medium"
                    variant="outlined"
                    label={el}
                    onClick={() => {
                      onChange('tags', [...tags, el]);
                    }}
                    onDelete={() => {
                      onChange(
                        'tags',
                        tags.filter((tag) => tag !== el)
                      );
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
                      onChange('tags', [...tags, el]);
                    }}
                  />
                );
              }
            })}
          </Box>

          <IconButton
            onClick={() => {
              onChange('activeDirection', '');
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
