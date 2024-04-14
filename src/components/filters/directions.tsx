import { Box, Chip } from '@mui/material';
import * as React from 'react';

type DirectionsProps = {
  directions: string[];
  activeDirections: string[];
  onClick: (item: string) => void;
};

const Directions = ({ directions, activeDirections, onClick }: DirectionsProps) => {
  return (
    <Box display="flex" gap={3}>
      {directions.map((item) => (
        <Chip
          key={item}
          size="medium"
          label={item}
          onClick={() => onClick(item)}
          sx={{
            color: activeDirections.includes(item) ? 'white' : '',
            background: activeDirections.includes(item) ? 'rgba(0, 0, 0, 0.70)' : '',
            '&:hover': {
              background: activeDirections.includes(item) ? 'rgba(0, 0, 0, 0.87)' : '',
            },
          }}
        />
      ))}
    </Box>
  );
};

export default Directions;
