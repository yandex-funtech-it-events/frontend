import { Box, Typography } from '@mui/material';
import EventList from '../../../features/event/components/event-list.tsx';
import { posterImages } from '../../../libs/constants.ts';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const UpcomingEvents = () => {
  return (
    <Box component="section" display="flex" flexDirection="column" gap={13}>
      <Box display="flex" alignItems="center" gap={1}>
        <Typography variant="h2">Ближайшие события </Typography>
        <ChevronRightIcon fontSize="large" />
      </Box>

      <EventList events={posterImages.slice(0, 4)} />
    </Box>
  );
};

export default UpcomingEvents;
