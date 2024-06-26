import React from 'react';
import { Box, IconButton } from '@mui/material';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import EastIcon from '@mui/icons-material/East';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import SpeakerCard from './speakers-card';
import { useAppSelector } from '../../../../../libs/store';
import { eventSelectors } from '../../../../../features/event/slices';

const SpeakersSlider: React.FC = () => {
  const sliderRef = React.useRef<SwiperRef>(null);
  const reports = useAppSelector(eventSelectors.getReports);

  const handlePrev = React.useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = React.useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <>
      <Box display="flex" flexWrap="nowrap" sx={{ marginLeft: '210px' }}>
        <Box display="flex" overflow="hidden">
          <Swiper
            ref={sliderRef}
            slidesPerView={6}
            spaceBetween={200}
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            loop
          >
            {reports.map((card, i) => (
              <SwiperSlide key={i}>
                <SpeakerCard
                  key={i}
                  data={card.speaker}
                  profession={card.position}
                  link={card.speaker_photo}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Box>
      <Box mt={2} display="flex" alignSelf="end" gap={1}>
        <IconButton onClick={handlePrev}>
          <KeyboardBackspaceIcon />
        </IconButton>
        <IconButton onClick={handleNext}>
          <EastIcon />
        </IconButton>
      </Box>
    </>
  );
};

export default SpeakersSlider;
