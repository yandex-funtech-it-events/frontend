import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const Register: React.FC = () => {
  return (
    <Box
      component="section"
      display="flex"
      flexDirection="column"
      alignItems="center"
      sx={{ marginBottom: '230px' }}
    >
      <Typography component="h2" variant="h2" mb={5} alignSelf="start">
        Регистрация
      </Typography>
      <Typography component="p" mb={3}>
        Призыв к регистрации
      </Typography>
      <Typography component="p" mb={5}>
        Описание нюансов регистрации
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
