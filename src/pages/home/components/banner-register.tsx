import { Button, Stack, Typography } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const BannerRegister = () => {
  return (
    <Stack
      spacing={8}
      px={10}
      pt={15}
      pb={20}
      borderRadius={5}
      sx={{
        backgroundColor: 'white',
      }}
    >
      <Typography
        variant="h2"
        color="text.secondary"
        sx={{
          width: '88%',
          fontWeight: 800,
          fontSize: '40px',
          lineHeight: '120%',
          letterSpacing: '0.46px',
          fontFamily: 'Montserrat, sans-serif',
        }}
      >
        Зарегистрируйся на Meetup и получи доступ к 200 событий в сфере IT
      </Typography>
      <Button
        href="/"
        size="large"
        variant="contained"
        sx={{
          width: 'fit-content',
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
        }}
      >
        зарегистрироваться
        <ChevronRightIcon fontSize="large" />
      </Button>
    </Stack>
  );
};

export default BannerRegister;
