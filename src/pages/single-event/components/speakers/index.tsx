import React from 'react';
import { Typography, Box } from '@mui/material';
import SpeakersSlider from './components/speakers-slider';

const Speakers: React.FC = () => {
  return (
    <Box component="section" display="flex" flexDirection="column" mt={20} mb={35}>
      <Typography component="h2" variant="h3" mb={15}>
        Спикеры
      </Typography>
      <SpeakersSlider />
    </Box>
  );
};

export default Speakers;
