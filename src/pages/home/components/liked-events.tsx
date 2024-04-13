import { Box, Typography } from '@mui/material';
import EventCard from '../../../features/event/components/event-card.tsx';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EventType } from '../../../features/event/types';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

type LikedEventsProps = {
  events: EventType[];
};

const LikedEvents = ({ events }: LikedEventsProps) => {
  return (
    <Box
      component="section"
      display="flex"
      flexDirection="column"
      gap={13}
      width={1}
      sx={{ overflow: 'hidden' }}
    >
      <Typography variant="h2">Вам понравились события</Typography>

      <Swiper spaceBetween={16} slidesPerView={3} width={1440}>
        {events.map((event) => (
          <SwiperSlide key={event.id}>
            <EventCard event={event} eventSize="md" />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default LikedEvents;
