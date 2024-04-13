import React from 'react';
import { Box, Typography } from '@mui/material';
import author from '../../../../../assets/images/mock_program_speaker.png';

interface CustomTabCardProps {
  time: string;
  date: string;
  data: string;
  eventName: string;
  profession: string;
  description: string;
}

const CustomTabCard: React.FC<CustomTabCardProps> = ({
  time,
  date,
  data,
  eventName,
  profession,
  description,
}) => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      width="888px"
      pt={5}
      pb={5}
      pl={8}
      pr={8}
      mb={5}
      borderRadius="16px"
      boxShadow="0px 0px 10px 0px rgba(0, 0, 0, 0.05)"
      sx={{
        background: '#F5F4F5',
      }}
    >
      <Box display="flex">
        <Box display="flex" flexDirection="column" gap={1}>
          <Typography variant="h6" sx={{ textAlign: 'center' }}>
            {time}
          </Typography>
          <Typography variant="body2">{date}</Typography>
        </Box>
      </Box>

      <Box display="flex" flexDirection="column" gap={4}>
        <Typography variant="h6">{eventName}</Typography>
        <Typography variant="body2" textAlign="left" sx={{ width: '474px' }}>
          {description}
        </Typography>
      </Box>

      <Box display="flex" sx={{ gap: '8px' }}>
        <Box display="flex" flexDirection="column">
          <Typography variant="body2">{data}</Typography>
          <Typography variant="body2" textAlign="center">
            {profession}
          </Typography>
        </Box>
        <img src={author as unknown as string} alt="Speaker" />
      </Box>
    </Box>
  );
};

export default CustomTabCard;
