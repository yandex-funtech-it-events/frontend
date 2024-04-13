import React from 'react';

import { Box, Typography, Button } from '@mui/material';

import Chips from '../../chips';

const InfoAbout: React.FC = () => {
  return (
    <Box>
      <Typography component="h2" variant="h3" mb={5}>
        Дизайн выходные
      </Typography>
      <Chips />
      <Typography variant="body1" sx={{ height: '168px', marginBottom: '78px' }} mt={5}>
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
