import { AppBar, Box, Toolbar } from '@mui/material';
import MobileMenu from './components/mobile-menu.tsx';
import MainMenu from './components/main-menu.tsx';
import Logo from '../logo.tsx';

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar elevation={0} position="static" color="transparent">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Logo />

          <MainMenu />

          <MobileMenu />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
