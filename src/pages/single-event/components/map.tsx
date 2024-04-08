import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import mapImg from '../../../assets/images/mock_map.png';

const Map: React.FC = () => {
  return (
    <Box
      component="section"
      display="flex"
      flexDirection="column"
      alignItems="center"
      sx={{ marginBottom: '121px' }}
    >
      <Typography component="h2" variant="h2" mb={13} alignSelf="start">
        Карта
      </Typography>
      <img src={mapImg as unknown as string} alt="Map" style={{ display: 'block' }} />
      <Typography component="p" sx={{ marginTop: '28px', marginBottom: '24px' }}>
        Адрес и другие нюансы
      </Typography>

      <Box display="flex" justifyContent="space-between" sx={{ width: '912px' }}>
        <Button>Проложить маршрут(навигатор)</Button>
        <Button>Вызвать такси</Button>
      </Box>
    </Box>
  );
};

export default Map;
