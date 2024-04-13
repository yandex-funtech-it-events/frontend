import React from 'react';
import { Typography, Box } from '@mui/material';
import speaker from '../../../../../assets/images/mock_speaker.png';

interface SpeakerCardProps {
  data: string;
  profession: string;
}

const SpeakerCard: React.FC<SpeakerCardProps> = ({ data, profession }) => {
  return (
    <Box display="flex" flexDirection="column" gap={4} width="216px">
      <img src={speaker} alt="Speaker" />
      <Typography variant="body1">{data}</Typography>
      <Typography variant="body2">{profession}</Typography>
    </Box>
  );
};

export default SpeakerCard;
