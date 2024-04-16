import { useState } from 'react';
import { Box, Button, IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import UserMenu from './user-menu.tsx';
import Notification from '../../notification.tsx';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenMenu = () => {
    setIsOpen(true);
  };

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  return (
    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
      <IconButton
        size="large"
        aria-label="show more"
        aria-controls="menu-mobile"
        aria-haspopup="true"
        onClick={handleOpenMenu}
        color="inherit"
      >
        <MenuIcon />
      </IconButton>

      <Menu
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        id="menu-mobile"
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={isOpen}
        onClose={handleCloseMenu}
      >
        <MenuItem>
          <Button href="/afisha">Афиша</Button>
        </MenuItem>
        <MenuItem>
          <Button href="/my-events">Мои события</Button>
        </MenuItem>
        <MenuItem>
          <Notification />
        </MenuItem>
        <MenuItem>
          <UserMenu />
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default MobileMenu;
