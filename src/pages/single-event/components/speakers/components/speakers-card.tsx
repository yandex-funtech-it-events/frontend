import React from 'react';
import { Typography, Box } from '@mui/material';

interface SpeakerCardProps {
  data: string;
  profession: string;
  link: string;
}

const SpeakerCard: React.FC<SpeakerCardProps> = ({ data, profession, link }) => {
  return (
    <Box display="flex" flexDirection="column" gap={4} width="216px">
      <img
        src={link}
        alt="Speaker"
        style={{ width: '216px', height: '216px', borderRadius: '12px' }}
      />
      <Typography variant="body1">{data}</Typography>
      <Typography variant="body2">{profession}</Typography>
    </Box>
  );
};

export default SpeakerCard;
