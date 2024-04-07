import React from 'react';

import { Box, Chip } from '@mui/material';

const Chips: React.FC = () => {
  const mockChipsArray = ['теги', 'теги', 'теги', 'теги', 'теги', 'теги', 'теги'];

  return (
    <Box display="flex" mt={3} mb={3}>
      {mockChipsArray.map((chip, i) => (
        <Chip label={chip} key={i} />
      ))}
    </Box>
  );
};

export default Chips;
