import React from 'react';
import { Typography, Box } from '@mui/material';
import speaker from '../../../../../assets/images/mock_speaker.png';

interface SpeakerCardProps {
  data: string;
  profession: string;
}

const SpeakerCard: React.FC<SpeakerCardProps> = ({ data, profession }) => {
  return (
    <Box display="flex" flexDirection="column" gap={2} width={'216px'}>
      <img src={speaker} alt="Speaker" />
      <Typography>{data}</Typography>
      <Typography>{profession}</Typography>
    </Box>
  );
};

export default SpeakerCard;
