import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import EastIcon from '@mui/icons-material/East';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { posterImages } from '../../../../../libs/constants';
import TitleLink from './title-link';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Carousel: React.FC = () => {
  const sliderRef = React.useRef<SwiperRef>(null);

  const handlePrev = React.useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = React.useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <Box
      component="section"
      display="flex"
      flexDirection="column"
      width="912px"
      borderRadius="16px"
      p={8}
      sx={{ background: '#E0E0E0' }}
    >
      <Typography component="h3" variant="h6" mb={4}>
        Саммит Кибербезопасности 2023
      </Typography>
      <Typography component="p" variant="body1" mb={4}>
        The studio's approach to design encompasses a wide range of scales, from micro to global,
        and treats each project as a laboratory for testing future models of urban inhabitation.
        Their focus is on creating scalable nature-based solutions to address the challenges faced
        by contemporary cities in achieving carbon neutrality and mitigating climate change effects.
      </Typography>

      <Box
        display="flex"
        sx={{
          width: '850px',
          overflow: 'hidden',
        }}
      >
        <Swiper
          ref={sliderRef}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          loop
          slidesPerView={4}
          spaceBetween={48}
        >
          {posterImages.map((photo, i) => (
            <SwiperSlide key={i}>
              <img
                src={photo.img}
                width="216px"
                height="216px"
                style={{
                  objectFit: 'cover',
                  boxSizing: 'border-box',
                  overflow: 'hidden',
                  marginRight: '8px',
                  borderRadius: '12px',
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>

      <Box mt={6} display="flex" alignSelf="end" gap={4} alignItems="center">
        <TitleLink />
        <Box display="flex" gap={2}>
          <IconButton onClick={handlePrev}>
            <KeyboardBackspaceIcon />
          </IconButton>
          <IconButton onClick={handleNext}>
            <EastIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Carousel;
