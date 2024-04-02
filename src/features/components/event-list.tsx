import { Box } from '@mui/material';
import EventCard from './event-card.tsx';
import { posterImages } from '../../libs/constants.ts';

const EventList = () => {
  return (
    <Box
      component="ul"
      display="flex"
      flexWrap="wrap"
      gap={4}
      m={0}
      p={0}
      sx={{ listStyle: 'none' }}
    >
      {posterImages.slice(0, 4).map((item, index) => (
        <li key={index}>
          <EventCard bgImage={item.img} />
        </li>
      ))}
    </Box>
  );
};

export default EventList;
