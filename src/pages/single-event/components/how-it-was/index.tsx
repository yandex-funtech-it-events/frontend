import React from 'react';
import { Box, Typography, Container } from '@mui/material';

import Carousel from './components/carousel';

const HowItWas: React.FC = () => {
  return (
    <Container>
      <Box
        id="howitwas"
        component="section"
        display="flex"
        flexDirection="column"
        alignItems="center"
        mb={20}
      >
        <Typography component="h2" variant="h3" mb={10} alignSelf="start">
          Как это было в прошлый раз
        </Typography>

        <Carousel />
      </Box>
    </Container>
  );
};

export default HowItWas;
