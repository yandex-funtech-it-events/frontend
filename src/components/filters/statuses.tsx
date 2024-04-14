import { Box, Chip } from '@mui/material';
import * as React from 'react';

type StatusesProps = {
  statuses: {
    label: string;
  }[];
  format: string;
  onClick: (item: string) => void;
};

const Statuses = ({ statuses, format, onClick }: StatusesProps) => {
  return (
    <Box display="flex" gap={3}>
      {statuses.map((item) => (
        <Chip
          key={item.label}
          size="medium"
          label={item.label}
          onClick={() => onClick(item.label)}
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
  );
};

export default Statuses;
