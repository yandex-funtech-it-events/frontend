import { Box, IconButton, Menu, MenuItem, Typography } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { useState } from 'react';

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenMenu = () => {
    setIsOpen(true);
  };

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Box display="flex" alignItems="center" gap={2}>
        <IconButton
          size="large"
          edge="end"
          aria-label="account of current user"
          aria-controls="user-menu"
          aria-haspopup="true"
          onClick={handleOpenMenu}
          color="inherit"
        >
          <AccountCircle />
        </IconButton>

        <Typography component="p" sx={{ display: { xs: 'block', md: 'none' } }}>
          Profile
        </Typography>
      </Box>

      <Menu
        sx={{ mt: { xs: '245px', md: '45px' } }}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        id="user-menu"
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={isOpen}
        onClose={handleCloseMenu}
      >
        <MenuItem onClick={handleCloseMenu}>Profile</MenuItem>
        <MenuItem onClick={handleCloseMenu}>My account</MenuItem>
      </Menu>
    </>
  );
};

export default UserMenu;
