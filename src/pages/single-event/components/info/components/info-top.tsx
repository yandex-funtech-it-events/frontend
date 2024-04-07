import React from 'react';
import { Box, Typography, Chip } from '@mui/material';

const InfoTop: React.FC = () => {
  const mocInfoArray = ['28.04.24-29.04.24', 'Нижний Новгород', 'Оффлайн/Онлайн'];

  return (
    <Box
      sx={{ border: '1px dashed blue' }}
      display="flex"
      justifyContent="space-between"
      mb="100px"
    >
      <Box display="flex" flexDirection="column" gap={4}>
        {mocInfoArray.map((text, i) => (
          <Typography key={i}>{text}</Typography>
        ))}
      </Box>
      <Chip label="Регистрация открыта" />
    </Box>
  );
};

export default InfoTop;
