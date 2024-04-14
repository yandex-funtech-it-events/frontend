import React from 'react';
import { Typography, Box, Container } from '@mui/material';
import FullInfo from './components/full-info';

const AboutEvent: React.FC = () => {
  return (
    <Container sx={{ background: '#fff' }}>
      <Box
        component="section"
        display="flex"
        flexDirection="column"
        alignItems="center"
        mb={15}
        mt={20}
      >
        <Typography component="h2" variant="h3" mb={5} alignSelf="start">
          Название мероприятия
        </Typography>
        <FullInfo />
      </Box>
    </Container>
  );
};

export default AboutEvent;
