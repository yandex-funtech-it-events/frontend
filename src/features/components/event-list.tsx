import { Box } from '@mui/material';
import EventCard from './event-card.tsx';

type EventListProps<T> = {
  events: T[];
  gap?: number;
};

const EventList = ({ events, gap = 4 }: EventListProps<{ img: string }>) => {
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
      {events.map((item, index) => (
        <li key={index}>
          <EventCard bgImage={item.img} />
        </li>
      ))}
    </Box>
  );
};

export default EventList;
