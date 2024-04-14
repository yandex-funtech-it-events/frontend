import React from 'react';
import { Typography, Box } from '@mui/material';
import FullInfo from './components/full-info';

const AboutEvent: React.FC = () => {
  return (
    <Box
      component="section"
      display="flex"
      flexDirection="column"
      alignItems="center"
      mb={15}
      mt={20}
    >
      <Typography
        component="h2"
        variant="h3"
        mb={5}
        sx={{ letterSpacing: '1px', textAlign: 'start' }}
        alignSelf="start"
      >
        Название мероприятия
      </Typography>
      <FullInfo />
    </Box>
  );
};

export default AboutEvent;
