import React from 'react';
import { Typography, Box } from '@mui/material';
import SpeakerCard from './components/speakers-card';
import { mockDataSpeakers } from '../../../../libs/constants';

const Speakers: React.FC = () => {
  return (
    <Box component="section" display="flex" flexDirection="column" sx={{ marginBottom: '185px' }}>
      <Typography component="h2" variant="h2" mb={5}>
        Спикеры
      </Typography>

      <Box
        display="flex"
        gap={2}
        flexWrap="nowrap"
        sx={{ border: '1px solid red', marginLeft: '250px' }}
      >
        {mockDataSpeakers.map((card, i) => (
          <SpeakerCard key={i} data={card.data} profession={card.profession} />
        ))}
      </Box>
    </Box>
  );
};

export default Speakers;
