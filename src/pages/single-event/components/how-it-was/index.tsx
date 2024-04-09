import React from 'react';
import { Box, Typography } from '@mui/material';

const HowItWas: React.FC = () => {
  return (
    <Box component="section" display="flex" flexDirection="column" alignItems="center" mb={16}>
      <Typography component="h2" variant="h2" mb={8} alignSelf="start">
        Как это было
        <br /> в прошлый раз
      </Typography>
    </Box>
  );
};

export default HowItWas;
