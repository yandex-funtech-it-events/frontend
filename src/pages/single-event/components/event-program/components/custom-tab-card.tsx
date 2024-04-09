import React from 'react';
import { Box, Typography } from '@mui/material';
import author from '../../../../../assets/images/mock_program_speaker.png';

interface CustomTabCardProps {
  time: string;
  date: string;
  data: string;
  profession: string;
  description: string;
}

const CustomTabCard: React.FC<CustomTabCardProps> = ({
  time,
  date,
  data,
  profession,
  description,
}) => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      sx={{
        width: '888px',
        padding: '28px',
        background: '#F5F4F5',
        borderRadius: '16px',
        gap: '28px',
        marginBottom: '30px',
      }}
    >
      <Box display="flex">
        <Box display="flex" flexDirection="column">
          <Typography sx={{ textAlign: 'center' }}>{time}</Typography>
          <Typography>{date}</Typography>
        </Box>
      </Box>

      <Typography textAlign="left" sx={{ width: '474px' }}>
        {description}
      </Typography>

      <Box display="flex" sx={{ gap: '8px' }}>
        <Box display="flex" flexDirection="column">
          <Typography>{data}</Typography>
          <Typography sx={{ textAlign: 'center' }}>{profession}</Typography>
        </Box>
        <img src={author as unknown as string} alt="Speaker" />
      </Box>
    </Box>
  );
};

export default CustomTabCard;
