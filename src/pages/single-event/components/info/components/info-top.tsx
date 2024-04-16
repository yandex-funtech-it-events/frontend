import React from 'react';
import { Box, Typography, Chip } from '@mui/material';
import { useAppSelector } from '../../../../../libs/store';
import { eventSelectors } from '../../../../../features/event/slices';

const InfoTop: React.FC = () => {
  const event = useAppSelector(eventSelectors.getEvent);

  return (
    <Box display="flex" justifyContent="space-between" mb={25}>
      <Box display="flex" flexDirection="column" gap={6}>
        <Typography component="span" variant="h6">
          {`${event?.date_start} - ${event?.date_end}`}
        </Typography>
        <Typography component="span" variant="h6">
          {event?.city}
        </Typography>
        <Typography component="span" variant="h6">
          {event?.format}
        </Typography>
      </Box>
      <Chip label="Регистрация открыта" />
    </Box>
  );
};

export default InfoTop;
