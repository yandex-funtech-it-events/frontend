import React from 'react';

import { Box, Chip } from '@mui/material';
import { mockChipsArray } from '../../../libs/constants';

const Chips: React.FC = () => {
  return (
    <Box display="flex">
      {mockChipsArray.map((chip, i) => (
        <Chip label={chip} key={i} />
      ))}
    </Box>
  );
};

export default Chips;
