import { Box, Button } from '@mui/material';
import UserMenu from './user-menu.tsx';
import Notification from '../../notification.tsx';

const MainMenu = () => {
  return (
    <Box display="flex" alignItems="center" gap={1} sx={{ display: { xs: 'none', md: 'flex' } }}>
      <Button href="/afisha">Афиша</Button>
      <Button href="/my-events">Мои события</Button>
      <Notification />

      <UserMenu />
    </Box>
  );
};

export default MainMenu;
