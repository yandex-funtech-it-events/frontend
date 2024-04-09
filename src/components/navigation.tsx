import { Box, Divider, Link, ListItemIcon, ListItemText, MenuItem, MenuList } from '@mui/material';
import { menuLinkMock } from '../libs/constants.ts';

const Navigation = ({ showDivider = false }: { showDivider?: boolean }) => {
  return (
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

        {showDivider && <Divider />}

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
  );
};

export default Navigation;
