import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Scrollbar } from 'swiper/modules';
import BannerCard from './banner-card.tsx';
import { Box } from '@mui/material';
import { EventType } from '../../../features/event/types';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import BannerCardSkeleton from './banner-card-skeleton.tsx';

type BannerProps = {
  events: EventType[];
  isLoading?: boolean;
};

const Banner = ({ events, isLoading = false }: BannerProps) => {
  return (
    <Box width={1} pb={20}>
      {isLoading ? (
        <BannerCardSkeleton />
      ) : (
        <Swiper
          modules={[Pagination, Scrollbar]}
          pagination={{
            clickable: true,
          }}
          slidesPerView={1}
          width={1440}
        >
          {events.map((event) => (
            <SwiperSlide key={event.id}>
              <BannerCard event={event} isSlider />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </Box>
  );
};

export default Banner;
