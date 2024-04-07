import React from 'react';

import { Box, Typography, Chip, Button } from '@mui/material';

const InfoAbout: React.FC = () => {
  const mocChipsArray = ['теги', 'теги', 'теги', 'теги', 'теги', 'теги', 'теги'];

  return (
    <Box>
      <Typography variant="h2">Дизайн выходные</Typography>
      <Box display="flex" mt={3} mb={3}>
        {mocChipsArray.map((chip, i) => (
          <Chip label={chip} key={i} />
        ))}
      </Box>
      <Typography sx={{ height: '168px', marginBottom: '50px' }}>Описание мероприятия</Typography>

      <Button
        variant="contained"
        style={{
          display: 'flex',
          alignItems: 'center',
          padding: '32px',
          width: '100%',
          background: '#FF4D00',
        }}
      >
        Зарегистрироваться
      </Button>
    </Box>
  );
};

export default InfoAbout;
