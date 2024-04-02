import { Box, Typography } from '@mui/material';
import EventCard from '../../../features/components/event-card.tsx';
import event from '@/assets/images/event_card.png';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const LikedEvents = () => {
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
        {Array.from({ length: 6 }).map((_, index) => (
          <SwiperSlide key={index}>
            <EventCard key={index} bgImage={event} eventSize="md" />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default LikedEvents;
