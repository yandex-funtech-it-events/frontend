import React from 'react';
import { Typography, Box, Container } from '@mui/material';
import FullInfo from './components/full-info';
import { useAppSelector } from '../../../../libs/store';
import { eventSelectors } from '../../../../features/event/slices';

const AboutEvent: React.FC = () => {
  const event = useAppSelector(eventSelectors.getEvent);
  console.log(event);

  return (
    <Container>
      <Box
        id="about"
        component="section"
        display="flex"
        flexDirection="column"
        alignItems="center"
        mb={15}
        mt={20}
      >
        <Typography component="h2" variant="h3" mb={5} alignSelf="start">
          {event?.title}
        </Typography>
        <FullInfo />
      </Box>
    </Container>
  );
};

export default AboutEvent;
