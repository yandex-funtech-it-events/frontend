import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import mapImg from '../../../../assets/images/mock_map.png';
import NavigatorLogo from './components/navigator-icon';
import TaxiLogo from './components/taxi-icon';

const Map: React.FC = () => {
  return (
    <Box component="section" display="flex" flexDirection="column" alignItems="center" mb={20}>
      <Typography component="h2" variant="h3" mb={10} alignSelf="start">
        Карта
      </Typography>

      <img src={mapImg as unknown as string} alt="Map" style={{ display: 'block' }} />

      <Typography component="p" variant="h6" mt={5} mb={5}>
        Москва, ул. Верхняя Красносельская,д. 2/1, стр. 1
      </Typography>
      <Typography component="p" variant="body2" mb={5}>
        метро Бауманская
      </Typography>

      <Box display="flex" flexDirection="column" justifyContent="center" gap={5}>
        <Button sx={{ display: 'flex' }}>
          <Typography content="p" mr={2}>
            Вызвать такси
          </Typography>{' '}
          <NavigatorLogo />
        </Button>
        <Button sx={{ display: 'flex' }}>
          <Typography content="p" mr={2}>
            Проложить маршрут{' '}
          </Typography>
          <TaxiLogo />
        </Button>
      </Box>
    </Box>
  );
};

export default Map;
