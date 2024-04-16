import { Box, Button } from '@mui/material';
import UserMenu from './user-menu.tsx';
import { useCurrentUser } from '../../../features/user/hooks/use-current-user.ts';

const MainMenu = () => {
  const { token, userInfo } = useCurrentUser();

  return (
    <Box display="flex" alignItems="center" gap={7} sx={{ display: { xs: 'none', md: 'flex' } }}>
      <Button href="/" variant="link" size="large">
        Афиша
      </Button>
      {!token && (
        <Button href="/login" variant="contained" size="large">
          Войти
        </Button>
      )}

      {token && <UserMenu picture={userInfo?.info.image} />}
    </Box>
  );
};

export default MainMenu;
