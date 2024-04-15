import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import mapImg from '../../../assets/images/mock_map.png';
import nav from '../../../assets/icons/navigation.svg';
import taxi from '../../../assets/icons/taxi.svg';

const Map: React.FC = () => {
  return (
    <Container>
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

        <Box display="flex" flexDirection="column" gap={5} maxWidth="680px" width="100%">
          <Button color="secondary" sx={{ padding: '18px' }}>
            <Typography content="p" mr={2} sx={{ fontWeight: '800' }}>
              Вызвать такси
            </Typography>{' '}
            <img src={nav} alt="Navigator logo" />
          </Button>
          <Button color="secondary" sx={{ padding: '18px' }}>
            <Typography content="p" mr={2} sx={{ fontWeight: '800' }}>
              Проложить маршрут{' '}
            </Typography>
            <img src={taxi} alt="Taxi logo" />
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Map;
