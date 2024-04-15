import { AppBar, Box, Toolbar, Container } from '@mui/material';
import MobileMenu from './components/mobile-menu.tsx';
import MainMenu from './components/main-menu.tsx';
import Logo from '../logo.tsx';

const Header = () => {
  return (
    <Container id="header">
      <Box pt={4} sx={{ flexGrow: 1 }}>
        <AppBar elevation={0} position="static" color="transparent">
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            <Logo />

            <MainMenu />

            <MobileMenu />
          </Toolbar>
        </AppBar>
      </Box>
    </Container>
  );
};

export default Header;
