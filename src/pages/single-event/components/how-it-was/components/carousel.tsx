import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import EastIcon from '@mui/icons-material/East';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { posterImages } from '../../../../../libs/constants';

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
      alignItems="center"
      width="912px"
      borderRadius="16px"
      sx={{ background: '#E0E0E0', padding: '42px 42px' }}
    >
      <Typography mb={2}>Заголовок</Typography>
      <Typography mb={10}>
        The studio's approach to design encompasses a wide range of scales, from micro to global,
        and treats each project as a laboratory for testing future models of urban inhabitation.
        Their focus is on creating scalable nature-based solutions to address the challenges faced
        by contemporary cities in achieving carbon neutrality and mitigating climate change effects.
      </Typography>

      <Box
        display="flex"
        sx={{
          width: '99%',
          gap: '16px',
          border: '1px solid red',
        }}
      >
        <Swiper ref={sliderRef} modules={[Navigation, Pagination, Scrollbar, A11y]} loop>
          {posterImages.map((event, i) => (
            <SwiperSlide key={i}>
              <img src={event.img} width="216px" height="216px" style={{ objectFit: 'cover' }} />
            </SwiperSlide>
          ))}
        </Swiper>
        {/* <IconButton
          onClick={handlePrev}
          sx={{
            padding: '8px',
            position: 'absolute',
            top: '45%',
            left: '-15px',
            zIndex: '99',
            backgroundColor: 'rgba(255, 255, 255, 0.12)',
          }}
        >
          <KeyboardBackspaceIcon />
        </IconButton>
        <IconButton
          onClick={handleNext}
          sx={{
            padding: '8px',
            position: 'absolute',
            top: '45%',
            right: '-15px',
            zIndex: '99',
            backgroundColor: 'rgba(255, 255, 255, 0.12)',
          }}
        >
          <EastIcon />
        </IconButton> */}
      </Box>
    </Box>
  );
};

export default Carousel;
