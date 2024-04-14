import {
  IconButton,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  Typography,
} from '@mui/material';
import { CloseOutlined } from '@mui/icons-material';
import CheckIcon from '@mui/icons-material/Check';
import * as React from 'react';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

type MultiSelectProps = {
  options: never[];
  value?: never[];
  onChange?: (event: SelectChangeEvent<never[]>) => void;
  onReset?: () => void;
  placeholder?: string;
};

const MultiSelect = ({
  value,
  onReset,
  onChange,
  placeholder = 'Город',
  options,
}: MultiSelectProps) => {
  return (
    <Select
      multiple
      displayEmpty
      value={value}
      onChange={onChange}
      input={
        <OutlinedInput
          endAdornment={
            value?.length && value?.length > 0 ? (
              <IconButton
                onClick={onReset}
                sx={{
                  marginRight: '10px',
                }}
              >
                <CloseOutlined />
              </IconButton>
            ) : null
          }
        />
      }
      renderValue={(selected) => {
        if (selected?.length === 0) {
          return (
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{
                opacity: '.6',
              }}
            >
              {placeholder}
            </Typography>
          );
        }

        return selected?.join(', ');
      }}
      MenuProps={MenuProps}
      sx={{
        maxWidth: '280px',
        width: '100%',
        height: '40px',
      }}
    >
      {options.map((name) => (
        <MenuItem
          key={name}
          value={name}
          sx={{
            justifyContent: 'space-between',
          }}
        >
          {name}
          {value?.includes(name) ? <CheckIcon /> : null}
        </MenuItem>
      ))}
    </Select>
  );
};

export default MultiSelect;
