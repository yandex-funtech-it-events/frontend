import { Box, Button } from '@mui/material';
import UserMenu from './user-menu.tsx';

const MainMenu = () => {
  return (
    <Box display="flex" alignItems="center" gap={7} sx={{ display: { xs: 'none', md: 'flex' } }}>
      <Button href="/afisha" variant="link" size="large">
        Афиша
      </Button>
      <Button href="/my-events" variant="contained" size="large">
        Войти
      </Button>

      <UserMenu />
    </Box>
  );
};

export default MainMenu;
