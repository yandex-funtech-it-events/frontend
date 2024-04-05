import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Scrollbar } from 'swiper/modules';
import BannerCard from './banner-card.tsx';
import { Box } from '@mui/material';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Banner = () => {
  return (
    <Box width={1} pb={20}>
      <Swiper
        modules={[Pagination, Scrollbar]}
        pagination={{
          clickable: true,
        }}
        slidesPerView={1}
        width={1440}
      >
        {Array.from({ length: 6 }).map((_, index) => (
          <SwiperSlide key={index}>
            <BannerCard isSlider />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Banner;
