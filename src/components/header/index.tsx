import { AppBar, Box, Container, Toolbar } from '@mui/material';
import MobileMenu from './components/mobile-menu.tsx';
import MainMenu from './components/main-menu.tsx';
import Logo from '../logo.tsx';

const Header = () => {
  return (
    <Box
      width={1}
      sx={{
        margin: '0 auto',
        background: 'white',
        position: 'fixed',
        zIndex: '999999999999999',
      }}
    >
      <Box
        width={1440}
        px={8}
        pt={4}
        sx={{
          margin: '0 auto',
        }}
      >
        <AppBar elevation={0} position="static" color="transparent">
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            <Logo />

            <MainMenu />

            <MobileMenu />
          </Toolbar>
        </AppBar>
      </Box>
    </Box>
  );
};

export default Header;
