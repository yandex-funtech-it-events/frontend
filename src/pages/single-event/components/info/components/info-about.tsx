import React from 'react';

import { Box, Typography, Button } from '@mui/material';

import Chips from '../../chips';

const InfoAbout: React.FC = () => {
  return (
    <Box>
      <Typography variant="h2" mb={3}>
        Дизайн выходные
      </Typography>
      <Chips />
      <Typography sx={{ height: '168px', marginBottom: '50px' }} mt={3}>
        Описание мероприятия
      </Typography>

      <Button
        variant="contained"
        style={{
          display: 'flex',
          alignItems: 'center',
          padding: '32px',
          width: '100%',
          background: '#FF4D00',
          letterSpacing: '1px',
          textTransform: 'uppercase',
        }}
      >
        Зарегистрироваться
      </Button>
    </Box>
  );
};

export default InfoAbout;
