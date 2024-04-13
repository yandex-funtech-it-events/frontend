import { Box, InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import * as React from 'react';
import { ChangeEvent } from 'react';

type SearchProps = {
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  placeholder?: string;
  width?: number;
};

const Search = ({
  value,
  onChange,
  placeholder = 'Поиск по названию',
  width = 331,
}: SearchProps) => {
  return (
    <Box display="flex" alignItems="center">
      <TextField
        value={value}
        onChange={onChange}
        hiddenLabel
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        variant="outlined"
        size="small"
        placeholder={placeholder}
        sx={{
          width: `${width}px`,
        }}
      />
    </Box>
  );
};

export default Search;
