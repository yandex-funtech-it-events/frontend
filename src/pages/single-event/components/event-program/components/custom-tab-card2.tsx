import React from 'react';
import { Box, Typography } from '@mui/material';
//import author from '../../../../../assets/images/mock_program_speaker.png';
import SpeakerCard from './speaker-card-info';

interface CustomTabCardProps {
  time: string;
  date: string;
  eventName: string;
  description: string;
  data: { name: string; profession: string }[];
}

const CustomTabCard2: React.FC<CustomTabCardProps> = ({
  time,
  date,
  eventName,
  description,
  data,
}) => {
  return (
    <Box
      display="flex"
      gap={5}
      width="888px"
      pt={5}
      pb={5}
      pl={8}
      pr={8}
      mb={5}
      borderRadius="16px"
      boxShadow="0px 0px 10px 0px rgba(0, 0, 0, 0.05)"
      sx={{
        background: '#fff',
      }}
    >
      <Box display="flex">
        <Box display="flex" flexDirection="column" gap={1}>
          <Typography variant="h6" sx={{ textAlign: 'center' }}>
            {time}
          </Typography>
          <Typography variant="body2" textAlign="center">
            {date}
          </Typography>
        </Box>
      </Box>

      <Box display="flex" flexDirection="column" width="100%" gap={6}>
        <Box display="flex" flexDirection="column" gap={4}>
          <Typography variant="h6">{eventName}</Typography>
          <Typography variant="body1" textAlign="left" sx={{ width: '474px' }}>
            {description}
          </Typography>
        </Box>
        <Box display="flex" alignSelf="end" gap={5}>
          {data.map((item, i) => (
            <SpeakerCard key={i} name={item.name} profession={item.profession} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default CustomTabCard2;
