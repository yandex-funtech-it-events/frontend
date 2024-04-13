import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const Register: React.FC = () => {
  return (
    <Box component="section" display="flex" flexDirection="column" alignItems="center" mb={20}>
      <Typography component="h2" variant="h3" mb={10} alignSelf="start">
        Регистрация
      </Typography>
      <Typography component="p" variant="h6" mb={5}>
        Название мероприятия
      </Typography>
      <Typography component="p" variant="h6" mb={10}>
        Самый масштабный саммит о кибербезопасности в России по количеству участников и спикеров
      </Typography>
      <Button
        sx={{
          display: 'flex',
          alignItems: 'center',
          padding: '32px',
          background: '#FF4D00',
          letterSpacing: '1px',
          textTransform: 'uppercase',
          color: 'white',
          maxWidth: '678px',
          width: '100%',
        }}
      >
        Зарегистрироваться
      </Button>
    </Box>
  );
};

export default Register;
