import React from 'react';
import { Box, Typography, Chip } from '@mui/material';

const InfoTop: React.FC = () => {
  const mockInfoArray = ['28.04.24-29.04.24', 'Нижний Новгород', 'Оффлайн/Онлайн'];

  return (
    <Box display="flex" justifyContent="space-between" mb="100px">
      <Box display="flex" flexDirection="column" gap={4}>
        {mockInfoArray.map((text, i) => (
          <Typography key={i}>{text}</Typography>
        ))}
      </Box>
      <Chip label="Регистрация открыта" />
    </Box>
  );
};

export default InfoTop;
