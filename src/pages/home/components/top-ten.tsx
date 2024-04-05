import { Box, IconButton, Typography } from '@mui/material';
import EventCard from '../../../features/event/components/event-card.tsx';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { useCallback, useRef } from 'react';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import EastIcon from '@mui/icons-material/East';
import CurlyBraces from '../../../components/curly-braces.tsx';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

type TopTenProps<T> = {
  events: T[];
};

const TopTen = ({
  events,
}: TopTenProps<{ img: string; title: string; cols?: number; rows?: number }>) => {
  const sliderRef = useRef<SwiperRef>(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <Box
      component="section"
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap={13}
      borderRadius={5}
      pt={20}
      pb={30}
      px={25}
      sx={{
        background: 'rgba(0, 0, 0, 0.87)',
        zIndex: 1,
      }}
    >
      <Box display="flex" alignItems="center" gap={5}>
        <CurlyBraces>
          <Typography
            variant="h2"
            textAlign="center"
            sx={{
              color: '#FF6E2C',
            }}
          >
            Топ-10
          </Typography>
        </CurlyBraces>
        <Typography
          variant="h2"
          textAlign="center"
          sx={{
            color: 'white',
          }}
        >
          Событий предстоящего лета
        </Typography>
      </Box>

      <Box
        width={1}
        sx={{
          position: 'relative',
        }}
      >
        <Box
          sx={{
            width: '90%',
            margin: '0 auto',
          }}
        >
          <Swiper
            ref={sliderRef}
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            slidesPerView={3}
            loop
            width={1060}
          >
            {events.map((event, index) => (
              <SwiperSlide key={index}>
                <EventCard bgImage={event.img} />
              </SwiperSlide>
            ))}
          </Swiper>
          <IconButton
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
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default TopTen;
