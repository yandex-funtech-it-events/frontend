import { Box, Button, Container, Stack, Typography } from '@mui/material';
import InfoForm from '../../features/auth/components/info-form';

const AuthPage = () => {
  return (
    <Container>
      <Box display="flex" gap={4} pt={25}>
        <Stack
          spacing={10}
          pt={12}
          px={10}
          pb={14}
          borderRadius={5}
          sx={{
            height: 'fit-content',
            backgroundColor: (theme) => theme.palette.primary?.light,
          }}
        >
          <Typography variant="h3" color="white">
            Вы заполняете данные один раз и регистрируйтесь один клик на мероприятие!
          </Typography>

          <Button
            href="/"
            color="secondary"
            sx={{
              width: 'fit-content',
            }}
          >
            заполнить позже
          </Button>
        </Stack>

        <InfoForm />
      </Box>
    </Container>
  );
};

export default AuthPage;
