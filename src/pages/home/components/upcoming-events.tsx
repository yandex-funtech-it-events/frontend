import { Box, Typography } from '@mui/material';
import EventList from '../../../features/event/components/event-list.tsx';
import { posterImages } from '../../../libs/constants.ts';

const UpcomingEvents = () => {
  return (
    <Box component="section" display="flex" flexDirection="column" gap={13}>
      <Typography variant="h2">Ближайшие события</Typography>

      <EventList events={posterImages.slice(0, 4)} />
    </Box>
  );
};

export default UpcomingEvents;
