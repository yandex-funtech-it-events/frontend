import React from 'react';
import { useModal } from '../../../hooks/use-modal.ts';
import { Box, Typography, Button, Container } from '@mui/material';

const Register: React.FC = () => {
  const { onOpen } = useModal();
  return (
    <Container>
      <Box
        id="register"
        component="section"
        display="flex"
        flexDirection="column"
        alignItems="center"
        mb={20}
      >
        <Typography component="h2" variant="h3" mb={10} alignSelf="start">
          Регистрация
        </Typography>
        <Typography component="p" variant="h6" mb={5}>
          Название мероприятия
        </Typography>
        <Typography component="p" variant="body2" mb={10}>
          Самый масштабный саммит о кибербезопасности в России по количеству участников и спикеров
        </Typography>
        <Button
          variant="contained"
          onClick={() => onOpen('register-modal')}
          sx={{
            display: 'flex',
            alignItems: 'center',
            padding: '17px',
            letterSpacing: '1px',
            maxWidth: '678px',
            width: '100%',
          }}
        >
          Зарегистрироваться
        </Button>
      </Box>
    </Container>
  );
};

export default Register;
