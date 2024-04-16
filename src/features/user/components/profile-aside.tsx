import { Box, Link, ListItemIcon, ListItemText, MenuItem, MenuList } from '@mui/material';
import { menuLinkMock } from '../../../libs/constants.ts';

const ProfileAside = () => {
  return (
    <Box
      component="aside"
      width={1}
      maxWidth={266}
      borderRadius={5}
      py={5}
      px={4}
      sx={{
        height: 'fit-content',
        background: 'white',
        position: 'fixed',
        backgroundColor: '#F4F1ED',
      }}
    >
      <Box component="nav">
        <MenuList>
          {menuLinkMock.slice(0, -1).map((link) => (
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

          {menuLinkMock.slice(-1).map((link) => (
            <Link
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
    </Box>
  );
};

export default ProfileAside;
