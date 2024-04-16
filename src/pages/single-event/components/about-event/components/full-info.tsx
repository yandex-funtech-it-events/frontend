import React from 'react';
import { Typography, Box } from '@mui/material';
import Chips from '../../chips';
import { useAppSelector } from '../../../../../libs/store';
import { eventSelectors } from '../../../../../features/event/slices';

const FullInfo: React.FC = () => {
  const event = useAppSelector(eventSelectors.getEvent);
  return (
    <Box display="flex" flexDirection="column" maxWidth="912px">
      <Box display="flex" gap={7} mb={6}>
        <Typography variant="h6">{`${event?.date_start} - ${event?.date_end}`}</Typography>
        <Typography variant="h6">{event?.city}</Typography>
        <Typography variant="h6">{event?.format}</Typography>
      </Box>

      <Chips />

      <Typography variant="body1" component="p" maxWidth="912px" mt={6}>
        {event?.description}
      </Typography>
    </Box>
  );
};

export default FullInfo;
