import React from 'react';
import { Typography, Box } from '@mui/material';

const Speakers: React.FC = () => {
  return (
    <Box component="section" display="flex" flexDirection="column">
      <Typography component="h2" variant="h2" mb={5}>
        Спикеры
      </Typography>
      {}
    </Box>
  );
};

export default Speakers;
