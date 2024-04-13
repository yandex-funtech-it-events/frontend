import * as React from 'react';
import { Box, IconButton, Menu, Typography } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Navigation from '../../navigation.tsx';

const UserMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
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
          onClick={handleClick}
          color="inherit"
        >
          <AccountCircle />
        </IconButton>

        <Typography component="p" sx={{ display: { xs: 'block', md: 'none' } }}>
          Profile
        </Typography>
      </Box>

      <Menu
        sx={{ mt: { xs: '245px', md: '50px' } }}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        anchorEl={anchorEl}
        id="user-menu"
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={open}
        onClose={handleClose}
      >
        <Navigation showDivider nestedPath="/profile" />
      </Menu>
    </>
  );
};

export default UserMenu;
