import React from 'react';
import { Typography, Box, Container } from '@mui/material';
import SpeakersSlider from './components/speakers-slider';

const Speakers: React.FC = () => {
  return (
    <Container sx={{ background: '#fff' }}>
      <Box id="speakers" component="section" display="flex" flexDirection="column" mt={20} mb={35}>
        <Typography component="h2" variant="h3" mb={15}>
          Спикеры
        </Typography>
        <SpeakersSlider />
      </Box>
    </Container>
  );
};

export default Speakers;
