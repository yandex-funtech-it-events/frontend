import { Box } from '@mui/material';
import EventCard from './event-card.tsx';
import { EventType } from '../types';

type EventListProps = {
  events: EventType[];
  gap?: number;
};

const EventList = ({ events, gap = 4 }: EventListProps) => {
  return (
    <Box
      component="ul"
      display="flex"
      flexWrap="wrap"
      gap={gap}
      m={0}
      p={0}
      sx={{ listStyle: 'none' }}
    >
      {events.map((event, index) => (
        <li key={index}>
          <EventCard event={event} />
        </li>
      ))}
    </Box>
  );
};

export default EventList;
