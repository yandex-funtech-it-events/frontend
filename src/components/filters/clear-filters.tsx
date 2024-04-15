import { IconButton } from '@mui/material';
import { CloseOutlined } from '@mui/icons-material';
import * as React from 'react';

type ClearFiltersProps = {
  onClick: () => void;
};

const ClearFilters = ({ onClick }: ClearFiltersProps) => {
  return (
    <IconButton
      onClick={onClick}
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
  );
};

export default ClearFilters;
