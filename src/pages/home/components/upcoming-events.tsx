import { Box, Typography } from '@mui/material';
import EventList from '../../../features/components/event-list.tsx';

const UpcomingEvents = () => {
  return (
    <Box component="section" display="flex" flexDirection="column" gap={13}>
      <Typography variant="h2">Ближайшие события</Typography>

      <EventList />
    </Box>
  );
};

export default UpcomingEvents;
