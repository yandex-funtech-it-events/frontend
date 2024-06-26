import * as React from 'react';
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Link,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  MenuList,
  Typography,
} from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { menuLinkMock } from '../../../libs/constants.ts';
import { useAppDispatch } from '../../../libs/store.ts';
import { authActions } from '../../../features/auth/slices';

type UserMenuProps = {
  picture?: string;
};

const UserMenu = ({ picture }: UserMenuProps) => {
  const dispatch = useAppDispatch();
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
          {picture ? <Avatar src={picture} /> : <AccountCircle />}
        </IconButton>

        <Typography component="p" sx={{ display: { xs: 'block', md: 'none' } }}>
          Profile
        </Typography>
      </Box>

      <Menu
        sx={{ mt: { xs: '245px', md: '60px' } }}
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
        <Box component="nav">
          <MenuList>
            {menuLinkMock.slice(0, 1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                underline="none"
                color="text.secondary"
                sx={{
                  textTransform: 'uppercase',
                }}
              >
                <MenuItem>
                  <ListItemIcon>
                    <link.icon />
                  </ListItemIcon>
                  <ListItemText>{link.label}</ListItemText>
                </MenuItem>
              </Link>
            ))}

            <Divider />

            {menuLinkMock.slice(-1).map((link) => (
              <Link
                onClick={() => dispatch(authActions.logout())}
                key={link.href}
                underline="none"
                color="text.secondary"
                sx={{
                  textTransform: 'uppercase',
                }}
              >
                <MenuItem>
                  <ListItemIcon>
                    <link.icon />
                  </ListItemIcon>
                  <ListItemText>{link.label}</ListItemText>
                </MenuItem>
              </Link>
            ))}
          </MenuList>
        </Box>
      </Menu>
    </>
  );
};

export default UserMenu;
