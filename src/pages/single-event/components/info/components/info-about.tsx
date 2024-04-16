import React from 'react';

import { Box, Typography, Button } from '@mui/material';
import { useAppSelector } from '../../../../../libs/store';
import { eventSelectors } from '../../../../../features/event/slices';

import Chips from '../../chips';

const InfoAbout: React.FC = () => {
  const event = useAppSelector(eventSelectors.getEvent);

  return (
    <Box>
      <Typography component="h2" variant="h3" mb={5}>
        {event?.title}
      </Typography>
      <Chips />
      <Typography
        component="p"
        variant="body1"
        sx={{ height: '168px', marginBottom: '78px' }}
        mt={5}
      >
        {event?.description}
      </Typography>

      <Button
        variant="contained"
        style={{
          display: 'flex',
          padding: '30px',
          width: '100%',
          letterSpacing: '1px',
          textTransform: 'uppercase',
        }}
      >
        Зарегистрироваться
      </Button>
    </Box>
  );
};

export default InfoAbout;
