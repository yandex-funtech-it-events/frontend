import React from 'react';
import { Box, Typography } from '@mui/material';
import author from '../../../../../assets/images/mock_program_speaker.png';

interface SpeakerCardProps {
  name: 'string';
  profession: 'string';
}

const SpeakerCard: React.FC<SpeakerCardProps> = ({ name, profession }) => {
  return (
    <Box display="flex" sx={{ gap: '8px' }}>
      <Box display="flex" flexDirection="column">
        <Typography variant="body2" color="rgba(0, 0, 0, 0.87)">
          {name}
        </Typography>
        <Typography variant="body2" textAlign="center">
          {profession}
        </Typography>
      </Box>
      <img src={author as unknown as string} alt="Speaker" width="100px" height="100px" />
    </Box>
  );
};

export default SpeakerCard;
